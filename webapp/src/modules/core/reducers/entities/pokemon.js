import { combineReducers } from 'redux';
import {
  SELECT_POKEMON,
  UPDATE_POKEMON_LOCATION,
  UPDATE_POKEMON_LIST 
} from '../../action-types'

const selectedPokemon = (state = null, action) => {
  return state
}

const byId = (state = {}, action) => {
  switch(action.type) {
    case UPDATE_POKEMON_LIST: return {...state, ...action.data};
    default: return state;
  }
}

export default combineReducers({
  selectedPokemon,
  byId
})