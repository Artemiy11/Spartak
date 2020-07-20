const hamburger = () => {
    const menu = document.querySelector('.header__menu'),
          menuItem = document.querySelectorAll('.header__menu_item'),
          trigger = document.querySelector('.hamburger');

    trigger.addEventListener('click', () => {
        trigger.classList.toggle('hamburger__active');
        menu.classList.toggle('header__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            trigger.classList.toggle('hamburger__active');
            menu.classList.toggle('header__menu_active');
        });
    })
};

export default hamburger;