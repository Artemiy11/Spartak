function slider() {
    const slider = document.querySelector('.offer__slider'),
    img = document.querySelectorAll('.slider_image'),
    prev = document.querySelector('#left'),
    next = document.querySelector('#right'),
    slidesWrapper = document.querySelectorAll('.offer-slide'),
    slidesField = document.querySelector('.offer__wrapper'),
    width = window.getComputedStyle(slidesField).width;
let   index = 1,
    offset = 0;

slidesField.style.width = 100 * img.length + '%'; //делаем карусель такой длины, чтобы уместились все слайды
slidesField.style.display = 'flex';               //устанавливаем flex, чтобы картинки стояли горизонтально
slidesField.style.transition = '0.5s all';        

slidesWrapper.forEach(wrapper => {
    wrapper.style.overflow = 'hidden'; 
})         //скрываем неактивные слайды

img.forEach(slide => {                            //устанавливаем ширину картинок как видимый блок
  slide.style.width = width;
});

const indicators = document.createElement('ol'),
    dots = [];

slider.style.position = 'relative';
slider.appendChild(indicators);

for (let i = 0; i < img.length; i++) {
  const dot = document.createElement('li');
  dot.classList.add('dot');

  dot.getAttribute('data-slide-to', i + 1);
  indicators.appendChild(dot);
  dots.push(dot);

  if (i == 0) {
      dot.style.opacity = 1;
  };

};

indicators.addEventListener('click', (e) => {
  if (e.target && e.target.classList.contains('dot')) {
      dots.forEach((dot, i) => {  
          if (e.target == dot) {
              index = i + 1;

              offset = +width.replace(/\D/g, '') * (index - 1);
              slidesField.style.transform = `translateX(-${offset}px)`; 

              dots.forEach(dot => dot.style.opacity = '.5');
              dot.style.opacity = 1;

              checkNum();
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

  dots.forEach(dot => dot.style.opacity = '.5');
  dots[index - 1].style.opacity = 1;

  checkNum();
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

  dots.forEach(dot => dot.style.opacity = '.5');
  dots[index - 1].style.opacity = 1;

  checkNum();
});

function checkNum() {
  if (img.length < 10) {
      current.textContent = `0${index}`;
      total.textContent = `0${img.length}`;
  } else {
      current.textContent = index;
      total.textContent = img.length;
  };
}

checkNum();

};

export default slider;