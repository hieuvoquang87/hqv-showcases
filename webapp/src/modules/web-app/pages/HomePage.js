import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled'

import PageContainer from '../../web-common/components/PageContainer'
import { mapStateToProps, mapDispatchToProps } from '../containers/HomePage'

import ToogleButton from '../../web-common/components/ToggleButton'

import PokemonTile from '../components/PokemonTile'

const ToggleGroup = styled.div`
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

const HomePage = ({ onInit, onPokemonSelected, pokemons }) => {
  const [pokemonList, setPokemonList] = useState([])
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

  return (
    <PageContainer>
      <ToggleGroup>
        <div style={{ margin: 'auto' }}> 
          <ToogleButton leftText='All' leftValue='ALL' rightText='Saved' rightValue='SAVED'/>
        </div>
      </ToggleGroup>
      <SearchBoxGroup>
        <div style={{ margin: 'auto' }}>
          <input onChange={onSearchTextChanged}></input>
        </div>
      </SearchBoxGroup>
      <TileListGroup>
        {pokemonList.map((item, idx) => (<PokemonTile key={idx} name={item.name} onClick={() => onPokemonSelected(item)}></PokemonTile>))}
      </TileListGroup>
    </PageContainer>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)