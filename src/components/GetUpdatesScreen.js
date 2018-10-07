import React, { Component } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

import GetUpdatesForm from './GetUpdatesForm'
import GetUpdatesThankYou from './GetUpdatesThankYou'

export default class SignUp extends Component {
  static propTypes = {
    close: PropTypes.func.isRequired,
  }

  state = {
    sent: false,
  }

  send = (e) => {
    this.setState({ sent: true })
  }

  render() {
    const { sent } = this.state

    return (
      <Container>
        <Header>
          <SubHeading>Stay Tuned</SubHeading>
          <Heading>Get Updates</Heading>
        </Header>
        <ContentContainer>
          <Close onClick={this.props.close}>Close</Close>
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
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
  overflow: auto;
  background-color: ${props => props.theme.white};
`

const ContentContainer = styled.div`
  display: flex;
  height: calc(100vh - 186px);
  padding: 0 28px;

  position: relative;

  @media (min-width: 1024px) {
    display: flex;
    float: right;
    height: calc(100vh - 348px);
    width: 50vw;
    padding: 0 56px;
    flex-direction: column;
    justify-content: center;
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

  @media (min-width: 1024px) {
    top: auto;
    left: -32px;
    margin-left: 0;
  }
`

const Header = styled.div`
  height: 186px;
  background-color: ${props => props.theme.red};
  color: ${props => props.theme.white};

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    height: 348px;
  }

  @media (min-width: 1024px) {
    float: left;
    height: 100vh;
    width: 50vw;
    padding: 0 56px;
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
