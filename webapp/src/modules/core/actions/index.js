import { getAllPokemon, getPokemonId } from '../services/pokemonService'
import {
  SELECT_POKEMON,
  UPDATE_POKEMON_LOCATION,
  UPDATE_POKEMON_LIST 
} from '../action-types'

export const getPokemons = () => async (dispatch, getState) => {
  const {data, error} = await getAllPokemon();
  if(data) {
    const pokemonByIds = data?.results?.length ? data.results.reduce((acc, item) => {
      const pokemonId = getPokemonId(item)
      acc[pokemonId] = item;
      return acc;
    }, {}): {}
    dispatch({
      type: UPDATE_POKEMON_LIST,
      data: pokemonByIds
    })
  }
}
