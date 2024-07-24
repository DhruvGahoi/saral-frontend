import { ReactNode } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useTaskService } from '../services/tasks';
import { useStore } from './Store';
import { ACTIONS } from '../constants/AppConstants';

const DragAndDropProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { updateTask } = useTaskService();
  const { tasks, dispatch } = useStore();

  function onDragEnd(result: DropResult) {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    let updatedTask;
    let completeTasks = tasks.completeTasks;
    let incompleteTasks = tasks.incompleteTasks;

    if (source.droppableId === 'completedTasks') {
      updatedTask = completeTasks[source.index];
      updatedTask.completed = false;
      completeTasks.splice(source.index, 1);
    } else {
      updatedTask = incompleteTasks[source.index];
      updatedTask.completed = true;
      incompleteTasks.splice(source.index, 1);
    }

    if (destination.droppableId === 'completedTasks') {
      completeTasks.splice(destination.index, 0, updatedTask);
    } else {
      incompleteTasks.splice(destination.index, 0, updatedTask);
    }

    // optimistic update for the tasks
    dispatch({
      type: ACTIONS.UPDATE_TASKS,
      payload: { tasks: { completeTasks, incompleteTasks } },
    });

    // in real world scenario we can revert the change if api call failed
    updateTask({ completed: updatedTask.completed }, draggableId).catch(
      (error: any) => {
        console.error(error);
      }
    );
  }

  return <DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>;
};

export default DragAndDropProvider;