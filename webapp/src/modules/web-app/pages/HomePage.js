import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled'

import PageContainer from '../../web-common/components/PageContainer'
import { mapStateToProps, mapDispatchToProps } from '../containers/HomePage'

import ToogleButton from '../../web-common/components/ToggleButton'

import PokemonTile from '../components/PokemonTile'

const Group = styled.div`
  display: flex;
  height: 72px;
  width: 100%
`

const SearchBoxGroup = styled.div`
  display: flex;
  height: 72px;
  width: 100%
`
const TileListGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 72px;
  width: 100%
  margin: auto;
`

export const HomePage = ({ onInit, onPokemonSelected, onPokemonSaved, pokemons }) => {
  const [pokemonList, setPokemonList] = useState([])
  const [showSavedList, setShowSavedList] = useState(false)

  const onSearchTextChanged = (e) => {
    const val = e.target.value;
    if(val && val.length > 1) {
      const list = pokemonList.filter((pokemon) => {
        return pokemon.name.indexOf(val) > -1
      })
      setPokemonList(list)
    } else {
      setPokemonList(Object.values(pokemons))
    }
  }

  useEffect(onInit, [])
  useEffect(() => {
    setPokemonList(Object.values(pokemons))
  }, [pokemons])
  useEffect(() => {
    if(showSavedList) {
      setPokemonList(Object.values(pokemons).filter((item) => item.isSaved))
    } else {
      setPokemonList(Object.values(pokemons))
    }
  }, [pokemons, showSavedList])
  return (
    <PageContainer>
      <Group>
        <h1 style={{ margin: 'auto' }}>Pokedex</h1>
      </Group>
      <Group>
        <div style={{ margin: 'auto' }}> 
          <ToogleButton leftText='All' leftValue='ALL' rightText='Saved' rightValue='SAVED' onChange={(val) => setShowSavedList(val === 'SAVED')}/>
        </div>
      </Group>
      <SearchBoxGroup>
        <div style={{ margin: 'auto' }}>
          <input onChange={onSearchTextChanged}></input>
        </div>
      </SearchBoxGroup>
      <TileListGroup>
        {pokemonList.map((item, idx) => (<PokemonTile key={idx} pokemon={item} onShowDetailSelected={onPokemonSelected} onSaveSelected={onPokemonSaved}></PokemonTile>))}
      </TileListGroup>
    </PageContainer>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)