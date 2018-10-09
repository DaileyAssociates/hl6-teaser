import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { get, isEmpty, pickBy, toInteger, toString } from 'lodash'

export default class TextInput extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    type: PropTypes.string,
    validation: PropTypes.func,
    validationErrorMessage: PropTypes.string,
  }

  static defaultProps = {
    required: false,
    type: 'text',
    validationErrorMessage: 'required',
  }

  state = {
    value: '',
  }

  onBlurHandler = e => this.setState((prevState) => {
    const { required, validation, validationErrorMessage } = this.props
    const { value } = prevState

    const error = (required && isEmpty(value) && 'required')
      || (required && validation && !validation(value) && validationErrorMessage)

    return {
      error,
      focused: false,
    }
  })

  onChangeHandler = (e) => {
    const value = toString(get(e, 'target.value'))

    if (isEmpty(value)) {
      this.setState({ value })
      return false
    }

    const props = this.props
    const maxLength = toInteger(get(this, 'props.maxLength'))
    const pattern = get(props, 'testPattern')

    if (maxLength && value.length > maxLength) { return }

    if (pattern) {
      const reg = new RegExp(pattern)

      if (!reg.test(value)) { return }
    }

    this.setState({ value })
  }

  onFocusHandler = e => this.setState({ focused: true })

  render() {
    const {
      label,
      maxLength,
      minLength,
      name,
      pattern,
      required,
      type,
    } = this.props

    const {
      error,
      focused,
      value,
    } = this.state

    return (
      <Container>
        <Label
          className={`${focused && 'focused'} ${(value === '') ? 'empty' : 'filled'}`}
          htmlFor={name}
        >
          {label} {required && (<span>*</span>)}
        </Label>

        <FocusedLabel
          className={`
            ${focused && 'focused'}
            ${(value === '') ? 'empty' : 'filled'}
            ${error && 'error'}
          `}
          error={error ? true : false}
          htmlFor={name}
        >
          {error || label}
        </FocusedLabel>

        <Input {...{
          ...pickBy({
            maxLength,
            minLength,
            pattern,
          }),
          name,
          onBlur: this.onBlurHandler,
          onChange: this.onChangeHandler,
          onFocus: this.onFocusHandler,
          required,
          type,
          value,
        }} />
      </Container>
    )
  }
}

const Container = styled.div`
  position: relative;
  display: block;
  margin-bottom: 14px;
  border-radius: 4px;
  background-color: ${props => props.theme.whiteAlt};

  @media (min-width: 768px) {
    width: calc(50% - 7px);
  }

  @media (min-width: 1024px) {
    width: 100%;
  }

  @media (min-width: 1440px) {
    width: calc(50% - 7px);
  }
`

const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  padding: 28px 20px;
  color: ${props => props.error
    ? props.theme.red
    : props.theme.greyDark};
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.07px;
  line-height: 16px;
  text-transform: uppercase;
  opacity: 1;
  transition: opacity .25s ease-in-out;

  &.focused,
  &.filled {
    opacity: 0;
  }

  span {
    color: ${props => props.theme.red};
  }
`

const FocusedLabel = styled(Label)`
  position: absolute;
  top: 0;
  right: 0;
  left: auto;
  padding: 10px 17px;
  font-size: 14px;
  text-transform: lowercase;

  opacity: 0;

  &.focused, &.error, &.filled {
    opacity: 1;
  }
`

const Input = styled.input`
  position: relative;
  z-index: 9;
  display: block;
  width: 100%;
  padding: 28px 20px;
  background-color: transparent;
  color: ${props => props.theme.greyDark};
  letter-spacing: -0.07px;
  line-height: 16px;
  border: none;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
`
