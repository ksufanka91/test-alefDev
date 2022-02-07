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

// header show/hide
const body = document.body;
const scrollUpClass = "scroll-up";
const scrollDownClass = "scroll-down";
const headerFixedClass = "header-fixed";
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
        body.classList.remove(headerFixedClass);
        return;
    }

    if (scrollDown && !body.classList.contains(scrollDownClass)) {
        // down
        if (!firstScrollDown)
            body.classList.add(headerFixedClass);

        menu.classList.remove('open');
        body.classList.remove(scrollUpClass);
        body.classList.add(scrollDownClass);
    } else if (scrollUp && body.classList.contains(scrollDownClass)) {
        // up
        firstScrollDown = false;
        body.classList.add(headerFixedClass);
        body.classList.remove(scrollDownClass);
        body.classList.add(scrollUpClass);
    }

    lastScroll = currentScroll;
});

// slider
const main = new Splide('#main-slider', {
    type: 'fade',
    rewind: true,
    pagination: false,
    arrows: false,
    width: '100%',
    heightRatio: 1.28,
});

const thumbnails = new Splide('#thumbnail-slider', {
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
            gap: 4,
        },
    },
});

main.sync(thumbnails);
main.mount();
thumbnails.mount();

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

document.querySelector('.product-form-box').addEventListener('submit', function (e) {
    e.preventDefault();

    // тут отправляем ajax запрос на сервер для добавления товара в корзину, по ответу от сервера показываем сообщение
    // пока ajax запроса нет сразу показываем сообщение

    const productName = document.querySelector('h1').textContent;
    const productCount = inputHidden.value;
    const message = `Товар "${productName}" в количестве ${productCount} шт. добавлен в корзину`;

    showMessage(message);
});

document.querySelector('.product-favourites').addEventListener('click', function (e) {
    e.preventDefault();

    const productName = document.querySelector('h1').textContent;
    const message = `Товар "${productName}" добавлен в избранное`;

    showMessage(message);
});

function showMessage(message) {
    const element = document.querySelector('.product-message');

    element.textContent = message;
    element.classList.add('open');

    setTimeout(function () {
        element.classList.remove('open');
    }, 2000);
}

// subscribe

document.querySelector('.footer-subscribe-btn-cross').addEventListener('click', function () {
    document.querySelector('.footer-subscribe-email').value = '';
});
