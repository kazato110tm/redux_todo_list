import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import tasksReducer from '../reducers/tasks';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      tasks: tasksReducer
    }),
    applyMiddleware(
      routerMiddleware(history),
      logger,
      thunk
    )
  );
}
