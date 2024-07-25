import { Dispatch, SetStateAction } from "react";

export type UpdateTaskPresentationProps = {
    onClose : () => void;
    isUpdateDisabled : boolean;
    todo? : string;
    setTodo : Dispatch<SetStateAction<string | undefined>>;
    updateTodo : () => void;
}