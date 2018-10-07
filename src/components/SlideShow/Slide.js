import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function Slide({ currentSlide, images, position, slides, style }) {
  return (
    <Container {...{ position, slides }}>
      <Side {...{ currentSlide, left: true, position, slides }}>
        <Image {...{ images, left: true }} />
      </Side>
      <Side {...{ currentSlide, right: true, position, slides }}>
        <Image {...{ images, right: true }} />
      </Side>
    </Container>
  )
}

Slide.propTypes = {
  images: PropTypes.shape({
    sm: PropTypes.string.isRequired,
    md: PropTypes.string.isRequired,
    lg: PropTypes.string.isRequired,
    xl: PropTypes.string.isRequired,
  }).isRequired,
}

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  z-index: ${props => (props.slides + 1) - props.position};

  @media (min-width: 768px) {
    height: 100vh;
    z-index: ${props => props.position};
  }
`

const Side = styled.div`
  display: ${props => props.right ? 'none' : 'block'};
  width: 100vw;
  height: 100%;
  overflow: hidden;
  transition: opacity 1.5s ease-in-out;

  opacity: ${({ currentSlide, position }) => currentSlide === position
    ? '1'
    : '0'
  };

  @media (min-width: 768px) {
    display: block;
    width: 50vw;
    position: absolute;
    opacity: 1;
    left: ${props => props.left ? '0' : 'auto'};
    right: ${props => props.right ? '0' : 'auto'};

    transition: top 1.5s ease-in-out;

    top: ${props => props.currentSlide >= props.position
      ? '0'
      : props.left
        ? '-100vh'
        : '100vh'
    };
  }
`

const Image = styled.div`
  display: ${props => props.right ? 'none' : 'block'};
  width: 100vw;
  height: 100%;
  background-image: url('${props => props.images.sm}');
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    display: block;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: ${props => props.left ? '0' : '-50vw'};
    background-image: url('${props => props.images.md}');
  }

  @media (min-width: 1024px) {
    background-image: url('${props => props.images.lg}');
  }

  @media (min-width: 1440px) {
    background-image: url('${props => props.images.xl}');
  }
`
