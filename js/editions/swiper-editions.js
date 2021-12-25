export function swiperEditions() {
    new Swiper(".editions__books", {

        edgeSwipeThreshold: 0,
        navigation: {
            nextEl: ".btn__editions-right",
            prevEl: ".btn__editions-left",
        },
        breakpoints: {
            0: { direction: "none" },
            320: {
                direction: "vertical",
                slidesPerColumn: 2,
                spaceBetween: 0,
                slidesPerView: "auto",
            },
            501: {
                direction: "horizontal",
                spaceBetween: 20,
                slidesPerView: 1,
            },
            600: {
                slidesPerView: 2, spaceBetween: 20,
            },
            767: {
                direction: "horizontal",
                spaceBetween: 0,
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: -21,
                slidesPerGroup: 1,
            },
            951: {
                spaceBetween: 20,
                slidesPerView: 3,
            },
            1011: { slidesPerView: 2, spaceBetween: 56, },
            1200: { spaceBetween: 50, slidesPerView: 2, },
            1600: { slidesPerView: 3, spaceBetween: 55, },

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
    })
}