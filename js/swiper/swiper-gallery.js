var mySwiperGAL = new Swiper('.gallery__right', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 45,
    slidesPerColumnFill: "row",
    slidesPerColumn: 2,

    // Navigation arrows
    navigation: {
        nextEl: '.btn__right',
        prevEl: '.btn__left',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
        },
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
        },
        700: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 32,
            slidesPerColumn: 2,
        },
        769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1024: {
            spaceBetween: 32,
            slidesPerView: 2,
            slidesPerGroup: 2,

        },
        1920: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        }

    },
    pagination: {
        el: '.list__counter',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return '<span class = "' + currentClass + '"></span>' + '  /  ' + '<span class ="' + totalClass + ' " ></span>'
        }
    }

})