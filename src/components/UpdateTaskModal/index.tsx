import { useState } from 'react';
import { useStore } from '../../contexts/Store';
import UpdateTaskModalPresentation from './Presentation';
import { ACTIONS } from '../../constants/AppConstants';

const UpdateTaskModal: React.FC = () => {
  const { taskToUpdate, dispatch } = useStore();
  const [todo, setTodo] = useState(taskToUpdate?.todo);
  const isUpdateButtonDisabled = todo === taskToUpdate?.todo;

  function onClose() {
    dispatch({
      type: ACTIONS.SET_TASK_TO_UPDATE,
      payload: { taskToUpdate: null },
    });
  }

  function updateToDo() {
    if (!taskToUpdate) return;
    const updatedTask = { ...taskToUpdate, todo };
    dispatch({
      type: ACTIONS.UPDATE_TASK,
      payload: { updatedTask: updatedTask },
    });
    onClose();
  }

  return (
    <UpdateTaskModalPresentation
      onClose={onClose}
      isUpdateDisabled={isUpdateButtonDisabled}
      todo={todo}
      setTodo={setTodo}
      updateTodo={updateToDo}
    />
  );
};

export default UpdateTaskModal;
