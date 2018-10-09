import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <Container>
      <Social>
        <Link icon="instagram" target="_blank" href="https://www.instagram.com/honda_powersports_us/">Instagram</Link>
        <Link icon="youtube" target="_blank" href="https://www.youtube.com/user/HondaPowersportsUS">YouTube</Link>
        <Link style={{ height: '22px' }} icon="twitter" target="_blank" href="https://twitter.com/HondaPowersprts">Twitter</Link>
        <Link icon="facebook" target="_blank" href="https://www.facebook.com/HondaPowersports">Facebook</Link>
      </Social>
      <Copy>
        © 2018 American Honda Motor Co., Inc. - Motorcycle Division
      </Copy>
    </Container>
  )
}

const Container = styled.div`
  padding: 0 24px;

  @media (min-width: 1024px) {
    padding: 0 40px;
  }
`

const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Link = styled.a`
  display: inline-block;
  border: 0;
  font: 0/0 a;
  text-shadow: none;
  color: transparent;
  width: 25px;
  height: 25px;
  margin: 0 20px;
  opacity: .7;
  background-image: url('/images/icons/${props => props.icon}_icon.svg');
  background-repeat: no-repeat;
  background-size: auto 100%;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`

const Copy = styled.p`
  margin: 14px 0 19px;
  opacity: 0.75;
  color: ${props => props.theme.white};
  font-family: Roboto;
  font-size: 14px;
  font-style: italic;
  letter-spacing: -0.07px;
  line-height: 16px;
  text-align: center;

  @media (min-width: 768px) {
    margin: 22px 0 30px;
  }
`
