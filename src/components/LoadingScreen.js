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

  opacity: ${props => props.complete ? 0 : 1};
`

const LoadingBar = styled.div`
  position: absolute;
  bottom: 0;
  height: ${props => props.complete ? '0' : '55'}px;
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
