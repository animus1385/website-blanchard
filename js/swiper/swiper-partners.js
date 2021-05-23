var mySwiperPAR = new Swiper('.partners__container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 7,
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
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 2,

            spaceBetween: 34,

        },
        1420: {
            slidesPerView: 3,

        }
    },
})
