import { FormEvent, useRef } from 'react';
import { useTaskService } from '../../services/tasks';
import { useStore } from '../../contexts/Store';
import { Task } from '../../types/global';
import { ACTIONS } from '../../constants/AppConstants';
import AddTaskInputPresentation from './Presentation';


const AddTaskInput : React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { addTask } = useTaskService();
    const { dispatch } = useStore();

    function addTaskInTasks(e : FormEvent){
        e.preventDefault();
        const todo = inputRef?.current?.value;
        if(!todo) return;
        addTask({
            todo,
            userId : 5,
            completed : false
        })
          .then((res) => res?.json())
          .then((data : Task) => {
            if(inputRef.current){
                inputRef.current.value = '';
                inputRef.current.blur();
            }
            dispatch({ type: ACTIONS.ADD_TASK, payload: { task: data } });
          });
    }

    return <AddTaskInputPresentation ref={inputRef} addTask={addTaskInTasks}/>;
}

export default AddTaskInput;