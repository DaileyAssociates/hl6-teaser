import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { delay } from 'lodash'

import { validateEmail } from '../helpers/validation'
import TextInput from './Form/TextInput'
import Checkbox from './Form/Checkbox'
import Button from './Form/Button'

export default class GetUpdatesForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  state = {
    sending: false,
    sent: false,
  }

  onSubmitHandler = (e) => {
    e.preventDefault()

    this.setState({ sending: true }, () => this.sending(e))

  }

  sending = (e) => {
    delay(() => this.sent(e), 1000)
  }

  sent = (e) => {
    this.setState({ sending: false, sent: true }, () => {
      delay(() => {
        this.props.onSubmit(e);
      }, 1000)
    })
  }

  render() {
    const { sending, sent } = this.state

    return (
      <Container>
        <Close onClick={this.props.close}>Close</Close>
        <Form onSubmit={this.onSubmitHandler}>
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
            <label htmlFor="checkbox_1">I want to receive Honda touring emails, and I agree to Honda's <a href="http://powersports.honda.com/privacy.aspx" target="_blank" rel="noopener noreferrer">privacy policy</a></label>
          </Disclaimer>
          <Button sending={sending} sent={sent}>
            <span sending={sending}>
              {sending
                ? 'sending'
                : sent
                  ? 'sent'
                  : 'send'
              }
            </span>
          </Button>
        </Form>
      </Container>
    )
  }
}

const Container = styled.div`
  position: relative;

  @media (min-width: 1024px) {
    float: right;
    height: 100vh;
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    height: 100vh;
    width: 50vw;
  }
  @media (min-width: 1440px) {}
`

const Form = styled.form`
  padding: 60px 28px 60px;

  @media (min-width: 768px) {
    padding: 83px 40px 20px;
  }

  @media (min-width: 1024px) {
    padding: 0 56px;
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

