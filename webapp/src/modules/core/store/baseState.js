const initialState = {
  app: {
    config: {
      useCache: true
    }
  },
  navigation: {
    currentPage: 'HOME_PAGE'
  },
  pokemon: {
    selectedPokemon: null,
    byId: {}
  }
}

export default initialState