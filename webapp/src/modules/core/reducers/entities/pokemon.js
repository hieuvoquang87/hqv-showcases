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
    case UPDATE_POKEMON_LIST: 
      const newState = {...state}
      const newPokemons = action.data
      for(let i in newPokemons) {
        if(newState[i]) {
          newState[i] = {...newState[i], ...newPokemons[i]}
        } else {
          newState[i] = {...newPokemons[i]}
        }
      }
      return newState;
    case 'SAVE_POKEMON': 
      const pokemonId = action?.data?.id
      if(pokemonId) {
        const pokemon = state[pokemonId]
        const newState = { ...state }
        newState[pokemonId] = { ...pokemon, isSaved: action.data.isSaved}
        return newState
      }
      return state
    default: return state;
  }
}

export default combineReducers({
  selectedPokemon,
  byId
})