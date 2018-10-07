import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { delay } from 'lodash'

import { validateEmail, validateZipCode } from '../helpers/validation'
import TextInput from './Form/TextInput'
import Checkbox from './Form/Checkbox'
import Button, { Span } from './Form/Button'

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
            type="email"
          />
          <TextInput
            label="Zip Code"
            name="zipcode"
            required
            validation={validateZipCode}
            validationErrorMessage="Invalid Zip"
            pattern="[0-9]{5}"
            testPattern="[0-9]"
            maxLength="5"
            minLength="5"
          />
        </Fieldset>
        <Disclaimer>
          <Checkbox type="checkbox" id="checkbox_1" />
          <label htmlFor="checkbox_1">I want to receive Honda touring emails, and I agree to Honda's <a href="http://powersports.honda.com/privacy.aspx" target="_blank" rel="noopener noreferrer">privacy policy</a></label>
        </Disclaimer>
        <Button sending={sending} sent={sent}>
          <Span sending={sending}>
            {sending
              ? 'sending'
              : sent
                ? 'sent'
                : 'send'
            }
          </Span>
        </Button>
      </Form>
    )
  }
}

const Form = styled.form`
  width: 100%;
  padding-top: 60px;
  padding-bottom: 60px;

  &:after {
    content: "";
    display: table;
    clear: both;
  }

  @media (min-width: 768px) {
    padding-top: 83px;
    padding-bottom: 20px;
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

