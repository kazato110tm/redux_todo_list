import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import TodoApp from '../components/TodoApp';
import { inputTask, addTask, resetTask, addTodoAndClear } from '../actions/tasks';

function mapStateToProps({ tasks }) {
  return {
    task: tasks.task,
    tasks: tasks.tasks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTask(task) {
      dispatch(addTodoAndClear(task));
    },
    inputTask(task) {
      dispatch(inputTask(task));
    },
    resetTask() {
      dispatch(resetTask());
    },
    redirectToError() {
      dispatch(push('/error'));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
