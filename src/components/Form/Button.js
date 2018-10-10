import styled from 'styled-components'

export default styled.button`
  display: block;
  width: 100%;
  height: 62px;
  padding: 17px 0;
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 14px;

  @media (min-width: 768px) {
    width: auto;
  }

  span {
    display: block;
    position: relative;
    height: ${props => props.sent
      ? '30px'
      : 'auto'
    };
    width: ${props => props.sent
      ? '30px'
      : 'auto'
    };
    margin: 0 auto;
    background-image: ${props => props.sent
      ? `url('/images/icons/checkmark.svg')`
      : 'none'
    };
    background-repeat: no-repeat;
    background-size: auto 100%;
    color: ${props => props.sent
      ? 'transparent'
      : props.theme.white
    };
    font: ${props => props.sent
      ? '0/0 a'
      : '14px'
    };
    text-shadow: none;

    &:after {
      display: ${props => props.sending
        ? 'inline'
        : 'none'
      };
      content: '...';
      position: relative;
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

export const Span = styled.span``
