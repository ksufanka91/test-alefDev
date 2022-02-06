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