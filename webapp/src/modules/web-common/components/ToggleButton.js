import React, { useState } from 'react'
import styled from '@emotion/styled'

const ButtonGroup = styled.div`
  display: flex;
  height: 36px;
  width: 180px;
` 

const Button = styled.div`
  display: table-cell;
  height: 100%;
  width: 100%;
  text-align: center;
  border: 2px solid black;
  line-height: 36px;
  :first-of-type {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  :last-of-type {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`

const ToggleButton = ({ leftText='Left' , rightText='Right', leftValue='LEFT', rightValue='RIGHT', value, onChange, ...props }) => {
  const [currentValue, setCurrentValue] = useState(value || leftValue)
  const onButtonClicked = (val) => {
    if (typeof onChange === 'function'){
      onChange(val)
    }
    setCurrentValue(val)
  }
  return (
    <ButtonGroup {...props}>
      <Button style={{ backgroundColor: (currentValue === leftValue) ? '#fcdab7': '' }} onClick={() => onButtonClicked(leftValue) }>{leftText}</Button>
      <Button style={{ backgroundColor: (currentValue === rightValue) ? '#fcdab7': '' }} onClick={() => onButtonClicked(rightValue)}>{rightText}</Button>
    </ButtonGroup>
  )
}

export default ToggleButton