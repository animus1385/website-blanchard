export function swiperEditions() {
    new Swiper(".editions__books", {
        spaceBetween: 50,
        slidesPerView: 3,
        slidesPerGroup: 3,
        setWrapperSize: !0,
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
                slidesPerView: 2,
            },
            767: {
                direction: "horizontal",
                spaceBetween: 0,
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 37,
                slidesPerGroup: 1,
                width: 613
            },
            769:{
                slidesPerView:2,
                width: 730
            },
            900: {
                slidesPerView:2,
                width: 850
            },
            1010: {
                width: 890
            },
            1024: { slidesPerView: 2, spaceBetween: 55, },

            1400: { slidesPerView: 3, },
            1920: {
                width: 1162
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
    })
}