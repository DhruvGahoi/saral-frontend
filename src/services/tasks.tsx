import { ACTIONS } from '../constants/AppConstants';
import { useStore } from '../contexts/Store';
import { Task } from '../types/global';

export const useTaskService = () => {
  const { dispatch } = useStore();

  async function populateInitialTasks() {
    try {
      const response = await fetch('https://dummyjson.com/todos?limit=10');
      const data = await response.json();
      const completeTasks = data?.todos?.filter(
        (task: Task) => task.completed === true
      );
      const incompleteTasks = data?.todos?.filter(
        (task: Task) => task.completed === false
      );

      dispatch({
        type: ACTIONS.UPDATE_TASKS,
        payload: { tasks: { completeTasks, incompleteTasks } },
      });
    } catch (error) {
      console.error(error);
    }
}

async function addTask(task: any) {
    try {
      return fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
      });
    } catch (error) {
      console.error(error);
    }
}

async function updateTask(updatePayload: any, taskId: string) {
    try {
      return fetch(`https://dummyjson.com/todos/${taskId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatePayload),
      });
    } catch (error) {
      console.error(error);
    }
}

async function deleteTask(taskId: number) {
    try {
      return fetch(`https://dummyjson.com/todos/${taskId}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.error(error);
    }
  }

  return { populateInitialTasks, addTask, updateTask, deleteTask };
};
