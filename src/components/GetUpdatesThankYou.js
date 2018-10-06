import React from 'react'
import styled from 'styled-components'

export default function GetUpdatesThankYou() {
  return (
    <Container>
      <Heading>Thank You</Heading>
      <SubHeading>you have been successfully added for updates</SubHeading>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  height: calc(100vh - 186px);
  padding: 0 28px;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media (min-width: 768px) {
    height: calc(100vh - 348px);
  }

  @media (min-width: 1024px) {
    height: 100vh;
    width: 50vw;
    padding: 0 56px;
  }
  @media (min-width: 1440px) {}
`

const Heading = styled.h2`
  font-family: 'mohavebold_italic';
  font-size: 48px;
  line-height: 48px;
  color: ${props => props.theme.red};
  text-transform: uppercase;

  @media (min-width: 768px) {}
  @media (min-width: 1024px) {}
  @media (min-width: 1440px) {}
`

const SubHeading = styled.h3`
  font-family: 'mohavebold_italic';
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  @media (min-width: 768px) {}
  @media (min-width: 1024px) {}
  @media (min-width: 1440px) {}
`
