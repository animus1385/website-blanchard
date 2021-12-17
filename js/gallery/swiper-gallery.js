export function swiperGallery() {

    let galleryRight = document.querySelector(".gallery__right"),
        galleryFilter = document.querySelector(".gallery__filter-full");
    document.body.offsetWidth <= 768 && galleryFilter.prepend(galleryRight);

    new Swiper(".gallery__right", {
        direction: "horizontal",
        autoHeight: true,
        navigation: { nextEl: ".btn__right", prevEl: ".btn__left" },
        height: 100,
        slidesPerColumn: 2,
        slidesPerColumnFill: "row",
      
        breakpoints: {
            320: {
                slidesPerView: 'auto',
                slidesPerGroup: 1,
                slidesPerColumn: 0,
                spaceBetween: 0,
            },
            600: {
                slidesPerView: 2,
                slidesPerColumn: 0,
                spaceBetween: 15,
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
                spaceBetween: 50,
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

