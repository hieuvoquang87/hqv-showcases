import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { cacheItemWithKey, getItemWithKey } from '../services/cacheService';

import baseState from './baseState'
import rootReducer from '../reducers'

export const cachingMiddleWare = store => next => (action) => {
  next(action);
  const state = store.getState()
  cacheItemWithKey('pokedex-cached-state', state)
  console.log(state)
}

export default () => {
  let preloadedState = {
    ...baseState
  }
  const cachedState = getItemWithKey('pokedex-cached-state')
  if(cachedState) {
    console.log(cachedState)
    preloadedState = {
      ...cachedState
    }
  }
  
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, cachingMiddleWare),
  );
}