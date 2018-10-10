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
  width: 100%;
  padding: 60px 24px;
  text-align: center;

  @media (min-width: 768px) {
    padding-top: 83px;
    padding-bottom: 20px;
  }

  @media (min-width: 1024px) {
    padding: 50px 40px 20px;
  }

  @media (min-width: 1200px) {
    padding-top: 40px;
  }
`

const Heading = styled.h2`
  font-family: 'mohavebold_italic';
  font-size: 40px;
  line-height: 48px;
  color: ${props => props.theme.red};
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 68px;
    line-height: 68px;
  }
  @media (min-width: 1024px) {}
  @media (min-width: 1440px) {
    font-size: 98px;
    line-height: 98px;
  }
`

const SubHeading = styled.h3`
  font-family: 'mohavebold_italic';
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  @media (min-width: 768px) {}
  @media (min-width: 1024px) {}
  @media (min-width: 1440px) {
    font-size: 24px;
    line-height: 24px;
  }
`
