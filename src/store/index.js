import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import tasksReducer from '../reducers/tasks';

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      tasks: tasksReducer
    }),
    applyMiddleware(
      routerMiddleware(history),
    )
  );
}
