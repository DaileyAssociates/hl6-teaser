import React from 'react'
import styled from 'styled-components'

import FooterBase from './Footer'

export default function SplashScreen({ children, openModal }) {
  return (
    <Container>
      <Layout>
        <Header>
          Honda Powersports
        </Header>
        <Hero>
          <SubHeading>
            Life Is Better
          </SubHeading>
          <div>
            <Heading>
              SXX
            </Heading>
          </div>
          <Button onClick={openModal}>See What's Coming</Button>
        </Hero>
        <Footer />
      </Layout>
      {children}
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
`

const Footer = styled(FooterBase)`
  position: absoolute;
  bottom: 0;
`

const Layout = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 8;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Header = styled.h1`
  border: 0;
  font: 0/0 a;
  text-shadow: none;
  color: transparent;
  width: 70px;
  min-height: 73px;
  height: 73px;
  margin: 20px auto 0;
  background-image: url('/images/icons/logo.svg');
  background-repeat: no-repeat;
  background-size: 100% auto;

  @media (min-width: 768px) {
    width: 91px;
    margin-top: 50px;
  }
`

const Hero = styled.div`
  padding: 0 46px 0;

  @media (min-width: 768px) {
    padding: 0 0 150px;
  }
`

const Heading = styled.h2`
  display: inline-block;
  margin: 0 auto 35px;
  padding: 0 50px;
  position: relative;
  color: #FFFFFF;
  font-family: 'mohavebold_italic';
  font-size: 119px;
  letter-spacing: -4.41px;
  line-height: 119px;
  text-align: center;

  &:after, &:before {
    position: absolute;
    top: 50%;
    content: '';
    width: 29px;
    height: 2px;
    background-color: ${props => props.theme.white};
  }

  &:before {
    left: 0;
  }

  &:after {
    right: 0;
  }

  @media (min-width: 768px) {
    display: inline-block;
    padding: 0 75px;
    margin-bottom: 30px;
    font-size: 220px;
    letter-spacing: -8.15px;
    line-height: 220px;

    &:after, &:before {
      width: 43px;

    }
  }
`

const SubHeading = styled.h3`
  margin-bottom: 10px;
  color: #FFFFFF;
  font-family: 'mohavebold_italic';
  font-size: 18px;
  letter-spacing: -0.09px;
  text-align: center;
  text-transorm: uppercase;

  @media (min-width: 768px) {
    font-size: 30px;
    letter-spacing: -0.16px;
  }
`

const Button = styled.span`
  position: relative;
  display: inline-block;
  width: 234px;
  margin: 0 auto;
  padding: 23px 0;
  border: 2px solid ${props => props.theme.red};
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.16);
  color: ${props => props.theme.white};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.07px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;

  @media (min-width: 768px) {
  }
`
