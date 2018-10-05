import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ImageProgress from 'image-progress'
import { delay, map, reduce } from 'lodash'

export default class LoadImages extends PureComponent {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    render: PropTypes.func.isRequired,
  }

  state = {
    completedPercentage: 0,
    images: {},
    loaded: false,
  }

  componentDidMount() {
    delay(this.loadImages, 500)
  }

  loadImages = () => {
    const { images } = this.props

    images.forEach((url, idx) => {
      const img = new ImageProgress(url)

      img.on('progress', (event) => {
        this.setState(({ images }) => {
          images[idx] = event.progress * 100

          const completed = reduce(map(images, percentage => percentage), (acc, cur) => acc + cur, 0)
          const completedPercentage = completed / this.props.images.length

          return {
            ...images,
            completedPercentage,
            loaded: completedPercentage === 100,
          }
        })
      })

      img.load()
    })
  }

  render() {
    return this.props.render(this.props, this.state)
  }
}
