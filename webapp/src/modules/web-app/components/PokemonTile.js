import React from 'react'
import styled from '@emotion/styled'

const StyledTile = styled.div`
  display: inline-block;
  margin-right: 30px;
  margin-bottom: 30px;
  border: 1px solid black;
  height: 90px;
  width: 160px;
  text-align: center;
  justify-content: center;
  align-items: center;
`

const PokemonTile = ({ name }) => {
  return (
    <StyledTile>
      {name}
    </StyledTile>
  )
}

export default PokemonTile