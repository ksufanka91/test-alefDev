// slider
document.addEventListener('DOMContentLoaded', function () {
  var main = new Splide('#main-slider', {
    type: 'fade',
    rewind: true,
    pagination: false,
    arrows: false,
    width: '100%',
    heightRatio: 1.28,
  });

  var thumbnails = new Splide('#thumbnail-slider', {
    fixedWidth: 70,
    fixedHeight: 91, // 1.3 соотношение
    gap: 7,
    rewind: true,
    pagination: false,
    cover: true,
    direction: 'ttb',
    height: 483,
    arrows: false,
    isNavigation: true,
    breakpoints: {
      900: {
        fixedWidth: 60,
        fixedHeight: 78,
      },
      425: {
        fixedWidth: 40,
        fixedHeight: 52,
      },
    },
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
});

// add to cart
let btnMinus = document.querySelector('.js-btn-minus'),
  btnPlus = document.querySelector('.js-btn-plus'),
  quantityField = document.querySelector('.js-btn-count'),
  inputHidden = document.querySelector('.js-input-hidden');


btnMinus.addEventListener('click', function () {
  if (inputHidden.value > 1) {
    inputHidden.value--;
    quantityField.textContent = inputHidden.value;
  }
});

btnPlus.addEventListener('click', function () {
  inputHidden.value++;
  quantityField.textContent = inputHidden.value;
});


// mobile-menu
const menu = document.querySelector('.header-mobile-menu');
const btnOpen = document.querySelector('.header-burger');
const btnClose = document.querySelector('.header-mobile-menu-btn-close');

btnOpen.addEventListener('click', function () {
  menu.classList.add('open');
});

btnClose.addEventListener('click', function () {
  menu.classList.remove('open');
});

document.addEventListener('click', function (e) {
  if (!menu.classList.contains('open'))
    return;

  let target = e.target;

  if (target.classList.contains('header'))
    return;

  while (target.parentElement) {
    if (target.parentElement.classList.contains('header'))
      return;

    target = target.parentElement;
  }

  menu.classList.remove('open');
});

// header show/hiide
const body = document.body;
const scrollUpClass = "scroll-up";
const scrollDownClass = "scroll-down";
const haederFixedClass = "header-fixed";
let lastScroll = 0;
let firstScrollDown = true;


window.addEventListener('scroll', function () {
  const currentScroll = window.scrollY,
    scrollUp = currentScroll < lastScroll,
    scrollDown = currentScroll > lastScroll;

  if (!firstScrollDown && currentScroll <= 0)
    firstScrollDown = true;

  if (scrollUp && currentScroll <= 0 || scrollDown && currentScroll <= 72) {
    body.classList.remove(scrollUpClass);
    body.classList.remove(haederFixedClass);
    return;
  }

  if (scrollDown && !body.classList.contains(scrollDownClass)) {
    // down
    if (!firstScrollDown)
      body.classList.add(haederFixedClass);

    menu.classList.remove('open');
    body.classList.remove(scrollUpClass);
    body.classList.add(scrollDownClass);
  } else if (scrollUp && body.classList.contains(scrollDownClass)) {
    // up
    firstScrollDown = false;
    body.classList.add(haederFixedClass);
    body.classList.remove(scrollDownClass);
    body.classList.add(scrollUpClass);
  }

  lastScroll = currentScroll;
});

