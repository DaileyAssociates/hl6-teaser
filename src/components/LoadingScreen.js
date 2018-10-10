import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { delay } from 'lodash'

export default class LoadingScreen extends PureComponent {
  static propTypes = {
    complete: PropTypes.bool.isRequired,
    loaded: PropTypes.number.isRequired,
  }

  state = {
    animationComplete: false,
  }

  render() {
    const { children, complete, loaded } = this.props
    const { animationComplete } = this.state


    delay(() => {
      this.setState({ animationComplete: true })
    }, 2000)

    return (
      <Container>
        <ContentContainer>
          <LoadingFrames loaded={loaded} complete={complete} animationComplete={animationComplete} />
          <LoadingBarContainer loaded={loaded} complete={complete} animationComplete={animationComplete} />
        </ContentContainer>
        {children}
      </Container>
    )
  }
}

class LoadingFrames extends Component {
  static propTypes = {
    complete: PropTypes.bool.isRequired,
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.complete ? true : false;
  }

  render() {
    const { animationComplete, complete } = this.props

    return (
      <FrameContainer>
        <Frame left complete={complete} animationComplete={animationComplete}>
          <Slide>
            <Header>
              Honda Powersports
            </Header>
            <Heading>
              SXS
            </Heading>
          </Slide>
        </Frame>
        <Frame right complete={complete} animationComplete={animationComplete}>
          <Slide right>
            <Header>
              Honda Powersports
            </Header>
            <Heading>
              SXS
            </Heading>
          </Slide>
        </Frame>
      </FrameContainer>
    )
  }
}

class LoadingBarContainer extends PureComponent {
  static propTypes = {
    complete: PropTypes.bool.isRequired,
    loaded: PropTypes.number.isRequired,
    animationComplete: PropTypes.bool
  }

  render() {
    const { complete, loaded, animationComplete } = this.props

    return (
      <LoadingBar loaded={loaded} complete={complete} animationComplete={animationComplete}>
        <LoadingHeadline>
          Loading...
        </LoadingHeadline>
      </LoadingBar>
    )
  }
}

const FrameContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    opacity: .25;
    left: 50vw;
    z-index: 9;
    background-color: #370809;
  }
`

const Frame = styled.div`
  position: absolute;
  z-index: 9;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  display: ${props => props.animationComplete
    ? 'none'
    : props.right
      ? 'none'
      : 'block'
  };

  transition: all .5s ease-in-out .5s;
  opacity: ${props => props.complete ? '0' : '1'};

  @media (min-width: 768px) {
    display: ${props => props.animationComplete
      ? 'none'
      : 'block'
    };
    width: 50vw;
    opacity: 1;


    left: ${props => props.left
        ? props.complete
          ? '-50vw'
          : '0'
        : 'auto'
    };

    right: ${props => props.right
        ? props.complete
          ? '-50vw'
          : '0'
        : 'auto'
    };
  }
`

const Slide = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${props => props.theme.red};

  @media (min-width: 768px) {
    opacity: 1;
    position: absolute;
    right: ${props => props.right ? '0' : 'auto'};
  }
`

const Header = styled.h1`
  border: 0;
  font: 0/0 a;
  text-shadow: none;
  color: transparent;
  width: 70px;
  height: 57px;
  margin-top: 20px;
  background-image: url('/images/icons/logo.svg');
  background-repeat: no-repeat;
  background-size: 100% auto;
  z-index: 9;

  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 768px) {
    width: 90px;
    height: 74px;
    margin-top: 50px;
  }
`

const Heading = styled.h2`
  display: inline-block;
  margin: 0 0 0 -16px;
  color: #FFFFFF;
  font-family: 'mohavebold_italic';
  font-size: 119px;
  letter-spacing: -4.41px;
  line-height: 119px;
  text-align: center;
  position: relative;
  z-index: 9;

  @media (min-width: 768px) {
    margin-left: -27px;
    font-size: 220px;
    letter-spacing: -8.15px;
    line-height: 220px;
  }
`

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
`

const ContentContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const LoadingBar = styled.div`
  z-index: 99;
  position: absolute;
  bottom: 0;
  height: ${props => props.complete ? '0' : '55'}px;
  width: ${props => props.loaded}vw;
  background-color: ${props => props.theme.white};
  transition: width .5s ease-in-out;
  transition: height .5s ease-in-out .2s;
  display: ${props => props.animationComplete && 'none'};

  @media (min-width: 768px) {
    height: ${props => props.complete ? '0' : '61'}px;
  }
`

const LoadingHeadline = styled.h2`
  position: relative;
  padding: 14px 28px;
  color: ${props => props.theme.red};
  font-family: 'mohavebold_italic';
  font-style: italic;
  font-weight: 900;
  line-height: 27px;
  letter-spacing: -0.11px;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 38px;
  }
`
