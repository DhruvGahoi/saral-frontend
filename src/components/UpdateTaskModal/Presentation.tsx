import { Button } from "@mui/material";
import ModalStandard from "../ModalStandard";
import { UpdateTaskPresentationProps } from "./updateTaskModal.types";
import styles from './updateTaskModal.module.css';

const UpdateTaskPresentation : React.FC<UpdateTaskPresentationProps> = ({
    onClose,
    isUpdateDisabled,
    todo,
    setTodo,
    updateTodo,
}) => {
    return (
        <ModalStandard heading="Update Task" open={true} onClose={onClose}>
            <textarea className={styles.todo_textarea} value={todo} onChange={(e) => setTodo(e.target.value)}/>
            <Button variant='contained' onClick={updateTodo} disabled={isUpdateDisabled}>
                Update
            </Button>
        </ModalStandard>
    )
}

export default UpdateTaskPresentation;