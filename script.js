document.addEventListener('DOMContentLoaded', function () {
  var main = new Splide('#main-slider', {
    type: 'fade',
    rewind: true,
    pagination: false,
    arrows: false,
    width: '100%',
    heightRatio: 1.3,
  });

  var thumbnails = new Splide('#thumbnail-slider', {
    fixedWidth: 70,
    fixedHeight: 91,
    gap: 7,
    rewind: true,
    pagination: false,
    cover: true,
    direction: 'ttb',
    height: 483,
    arrows: false,
    isNavigation: true,
    breakpoints: {
      600: {
        fixedWidth: 60,
        fixedHeight: 44,
      },
    },
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
});