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
    next: 2,
    prev: 4,
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

    this.setState(({ next, prev, slide, slides }) => {
      return {
        slide: next,
        next: next < slides
          ? next + 1
          : 1,
        prev: next === 1
          ? 4
          : next - 1
      }
    })
  }

  render() {
    const { next, prev, slide, slides } = this.state;
    const { backgrounds } = this.props

    return (
      <Container className="slideshow-container">
        <Slide
          currentSlide={slide}
          nextSlide={next}
          prevSlide={prev}
          images={backgrounds.tents}
          position={1}
          slides={slides}
        />
        <Slide
          currentSlide={slide}
          nextSlide={next}
          prevSlide={prev}
          images={backgrounds.helmets}
          position={2}
          slides={slides}
        />
        <Slide
          currentSlide={slide}
          nextSlide={next}
          prevSlide={prev}
          images={backgrounds.people}
          position={3}
          slides={slides}
        />
        <Slide
          currentSlide={slide}
          nextSlide={next}
          prevSlide={prev}
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
`
