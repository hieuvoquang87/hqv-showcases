import React from 'react';
import styled from '@emotion/styled'
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from '../containers/DetailPage'
import PageContainer from '../../web-common/components/PageContainer'
import MuliMarkerMap from '../../web-common/components/MultiMarkerMap'

const BackButton = styled.button`
  height: 36px;
  width: 72px;
`

const GroupContainer = styled.div`
  display: flex;
  height: 72px;
  width: 100%
`
const Container = styled.div`
  display: flex;
  width: 100%;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 300px;
`

const ContentBlock = styled.div`
  width: 100%;
  padding: 20px;
`

const ArtWorkImage = styled.img`
  border: 1px solid black;
  width: 80%;

`

export const DetailPage = ({ selectedPokemon, onBackSelected }) => {
  return (
    <PageContainer>
      <GroupContainer>
        <BackButton onClick={onBackSelected}>Back</BackButton>
      </GroupContainer>
      <Container>
        <InfoContainer>
          <ContentBlock>
            <ArtWorkImage src={selectedPokemon.imageUrl} />
          </ContentBlock>
          <ContentBlock>Height: {selectedPokemon.height}</ContentBlock>
          <ContentBlock>Weight: {selectedPokemon.weight}</ContentBlock>
          <ContentBlock>Types: {selectedPokemon?.types?.map((item, idx) => (<ContentBlock key={idx}>{item.type.name}</ContentBlock>))}</ContentBlock>
          <ContentBlock>Description: {selectedPokemon.description}</ContentBlock>
        </InfoContainer>
        <InfoContainer>
          <MuliMarkerMap locations={selectedPokemon.locations}/>
        </InfoContainer>
      </Container>
    </PageContainer>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage)