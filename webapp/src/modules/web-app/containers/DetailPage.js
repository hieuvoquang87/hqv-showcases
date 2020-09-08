// import { getPokemons, viewPokemonDetail } from '../../core/actions'
import { NAVIGATE_TO_PAGE } from '../../core/action-types'
export const mapStateToProps = ({ pokemon }) => {
  return {
    selectedPokemon: pokemon.selectedPokemon
  }
}

export const mapDispatchToProps = (dispatch) => ({
  onInit: () => {
    
  },
  onBackSelected: () => {
    dispatch({
      type: NAVIGATE_TO_PAGE,
      data: { pageName: 'HOME_PAGE'}
    })
  }
})