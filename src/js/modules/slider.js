function slider() {
    const slider = document.querySelector('.offer__slider'),
        img = document.querySelectorAll('.offer__slide'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        slidesField = document.querySelector('.offer__slider-inner'),
        width = window.getComputedStyle(slidesField).width;
let     index = 1,
        offset = 0;

slidesField.style.width = 100 * img.length + '%'; //делаем карусель такой длины, чтобы уместились все слайды
slidesField.style.display = 'flex';               //устанавливаем flex, чтобы картинки стояли горизонтально
slidesField.style.transition = '0.5s all';        

slidesWrapper.style.overflow = 'hidden';      //скрываем неактивные слайды

img.forEach(slide => {                            //устанавливаем ширину картинок как видимый блок
  slide.style.width = width;
});

const indicators = document.createElement('ol'),
    dots = [];

slider.style.position = 'relative';
slider.appendChild(indicators);

for (let i = 0; i < img.length; i++) {
  const dot = document.createElement('li');
  dot.classList.add('swiper-pagination-bullet');
  dot.classList.add('dot');

  dot.getAttribute('data-slide-to', i + 1);
  indicators.appendChild(dot);
  dots.push(dot);

  if (i == 0) {
      dot.style.opacity = 1;
      dot.classList.add('swiper-pagination-bullet-active');
  };

};

indicators.addEventListener('click', (e) => {
  if (e.target && e.target.classList.contains('dot')) {
      dots.forEach((dot, i) => {  
          if (e.target == dot) {
              index = i + 1;

              offset = +width.replace(/\D/g, '') * (index - 1);
              slidesField.style.transform = `translateX(-${offset}px)`; 

              dots.forEach(dot => dot.classList.remove('swiper-pagination-bullet-active'));
              dot.classList.add('swiper-pagination-bullet-active');
          };
      });
  };
});

next.addEventListener('click', () => {
  if (offset == +width.replace(/\D/g, '') * (img.length - 1)) {   //если слайд прокрутился до максимума, то его положение - 0
      offset = 0;
  } else {
      offset += +width.replace(/\D/g, '')                         //прибавляем к положению одно деление слайда
  }
  slidesField.style.transform = `translateX(-${offset}px)`;       //добавляем возможность изменять положение слайдов

  if (index == img.length) {                                      //логика нумерации
      index = 1;
  } else {
      index++;
  };

  dots.forEach(dot => dot.classList.remove('swiper-pagination-bullet-active'));
  dots[index - 1].classList.add('swiper-pagination-bullet-active');

});

prev.addEventListener('click', () => {
  if (offset == 0) {
      offset = +width.replace(/\D/g, '') * (img.length - 1);
  } else {
      offset -= +width.replace(/\D/g, '')
  }

  slidesField.style.transform = `translateX(-${offset}px)`;

  if (index == 1) {
      index = img.length;
  } else {
      index--;
  };

  dots.forEach(dot => dot.classList.remove('swiper-pagination-bullet-active'));
  dots[index - 1].classList.add('swiper-pagination-bullet-active');

});

};

export default slider;