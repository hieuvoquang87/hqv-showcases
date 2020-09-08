import { combineReducers } from 'redux';

import app from './app'
import navigation from './navigation'

import pokemon from './entities/pokemon'

export default combineReducers({
  app,
  navigation,
  pokemon
})