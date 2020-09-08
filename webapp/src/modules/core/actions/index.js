import { getAllPokemon, getPokemonId, getDetail, getLocation } from '../services/pokemonService'
import {
  SELECT_POKEMON,
  UPDATE_POKEMON_DETAIL,
  UPDATE_POKEMON_LOCATION,
  UPDATE_POKEMON_LIST 
} from '../action-types'

export const getPokemons = () => async (dispatch) => {
  const { data } = await getAllPokemon();
  if(data) {
    const pokemonByIds = data?.results?.length ? data.results.reduce((acc, item) => {
      const pokemonId = getPokemonId(item)
      acc[pokemonId] = {...item, id: pokemonId};
      return acc;
    }, {}): {}
    dispatch({
      type: UPDATE_POKEMON_LIST,
      data: pokemonByIds
    })
  }
}

export const savePokemon = (pokemon) => async (dispatch) => {
  const {id, isSaved } = pokemon;
  dispatch({
    type: 'SAVE_POKEMON',
    data: {
      id, 
      isSaved: !isSaved
    }
  })
}

export const viewPokemonDetail = (pokemon) => async (dispatch) => {
  dispatch({
    type: SELECT_POKEMON,
    data: pokemon
  })
  const pokemonDetailResult = await getDetail(pokemon)
  if(pokemonDetailResult.data) {
    const pokemonDetail = {
      imageUrl: pokemonDetailResult.data.sprites.other['official-artwork']['front_default'],
      types: pokemonDetailResult.data.types,
      height: pokemonDetailResult.data.height,
      weight: pokemonDetailResult.data.weight,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
    dispatch({
      type: UPDATE_POKEMON_DETAIL,
      data: pokemonDetail
    })
  }
  const pokemonLocationResult = await getLocation(pokemon)
  if(pokemonLocationResult.data) {
    const { locations } = pokemonLocationResult.data
    dispatch({
      type: UPDATE_POKEMON_LOCATION,
      data: { locations }
    })
  }
}
