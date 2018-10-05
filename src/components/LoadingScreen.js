import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class LoadingScreen extends PureComponent {
  static propTypes = {
    complete: PropTypes.bool.isRequired,
    loaded: PropTypes.number.isRequired,
  }

  render() {
    const { children, complete, loaded } = this.props

    return (
      <Container>
        {children}
        <LoadingBackgrop complete={complete}>
          <Frame>
            <Header>
              Honda Powersports
            </Header>
              <Heading>
                SXX
              </Heading>
          </Frame>
          <LoadingBar loaded={loaded} complete={complete}>
            <LoadingHeadline>
              Loading...
            </LoadingHeadline>
          </LoadingBar>
        </LoadingBackgrop>
      </Container>
    )
  }
}

const Frame = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  text-align: center;
  display: flex;
  flex-direction: column;
`

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled.h1`
  border: 0;
  font: 0/0 a;
  text-shadow: none;
  color: transparent;
  width: 70px;
  min-height: 73px;
  height: 73px;
  margin: 0;
  background-image: url('/images/icons/logo.svg');
  background-repeat: no-repeat;
  background-size: 100% auto;

  @media (min-width: 768px) {
    width: 91px;
    margin-top: 50px;
  }
`

const Heading = styled.h2`
  display: inline-block;
  align-self: center;
  margin: 0;
  color: #FFFFFF;
  font-family: 'mohavebold_italic';
  font-size: 119px;
  letter-spacing: -4.41px;
  line-height: 119px;
  text-align: center;
  align-self: center;

  @media (min-width: 768px) {
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
  height: 100vh;
  overflow: hidden;
`

const LoadingBackgrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.red};

  transition: opacity .5s ease-in-out .5;

  // opacity: ${props => props.complete ? 0 : 1};
`

const LoadingBar = styled.div`
  position: absolute;
  bottom: 0;
  height: 55px;
  // height: ${props => props.complete ? '0' : '55'}px;
  width: ${props => props.loaded}vw;
  background-color: ${props => props.theme.white};

  transition: width .25s ease-in-out;
  transition: height .25s ease-in-out;
`

const LoadingHeadline = styled.h2`
  position: relative;
  padding: 14px 28px;
  color: ${props => props.theme.red};
  font-style: italic;
  font-weight: 900;
  line-height: 27px;
  letter-spacing: -0.11px;
`
