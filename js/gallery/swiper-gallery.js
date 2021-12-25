export function swiperGallery() {

    new Swiper(".gallery__right", {
        direction: "horizontal",
        autoHeight: true,
        navigation: { nextEl: ".btn__right", prevEl: ".btn__left" },
        slidesPerColumn: 2,
        slidesPerColumnFill: "row",
      
        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerColumn: 0,
                spaceBetween: 0,
            },
            500: {
                slidesPerView: 2,
                slidesPerColumn: 0,
                spaceBetween: 15,
            },
            601: {
                slidesPerView: 2,
                slidesPerColumn: 2,
                spaceBetween: 35,
            },
            
            768: {
                slidesPerView: 2,
                spaceBetween: 35,
                slidesPerColumn: 2,
            },
            1200: {
                spaceBetween: 32,
                slidesPerView: 2,
                slidesPerColumn: 2,
                slidesPerGroup: 2,
            },
            1400: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 50,

            },
            1920: {

                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 52,
            }
        },
        pagination: {
            el: ".list__counter",
            type: "fraction",
            renderFraction: function (e, t) {
                return (
                    '<span class = "' +
                    e +
                    '"></span>  /  <span class ="' +
                    t +
                    ' " ></span>'
                );
            },
        },
    });
}

