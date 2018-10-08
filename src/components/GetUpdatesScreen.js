import React, { Component } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { delay } from 'lodash'

import GetUpdatesForm from './GetUpdatesForm'
import GetUpdatesThankYou from './GetUpdatesThankYou'

export default class GetUpdatesScreen extends Component {
  static propTypes = {
    close: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
  }

  state = {
    sent: false,
    zIndex: '-1',
  }

  componentDidUpdate({ isOpen: wasOpen }) {
    const { zIndex } = this.state
    const { isOpen } = this.props

    if (!wasOpen && isOpen) {
      this.show()
    } else if (!isOpen && zIndex === '9') {
      delay(this.hide, 1000)
    }
  }

  hide = () => this.setState({ zIndex: '-1' })
  show = () => this.setState({ zIndex: '9' })

  send = (e) => {
    this.setState({ sent: true })
  }

  render() {
    const { sent, zIndex } = this.state
    const { isOpen } = this.props
    return (
      <Container style={{ zIndex }} isOpen={isOpen} sent={sent}>
        <Header isOpen={isOpen}>
          <SubHeading>Stay Tuned</SubHeading>
          <Heading>Get Updates</Heading>
        </Header>
        <ContentContainer
          isOpen={isOpen}
          ref={el => this.contentEl = el}
        >
          <Close onClick={this.props.close} isOpen={isOpen}>Close</Close>
          {!sent && (
            <GetUpdatesForm onSubmit={this.send}  />
          )}
          {sent && (
            <GetUpdatesThankYou />
          )}
        </ContentContainer>
      </Container>
    )
  }
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => props.isOpen ? (props.sent ? '100%' : 'auto') : '100%'};
  background-color: transparent;
  overflow-y: auto;
  -webkit-overflow-scrolling: ${props => props.isOpen
    ? 'touch'
    : 'auto'
  };

  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    display: block;
    overflow-y: hidden;
  }
`

const Header = styled.div`
  background-color: ${props => props.theme.red};
  color: ${props => props.theme.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: top .5s ease-in-out;
  height: 186px;
  position: relative;
  top: ${props => props.isOpen
    ? '0'
    : '-186px'
  };


  @media (min-width: 768px) {
    height: 348px;

    top: ${props => props.isOpen
      ? '0'
      : '-348px'
    };
  }

  @media (min-width: 1024px) {
    top: 0;
    float: left;
    height: 100vh;
    width: 50vw;
    padding: 0 56px;
    transition: left .5s ease-in-out;

    left: ${props => props.isOpen
      ? '0'
      : '-50vw'
    };
  }
`

const ContentContainer = styled.div`
  display: flex;
  padding: 0 28px;
  background-color: ${props => props.theme.white};
  position: relative;
  transition: bottom .5s ease-in-out;
  bottom: ${props => props.isOpen
    ? '0'
    : 'calc(186px - 100vh)'
  };

  flex-grow: 1;

  @media (min-width: 768px) {
    height: calc(100vh - 348px);
  }

  @media (min-width: 1024px) {
    bottom: 0;
    display: flex;
    float: right;
    height: calc(100vh - 348px);
    width: 50vw;
    padding: 0 56px;
    flex-direction: column;
    justify-content: center;

    transition: right .5s ease-in-out;

    right: ${props => props.isOpen
      ? '0'
      : 'calc(-1*(32px + 50vw))'
    };

  }

  @media (min-width: 1024px) {
    height: 100vh;
  }

  @media (min-width: 1440px) {}
`

const Close = styled.span`
  position: absolute;
  top: -32px;
  left: 50%;
  margin-left: -32px;
  width: 64px;
  height: 64px;
  font: 0/0 a;
  text-shadow: none;
  color: transparent;
  border-radius: 50%;
  background-color: ${props => props.theme.white};
  background-image: url('images/icons/close_button.svg');
  cursor: pointer;

  transition: all .5s ease-in-out .5s;

  transform: rotate(${props => props.isOpen
    ? '0deg'
    : '90deg'
  });
  opacity: ${props => props.isOpen
    ? '1'
    : '0'
  };

  @media (min-width: 1024px) {
    top: auto;
    left: -32px;
    margin-left: 0;
  }
`

const Heading = styled.h2`
  display: inline-block;
  margin-bottom: 35px;
  margin: 0;
  padding: 0 50px;
  position: relative;
  color: #FFFFFF;
  font-family: 'mohavebold_italic';
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  text-transform: uppercase;

  align-self: center;

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
    padding: 0 75px;
    margin-bottom: 30px;
    font-size: 68px;
    line-height: 68px;

    &:after, &:before {
      width: 43px;
    }
  }

  @media (min-width: 1024px) {
    padding: 0 44px;

    &:after, &:before {
      width: 36px;
    }
  }

  @media (min-width: 1440px) {
    padding: 0 75px;

    &:after, &:before {
      width: 43px;
    }
  }
`

const SubHeading = styled.h3`
  margin-bottom: 10px;
  color: #FFFFFF;
  font-family: 'mohavebold_italic';
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.1px;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 30px;
    letter-spacing: -0.16px;
  }
`
