import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { delay } from 'lodash'

import FooterBase from './Footer'

export default class SplashScreen extends Component {
  static propTypes ={
    openModal: PropTypes.func.isRequired,
  }

  state = {
    height: 0,
    width: 0,
    intro: false,
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);

    delay(() => {
      this.setState({ intro: true })
    }, 750)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    const {
      innerWidth: width,
      innerHeight: height,
    } = window

    this.setState({ width, height })
  }

  render() {
    const { intro } = this.state
    const { openModal } = this.props

    return(
      <Container>
        <Layout>
          <Link intro={intro} href="http://powersports.honda.com">
            Honda Powersports
          </Link>
          <Hero>
            <SubHeading intro={intro}>
              Life Is Better
            </SubHeading>
            <div>
              <Heading intro={intro}>
                <span>
                  SXS
                </span>
              </Heading>
            </div>
            <Button onClick={openModal}>Get Ready. It's Coming.</Button>
          </Hero>
          <Footer />
        </Layout>
      </Container>
    )
  }
}

const Container = styled.div`
  position: absolute;

  height: 100%;
  width: 100vw;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 100vh;
  }
`

const Footer = styled(FooterBase)`
  position: absoolute;
  bottom: 0;
`

const Layout = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  z-index: 9;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    height: 100vh;
  }
`

const Link = styled.a`
  display: block;
  border: 0;
  font: 0/0 a;
  text-shadow: none;
  color: transparent;
  width: 70px;
  height: 57px;
  margin: 20px auto 0;
  padding: 0;
  background-image: url('/images/icons/logo.svg');
  background-repeat: no-repeat;
  background-size: 100% auto;
  transition: transform .65s cubic-bezier(0.215, 0.610, 0.355, 1.000);

  transform: scale(${props => props.intro
    ? '1'
    : '0'
  });

  @media (min-width: 768px) {
    transition-duration: .65s;
    width: 90px;
    height: 74px;
    margin-top: 50px;
  }
`

const Hero = styled.div`
  padding: 0 46px 0;

  @media (min-width: 768px) {
    padding: 0;
  }

  @media (min-width: 1024px) {
    padding: 0;
  }

  @media (min-width: 1440px) {}
`

const Heading = styled.h2`
  display: inline-block;
  margin: 0 auto 0 -16px;
  padding: 0 50px;
  position: relative;
  color: #FFFFFF;
  font-family: 'mohavebold_italic';
  font-size: 150px;
  line-height: 150px;
  letter-spacing: -4.41px;
  text-align: center;

  span {
    display: block;
    transition: all .65s cubic-bezier(0.215, 0.610, 0.355, 1.000);
    opacity: ${props => props.intro
      ? '1'
      : '0'
    };

    transform: scale(${props => props.intro
      ? '1'
      : '0'
    });

    @media (min-width: 768px) {
      transition-duration: .65s;
    }

  }

  &:after, &:before {
    position: absolute;
    top: 40%;
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
    margin-left: -27px;
    display: inline-block;
    padding: 0 75px;
    font-size: 220px;
    line-height: 220px;
    letter-spacing: -8.15px;

    &:after, &:before {
      width: 43px;
    }
  }

  @media (min-width: 1024px) {}
`

const SubHeading = styled.h3`
  margin-bottom: 10px;
  color: #FFFFFF;
  font-family: 'mohavemedium_italic';
  font-size: 18px;
  letter-spacing: -0.09px;
  text-align: center;
  text-transform: uppercase;

  transition: opacity .65s cubic-bezier(0.215, 0.610, 0.355, 1.000);
  opacity: ${props => props.intro
    ? '1'
    : '0'
  };

  @media (min-width: 768px) {
    transition-duration: .65s;
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
