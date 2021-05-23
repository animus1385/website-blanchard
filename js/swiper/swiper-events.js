let mySwiper1;
var mySwiperEV = document.querySelector('.events__container');
function mobileSlider() {
    if (window.innerWidth <= 681 && mySwiperEV.dataset.mobile == 'false') {

        mySwiper1 = new Swiper(mySwiperEV, {
            slidesPerView: 'auto',
            slidesPerGroup: 1,
            slideClass: "events-slide",
            loop: false,
            pagination: {
                el: '.swiper-pagination',
            },
        });
        mySwiperEV.dataset.mobile = 'true';

    }
    if (window.innerWidth > 681 && mySwiper1) {
        mySwiperEV.dataset.mobile = 'false'
        mySwiper1.destroy();
    }
}

mobileSlider()
window.addEventListener('resize', () => {
    mobileSlider()
})
let eventBlockActive = document.querySelector('.events__container');
let eventBlockButton = document.querySelector('.events__button');

eventBlockButton.addEventListener('click', function (e) {
    e.target.style.display = 'none';
    eventBlockActive.classList.toggle('active-event');




})

