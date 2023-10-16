import { tns } from 'tiny-slider/src/tiny-slider'

const slider = tns({
  container: '.my-slider',
  mode: 'gallery',
  items: 3,
  gutter: 10,
  slideBy: 'page',
  controls: false,
  nav: false,
  speed: 1000,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayPosition: 'bottom',
  lazyload: true,
  useLocalStorage: true,
})

export default slider
