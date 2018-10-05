import styled from 'styled-components'

export default styled.input`
    opacity: 0;
    position: absolute;

    + label {
        font-size: 16px;
        position: relative;
        display: inline-block;
        margin-bottom: 32px;
        padding-left: 40px; 

        &::before,
        &::after {
            position: absolute;
            content: "";
            display: inline-block;
        }

        &::before{
            height: 20px;
            width: 20px;
            border: 2px solid ${props => props.theme.red};
            border-radius: 4px;
            left: 0px;
            top: 3px;
        }

        &::after {
            height: 5px;
            width: 9px;
            border-left: 2px solid;
            border-bottom: 2px solid;
            transform: rotate(-45deg);
            left: 6px;
            top: 9px;

            content: none;
        }

        @media (min-width: 768px) {
          margin-bottom: 40px;
        }

        @media (min-width: 1024px) {}

        @media (min-width: 1440px) {
          margin-bottom: 54px;
        }

        a {
          color: ${props => props.theme.red};
        }
    }

    &:checked + label::after {
        content: "";
    }

    &:focus + label::before {
        outline: rgb(59, 153, 252) auto 5px;
    }

`;

