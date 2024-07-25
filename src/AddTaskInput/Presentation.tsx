import { ForwardRefRenderFunction, forwardRef } from "react";
import { AddTaskInputProps } from "./addTaskInput.types";
import styles from './addTaskInput.module.css';;

const AddTaskInputPresentation : ForwardRefRenderFunction<HTMLInputElement, AddTaskInputProps> = (props, ref) => {
    return (
        <form className={styles.add_task_form} onSubmit={props.addTask}>
            <input type="text" placeholder="Add Task" ref={ref} className="styles.input"/>
        </form>
    )
}

export default forwardRef(AddTaskInputPresentation);