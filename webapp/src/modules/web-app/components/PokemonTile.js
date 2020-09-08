import React from 'react'
import styled from '@emotion/styled'

const StyledTile = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  margin-bottom: 30px;
  border: 1px solid black;
  height: 120px;
  width: 160px;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const ContentBlock = styled.div`
  display: flex;
  height: 32px;
  width: 160px;
  line-height: 32px;
  justify-content: center;
`

const Button = styled.button`
  height: 24px;
  width: 90px;
`

const PokemonTile = ({ pokemon={}, onSaveSelected, onShowDetailSelected, ...props }) => {
  const isSave = !!pokemon.isSaved
  return (
    <StyledTile {...props}>
      <ContentBlock><b>{pokemon.name}</b></ContentBlock>
      <ContentBlock><Button onClick={() => {if (typeof onShowDetailSelected === 'function') onShowDetailSelected(pokemon) }}>Show Detail</Button></ContentBlock>
      <ContentBlock><Button onClick={() => {if (typeof onSaveSelected === 'function') onSaveSelected(pokemon) }}>{isSave ? 'UnSave' : 'Save'}</Button></ContentBlock>
    </StyledTile>
  )
}

export default PokemonTile