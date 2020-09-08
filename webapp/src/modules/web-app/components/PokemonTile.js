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
  line-height: 48px;
  text-align: center;
`

const PokemonTile = ({ name, ...props }) => {
  return (
    <StyledTile {...props}>
      {name}
    </StyledTile>
  )
}

export default PokemonTile