// Переключатель попапов с пояснениями

export default function popupsInit() {
  const popupsActivateElements = document.querySelectorAll('.text span')
  const containerElement = document.querySelector('.supercontainer')

  // Показать
  popupsActivateElements.forEach((element) => {
    // На компах показываем попап при наведении
    if (window.innerWidth > 1000) {
      element.addEventListener('mouseover', function (event) {
        // console.log(event)
        const popup = document.querySelector(`#${this.dataset.popup}`)
        popup.style.display = 'block'
        setTimeout(() => {
          popup.style.opacity = 1
          // if (window.innerWidth > 1000) {
          popup.style.right = '40px'
          popup.style.top = `${event.pageY - (popup.offsetHeight / 2 + 60)}px`
          // }
        }, 0)

        containerElement.style.opacity = 0.2
      })

      // Скрыть
      element.addEventListener('mouseout', function (event) {
        const popup = document.querySelector(`#${this.dataset.popup}`)
        popup.style.opacity = 0
        setTimeout(() => {
          popup.style.display = 'none'
        }, 500)

        containerElement.style.opacity = 1
      })
    }
    // На мобилах показываем попап при клике
    else {
      // Показать
      element.addEventListener('click', function (event) {
        if (!document.querySelector('.popup--active')) {
          const popup = document.querySelector(`#${this.dataset.popup}`)
          popup.style.display = 'block'

          setTimeout(() => {
            popup.style.opacity = 1
          }, 0)
          setTimeout(() => {
            popup.classList.add('popup--active')
          }, 500)

          containerElement.style.opacity = 0.2
        }
      })
    }
  })

  // Скрыть
  document.querySelector('body').addEventListener('click', () => {
    if (document.querySelector('.popup--active')) {
      const popup = document.querySelector('.popup--active')
      popup.style.opacity = 0
      popup.classList.remove('popup--active')
      setTimeout(() => {
        popup.style.display = 'none'
      }, 500)

      containerElement.style.opacity = 1
    }
  })
}
