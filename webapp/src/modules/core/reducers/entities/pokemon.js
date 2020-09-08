import { combineReducers } from 'redux';
import {
  SELECT_POKEMON,
  UPDATE_POKEMON_LOCATION,
  GET_ALL_POKEMON 
} from '../../action-types'

const selectedPokemon = (state = null, action) => {
  return state
}

const byId = (state = {}, action) => {
  return state
}

export default combineReducers({
  selectedPokemon,
  byId
})