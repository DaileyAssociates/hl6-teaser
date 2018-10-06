import styled from 'styled-components'

export default styled.button`
  display: block;
  width: 100%;
  height: 62px;
  padding: 17px 100px;
  border: none;
  border-radius: 4px;
  color: ${props => props.theme.white};
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;

  span {
    position: relative;

    &:after {
      display: ${props => props.sending
        ? 'block'
        : 'none'
      };
      content: '...';
      position: absolute;
      top: 0;
      right: -12px;
    }
  }


  background-color: ${props => props.sent
    ? props.theme.success
    : props.sending
      ? props.theme.redDark
      : props.theme.red
  };

  @media (min-width: 768px) {
    width: 240px;
    float: right;
  }

  @media (min-width: 1024px) {
    align-self: flex-end;
  }

  @media (min-width: 1440px) {}
`

