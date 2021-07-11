var mySwiperED = new Swiper('.editions__books', {
    // Optional parameters

    spaceBetween: 50,
    slidesPerView: 3,
    slidesPerGroup: 3,
    setWrapperSize: true,
    edgeSwipeThreshold: 0,
    // Navigation arrows
    navigation: {
        nextEl: '.btn__editions-right',
        prevEl: '.btn__editions-left',
    },
    breakpoints: {
        0: {
            direction: 'none',

        },
        320: {
            direction: 'vertical',
            slidesPerColumn: 2,
            spaceBetween: 25,

            slidesPerView: 'auto',

        },
        680: {
            direction: 'vertical',
            slidesPerColumn: 2,
            spaceBetween: 49,
            slidesPerColumnFill: 'row',
            slidesPerView: 'auto',
            slidesPerGroup: 'auto',
        },
        681: {
            direction: 'horizontal',
            spaceBetween: 0,

        },
        768: {
            direction: 'horizontal',
            slidesPerView: 2,
            spaceBetween: -19,
            slidesPerGroup: 1
        },
        1024: {

            slidesPerView: 2,
            spaceBetween: 45,
        },
        1400: {
            slidesPerView: 3,
        }
    },
    pagination: {
        el: '.list__counter',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return '<span class = "' + currentClass + '"></span>' + '  /  ' + '<span class ="' + totalClass + ' " ></span>'
        },
    }

});