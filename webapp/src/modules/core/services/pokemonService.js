import axios from 'axios'
import { cacheItemWithKey, getItemWithKey } from './cacheService';
import { POKEAPI_BASE_URL, POKEMON_LOCATION_BASE_URL, POKEMON_LOCATION_APIKEY} from '../constants'

export const getPokemonId = (data) => {
  const url = data.url
  const id = url.match(/pokemon\/[0-9]*/g)
  return id[0].replace('pokemon/','') 
}

export const getAllPokemon = async () => {
  try {
    const requestUrl = `${POKEAPI_BASE_URL}/pokemon?limit=151`;
    console.log('requestUrl', requestUrl)
    const cachedResponseData = getItemWithKey(requestUrl)
    if(cachedResponseData) {
      return {
        error: null,
        data: cachedResponseData
      }
    }
    const response = await axios.get(requestUrl);
    cacheItemWithKey(requestUrl, response.data)
    return {
      error: null,
      data: response.data
    }
  } catch (error) {
    return {
      error,
      data: null
    }
  }
}