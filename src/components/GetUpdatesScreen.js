import React, { PureComponent } from 'react';
import styled from 'styled-components'

import { validateEmail } from '../helpers/validation'
import TextInput from './Form/TextInput'

export default class SignUp extends PureComponent {
  render() {
    return (
      <Container>
        <Header>
          <SubHeading>Stay Tuned</SubHeading>
          <Heading>Get Updates</Heading>
        </Header>
        <Form>
          <Close onClick={this.props.close}>Close</Close>
          <TextInput label="First Name" name="f_name" required />
          <TextInput label="Last Name" name="l_name" required />
          <TextInput
            label="Email"
            name="email"
            required
            validation={validateEmail}
            validationErrorMessage="Invalid Email"
          />
          <TextInput label="Zip Code" name="zip" />
        </Form>
      </Container>
    )
  }
}

const Container = styled.div`
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow: auto;
  background-color: ${props => props.theme.white};
`

const Form = styled.form`
  position: relative;
  padding: 1em;

  @media (min-width: 1024px) {
    float: right;
    height: 100vh;
    width: 50vw;
    padding: 0 56px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const Close = styled.span`
  position: absolute;
  width: 64px;
  height: 64px;
  font: 0/0 a;
  text-shadow: none;
  color: transparent;
  border-radius: 50%;
  background-color: ${props => props.theme.white};
  background-image: url('images/icons/close_button.svg');

  @media (min-width: 1024px) {
    left: -32px;
  }
`

const Header = styled.div`
  height: 186px;
  background-color: ${props => props.theme.red};
  color: ${props => props.theme.white};

  @media (min-width: 768px) {
    height: 348px;
  }

  @media (min-width: 1024px) {
    float: left;
    height: 100vh;
    width: 50vw;
    padding: 0 56px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const Heading = styled.h2`
  display: block;
  margin-bottom: 35px;
  padding: 0;
  position: relative;
  color: #FFFFFF;
  font-family: 'mohavebold_italic';
  font-size: 40px;
  line-height: 48px;
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
    font-size: 68px;
    line-height: 68px;

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
  letter-spacing: -0.1px;
  text-align: center;
  text-transorm: uppercase;

  @media (min-width: 768px) {
    font-size: 30px;
    letter-spacing: -0.16px;
  }
`
