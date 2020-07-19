const scroll = () => {
    window.addEventListener('scroll', function() {
        if(pageYOffset >= 400) {
            document.querySelector('.header').classList.add('header__active');
        }
        if (pageYOffset <= 400) {
            document.querySelector('.header').classList.remove('header__active');
        }
    });
}

export default scroll;