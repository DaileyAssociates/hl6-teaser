import React, { PureComponent } from 'react';
import styled from 'styled-components'

import { validateEmail } from '../helpers/validation'
import TextInput from './Form/TextInput'
import Checkbox from './Form/Checkbox'
import Button from './Form/Button'

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
          <Fieldset>
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
          </Fieldset>
          <Disclaimer>
            <Checkbox type="checkbox" id="checkbox_1" />
            <label htmlFor="checkbox_1">I want to receive Honda touring emails, and I agree to Honda's <a href="http://powersports.honda.com/privacy.aspx" target="_blank">privacy policy</a></label>
          </Disclaimer>
          <Button>Send</Button>
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
  padding: 60px 28px 0;

  @media (min-width: 768px) {
    padding: 83px 40px 0;
  }

  @media (min-width: 1024px) {
    float: right;
    height: 100vh;
    width: 50vw;
    padding: 0 56px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 1440px) {}
`

const Disclaimer = styled.div``

const Fieldset = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    display: block;
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
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
`

const SubHeading = styled.h3`
  margin-bottom: 10px;
  color: #FFFFFF;
  font-family: 'mohavebold_italic';
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.1px;
  text-align: center;
  text-transorm: uppercase;

  @media (min-width: 768px) {
    font-size: 30px;
    letter-spacing: -0.16px;
  }
`
