import { getPokemons } from '../../core/actions'
export const mapStateToProps = ({ pokemon }) => {
  return {
    pokemons: pokemon.byId
  }
}

export const mapDispatchToProps = (dispatch) => ({
  onInit: () => {
    dispatch(getPokemons())
  },
  onPokemonSelected: () => {}
})