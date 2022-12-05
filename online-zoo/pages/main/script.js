let body = document.querySelector('body');
let menu = document.querySelector('.header__nav');
let list = document.querySelector('.nav__list');
let menuBtns = document.querySelector('.header__btns');
let menuBtn = document.querySelector('.header__btn');
let menuItem = document.querySelectorAll('.list__item');

menuBtns.addEventListener('click', function(){
    body.classList.toggle('open');
    menu.classList.toggle('open');
    list.classList.toggle('open');
    menuBtn.classList.toggle('open');
});

if (menuItem) {
	menuItem.forEach(menuItem => {
	   menuItem.addEventListener('click', function () {
          body.classList.remove('open');
          menu.classList.remove('open');
          list.classList.remove('open');
          menuBtn.classList.remove('open');
	   })
	})
};