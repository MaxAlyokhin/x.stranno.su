export default function swiperInit() {
  document.querySelectorAll('.swiper').forEach((swiperElement) => {
    const swiper = new Swiper(swiperElement, {
      // const swiper = new Swiper('.swiper', {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      slidesPerView: 1.3,
      centeredSlides: true,
      spaceBetween: 100,
      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        // hideOnClick: true,
      },

      // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    })
  })
}
