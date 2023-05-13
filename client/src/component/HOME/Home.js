import React from 'react'
import { MainContainer } from '../content/content.element'

function HOME(props) {

  return (
    <MainContainer active={props.toggle}>
    <div>HOMW</div>
    </MainContainer>
  )
}

export default HOME