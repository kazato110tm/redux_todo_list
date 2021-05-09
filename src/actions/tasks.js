export const inputTask = (task) => ({
  type: 'INPUT_TASK',
  payload: {
    task
  }
});

export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task
  }
});

export const resetTask = () => ({
  type: 'RESET_TASK'
});

export function addTodoAndClear(task) {
  return (dispatch) => {
    dispatch(addTask(task));
    dispatch(inputTask(""));
  }
}
