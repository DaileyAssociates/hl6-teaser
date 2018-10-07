import React, { PureComponent } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import { map } from 'lodash'

import backgrounds from './data/backgrounds'
import { imageSizeByScreenWidth } from './helpers/device'

import theme from './styles/theme'
import baseStyles from './styles/base-styles'
import SplashScreen from './components/SplashScreen'
import LoadingScreen from './components/LoadingScreen'
import LoadImages from './components/LoadImages'
import SlideShow from './components/SlideShow'
import GetUpdatesScreen from './components/GetUpdatesScreen'

export default class App extends PureComponent {
  state = {
    modalOpen: false,
  }

  openModal = () => {
    this.setState({ modalOpen: true })
  }

  closeModal = () => this.setState({ modalOpen: false })

  componentDidMount() {
    baseStyles()
  }

  render() {
    const { modalOpen } = this.state

    const imageSize = imageSizeByScreenWidth()

    const imagesToPreload = map(backgrounds, (category) => {
      return category[imageSize]
    })

    return (
      <ThemeProvider theme={theme}>
        <LoadImages
          images={imagesToPreload}
          render={(props, state) => (
            <LoadingScreen loaded={state.completedPercentage} complete={state.loaded}>
              {state.loaded && (
                <Container>
                  <SplashScreen openModal={this.openModal} />
                  <SlideShow backgrounds={backgrounds}  paused={modalOpen} />
                  <GetUpdatesScreen close={this.closeModal} isOpen={modalOpen} />
                </Container>
              )}
            </LoadingScreen>
        )}
      />
    </ThemeProvider>
    )
  }
}

const Container = styled.div`
  height: 100%;
`
