import { createContext, useContext, useReducer, ReactNode } from 'react';
import { ACTIONS } from '../constants/AppConstants';
import { Task, Tasks } from '../types/global';

type State = {
    tasks : Tasks;
    taskToUpdate : Task | null;
    taskToDelete : Task | null;
};

type Action = {
    type : string;
    payload : any;
}

type ContextValue = {
    state : State;
    dispatch : React.Dispatch<Action>;
}

export const StoreContext = createContext<ContextValue | undefined>(undefined);

const initialState: State = {
    tasks : {
        completeTasks : [],
        incompleteTasks : [],
    },
    taskToDelete: null,
    taskToUpdate: null
};

const reducer = (state: State, action: Action): State => {
    const { payload } = action;
    switch (action.type) {
        case ACTIONS.UPDATE_TASKS:
          return updateTasks(state, payload.tasks);
        case ACTIONS.UPDATE_TASK:
          return updateTask(state, payload.updatedTask);
        case ACTIONS.ADD_TASK:
          return addTask(state, payload.task);
        case ACTIONS.DELETE_TASK:
          return deleteTask(state, payload.taskId, payload.completed);
        case ACTIONS.SET_TASK_TO_UPDATE:
          return setTaskToUpdate(state, payload.taskToUpdate);
        case ACTIONS.SET_TASK_TO_DELETE:
          return setTaskToDelete(state, payload.taskToDelete);
        default:
          return state;
      }
}

function setTaskToUpdate(state: State, taskToUpdate: Task | null): State {
    return { ...state, taskToUpdate };
}
  
function setTaskToDelete(state: State, taskToDelete: Task | null): State {
    return { ...state, taskToDelete };
}
  
function updateTasks(state: State, tasks: Tasks): State {
    return { ...state, tasks };
}
  
function updateTask(state: State, updatedTask: Task): State {
    let completeTasks = [...state.tasks.completeTasks];
    let incompleteTasks = [...state.tasks.incompleteTasks];
    if (updatedTask.completed) {
      completeTasks = state.tasks.completeTasks.map((task) => {
        if (task.id === updatedTask.id) {
          return updatedTask;
        }
        return task;
      });
    } else {
      incompleteTasks = state.tasks.incompleteTasks.map((task) => {
        if (task.id === updatedTask.id) {
          return updatedTask;
        }
        return task;
      });
    }
  
    return { ...state, tasks: { completeTasks, incompleteTasks } };
}
  
function addTask(state: State, task: Task): State {
    return {
      ...state,
      tasks: {
        completeTasks: [...state.tasks.completeTasks],
        incompleteTasks: [task, ...state.tasks.incompleteTasks],
      },
    };
}
  
function deleteTask(state: State, taskId: number, completed: boolean): State {
    let updatedTasks;
    if (completed) {
      updatedTasks = {
        completeTasks: state.tasks.completeTasks.filter(
          (task: Task) => task.id !== taskId
        ),
        incompleteTasks: [...state.tasks.incompleteTasks],
      };
    } else {
      updatedTasks = {
        incompleteTasks: state.tasks.incompleteTasks.filter(
          (task: Task) => task.id !== taskId
        ),
        completeTasks: [...state.tasks.completeTasks],
      };
    }
    return { ...state, tasks: updatedTasks };
}
  
const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
      <StoreContext.Provider value={{ state, dispatch }}>
        {children}
      </StoreContext.Provider>
    );
};
  
export const useStore = () => {
    const context = useContext(StoreContext);
    if (!context) {
      throw new Error('useStore must be used within a StoreProvider');
    }
    return { ...context.state, dispatch: context.dispatch };
};
  
export default StoreProvider;