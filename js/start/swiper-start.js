export function swiperStart() {
   new Swiper(".start__container", {
        direction: "horizontal",
        loop: true,
        slidesPerView: 1,
        autoplay: {
            delay: 1000,
    
        },
        speed: 1000,
    
    })
}

