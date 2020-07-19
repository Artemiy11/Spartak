const bindSlider = () => {
    const slides = document.querySelectorAll('.offer__slide'),
          arrows = document.querySelectorAll('.offer__arrow');
    let index;

    function activeSlide() {
        slides.forEach(slide => {
            if (slide.classList.contains('slide_active')) {
                index = slide.id;
                document.querySelector(`#${index}_content`).classList.add('offer__content_active');
                console.log(`#${index}_content`)
            }
        });
    }

    activeSlide();

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            activeSlide();
        })
    })
};

export default bindSlider;