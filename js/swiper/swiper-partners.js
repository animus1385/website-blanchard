var mySwiperPAR = new Swiper('.partners__container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
        nextEl: '.btn__partners-right',
        prevEl: '.btn__partners-left',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 5,

        },
        1450: {
            slidesPerView: 3,
        },
        1920: {
            slidesPerView: 3,
        }
    },
})
