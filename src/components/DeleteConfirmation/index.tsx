import { ACTIONS } from '../../constants/AppConstants';
import { useStore } from '../../contexts/Store';
import { useTaskService } from '../../services/tasks';
import ConfirmationDialog from '../ConfirmationDialog';

const DeleteConfirmation: React.FC = () => {
  const { taskToDelete, dispatch } = useStore();
  const { deleteTask } = useTaskService();

  function deleteTasks() {
    if (!taskToDelete) return;
    deleteTask(taskToDelete.id)
      .then(() => {
        dispatch({
          type: ACTIONS.DELETE_TASK,
          payload: {
            taskId: taskToDelete.id,
            completed: taskToDelete.completed,
          },
        });
        dispatch({
          type: ACTIONS.SET_TASK_TO_DELETE,
          payload: { taskToDelete: null },
        });
      })
      .catch((error) => console.error(error));
  }

  function handleClose() {
    dispatch({
      type: ACTIONS.SET_TASK_TO_DELETE,
      payload: { taskToDelete: null },
    });
  }

  return (
    <ConfirmationDialog
      open={true}
      handleClose={handleClose}
      handleConfirm={deleteTasks}
      title="Delete task?"
      subTitle="The tasks will be irreversibly deleted from the system"
    />
  );
};

export default DeleteConfirmation;