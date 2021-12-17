export function swiperPartners() {
     new Swiper(".partners__container", {
        direction: "horizontal",
        slidesPerView: 3,
        spaceBetween: 30,
    
        navigation: {
            nextEl: ".btn__partners-right",
            prevEl: ".btn__partners-left",
        },
        breakpoints: {
            320: { slidesPerView:1, spaceBetween: 24 },
            768: { slidesPerView: 2, spaceBetween: 0 },
            1024: { slidesPerView: 2, spaceBetween: 0,  },
            1640: { slidesPerView: 3 },
            1920: { slidesPerView: 3 },
        },
        autoplay: { delay: 1e3 },
        speed: 800,
    });
}

