import language from './language'
import popupsInit from './popups'
import swiperInit from './swiper'

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('body').style.opacity = 1

  popupsInit()

  swiperInit()

  language()
})
