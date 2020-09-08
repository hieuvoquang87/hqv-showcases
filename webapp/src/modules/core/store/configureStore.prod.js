import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import baseState from './baseState'
import rootReducer from '../reducers'

export default () => {
  const preloadedState = {
    ...baseState
  }
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk),
  );
}