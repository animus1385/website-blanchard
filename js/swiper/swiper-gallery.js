var mySwiperGAL = new Swiper('.gallery__right', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 45,
    slidesPerColumnFill: "row",
    slidesPerColumn: 2,
    autoHeight: true,
    // Navigation arrows
    navigation: {
        nextEl: '.btn__right',
        prevEl: '.btn__left',
    },
    breakpoints: {
        320: {
            slidesPerView: 'auto',
            slidesPerGroup: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: 'column',
            autoHeight: false,
            spaceBetween: 0,
        },
        700: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 32,
            slidesPerColumn: 2,
        },
        768: {
            slidesPerView: 1,
            slidesPerGroup: 2,
            spaceBetween: 17,
            slidesPerColumn: 2,
            
        },
        1024: {
            spaceBetween: 34,
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