import { combineReducers } from 'redux';
import {
  SELECT_POKEMON,
  UPDATE_POKEMON_DETAIL,
  UPDATE_POKEMON_LOCATION,
  UPDATE_POKEMON_LIST 
} from '../../action-types'

const selectedPokemon = (state = null, action) => {
  switch(action.type) {
    case SELECT_POKEMON: return { ...action.data}
    case UPDATE_POKEMON_DETAIL: return {...state, ...action.data}
    case UPDATE_POKEMON_LOCATION: return {...state, ...action.data}
    default: return state
  }
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