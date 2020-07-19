import Swiper from '../libraries/swiper.min';

const swiper = () => {
  var mySwiper = new Swiper('.swiper-container', {

    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 7000
    },


    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  
}

export default swiper;