import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Slide from './Slide'

export default class SlideShow extends PureComponent {
  static propTypes = {
    backgrounds: PropTypes.object.isRequired,
    paused: PropTypes.bool.isRequired,
  }

  state = {
    interval: 5000,
    slide: 1,
    slides: 4,
  }

  componentDidMount() {
    const intervalID = setInterval(this.timer, this.state.interval)

    this.setState({ intervalID })
  }

  timer = () => {
    if (this.props.paused) {
      return;
    }

    this.setState(({ slide }) => ({
      slide: slide + 1,
    }), () => {
      const { slide, slides } = this.state

      if (slide > slides) {
        this.setState({ slide: 1 })
      }
    })
  }

  render() {
    const { slide, slides } = this.state;
    const { backgrounds } = this.props

    return (
      <Container className="slideshow-container">
        <Slide
          currentSlide={slide}
          images={backgrounds.tents}
          position={1}
          slides={slides}
        />
        <Slide
          currentSlide={slide}
          images={backgrounds.helmets}
          position={2}
          slides={slides}
        />
        <Slide
          currentSlide={slide}
          images={backgrounds.people}
          position={3}
          slides={slides}
        />
        <Slide
          currentSlide={slide}
          images={backgrounds.tracks}
          position={4}
          slides={slides}
        />
      </Container>
    )
  }
}

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    opacity: .25;
    left: 50vw;
    z-index: 5;
    background-color: ${props => props.theme.blue};
  }
`
