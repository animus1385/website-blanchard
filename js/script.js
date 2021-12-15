var mySwiper = new Swiper('.start__container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,

    autoplay: {
        delay: 2000,
    },
    speed: 800,
})
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
            spaceBetween: 35,
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
var mySwiperPAR = new Swiper('.partners__container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
        nextEl: '.btn__partners-right',
        prevEl: '.btn__partners-left',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 5,

        },
        1450: {
            slidesPerView: 3,
        },
        1920: {
            slidesPerView: 3,
        }
    },
    autoplay: {
        delay: 1000,
    },
    speed: 800,
})

let galleryRight = document.querySelector('.gallery__right');
let galleryFilter = document.querySelector('.gallery__filter-full');


if (document.body.offsetWidth <= 768) {
    galleryFilter.prepend(galleryRight);
}





let contries = document.querySelectorAll('.history__elem');

contries.forEach(e => {
    e.addEventListener('click', function () {
        contries.forEach(elem => { elem.classList.remove('history__img__active') });
        e.classList.add('history__img__active');


    })
})

window.addEventListener('DOMContentLoaded', function () {

    $(".history__button").click(function () {
        $(this).next('.slide__active').slideToggle();
        // $(this).next('.history__period').classList.toggle('border_active');
    })

});
(function () {
    const burger = document.querySelector('.header__burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
    })
}());
$('.header__burger').click(function () {
    $('.header__menu, .header__list').toggleClass('is-active');
    $('body').toggleClass('lock');
})






// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
let flag = 0;
window.addEventListener('scroll', function () {
    let scrollY = window.scrollY;
    let mapOffset = document.querySelector('#map').offsetTop;
    if ((scrollY >= 4500 - mapOffset) && (flag == 0)) {
        ymaps.ready(init);
        function init() {
            // Создание карты.
            var myMap = new ymaps.Map("map", {
                // Координаты центра карты.
                // Порядок по умолчанию: «широта, долгота».
                // Чтобы не определять координаты центра карты вручную,
                // воспользуйтесь инструментом Определение координат.
                center: [55.76, 37.64],
                // Уровень масштабирования. Допустимые значения:
                // от 0 (весь мир) до 19.

                zoom: 15

            });

            myMap.controls.remove('zoomControl');
            myMap.controls.remove('searchControl');
            myMap.controls.remove('trafficControl');
            myMap.controls.remove('typeSelector');
            myMap.controls.remove('trafficControl');
            myMap.controls.remove('trafficControl');
            myMap.controls.remove('fullscreenControl');
            myMap.controls.remove('rulerControl');
            myMap.controls.remove('geolocationControl');
            var geolocationControl = new ymaps.control.GeolocationControl({
                options: {
                    position: {
                        right: 15,
                        top: 360
                    },
                    size: 'small'
                }
            });
            myMap.controls.add(geolocationControl);

            var zoomControl = new ymaps.control.ZoomControl({
                options: {
                    position: {
                        right: 15,
                        top: 270
                    },
                    size: 'small'
                }

            })
            myMap.controls.add(zoomControl);


        }
        flag = 1;
        let contactsLeft = document.querySelector('.contacts__left');
        let mapNew = document.querySelector('#map')

        if (document.body.offsetWidth <= 450) {

            contactsLeft.prepend(mapNew)
        }

    }
})
let link = document.querySelectorAll('.item-bottom');
let headerContent = document.createElement('div');
headerContent.classList.add('header__content');
headerContent.setAttribute('data-simplebar', 'data-simplebar');
headerContent.innerHTML = '<div class="header__select select-2">Фридрих</div> <div class="header__select select-3">Леонардо</div><div class="header__select select-4">Верроккьо</div><div class="header__select select-5">Тинторетто</div><div class="header__select select-6">Фридрих</div><div class="header__select select-7">Леонардо</div><div class="header__select select-8">Верроккьо</div><div class="header__select select-9">инторетто</div><div class="header__select select-10">Фридрих</div><div class="header__select select-11">Леонардо</div>';
link.forEach(e => {
    e.addEventListener('click', function () {
        if (e.contains(headerContent)) {
            headerContent.remove()
        } else {
            link.forEach(elem => elem.classList.remove('active-icon'));
            e.append(headerContent)
        }




    });

})

document.addEventListener('click', function (e) {
    if (e.target.classList == 'active-icon') {
        console.log(e.target)
    }
})








let inputForm = document.querySelectorAll('.form input');

inputForm.forEach(e => {
    e.addEventListener('click', function () {
        inputForm.forEach(elem => { elem.classList.remove('form-active') });
        e.classList.add('form-active');
    })
})

const element = document.querySelector('.gallery__author');
const choices = new Choices(element, {
    searchEnabled: false,
    searchChoices: false,


    position: "bottom",
    shouldSort: false,
    duplicateItemsAllowed: false,
    resetScrollPosition: false,
    classNames: {
        containerOuter: 'choices',
        containerInner: 'choices__inner',
        input: 'choices__input',
        inputCloned: 'choices__input--cloned',
        list: 'choices__list',
        listItems: 'choices__list--multiple',
        listSingle: 'choices__list--single',
        listDropdown: 'choices__list--dropdown',
        item: 'choices__item',
        itemSelectable: null,
        itemDisabled: 'choices__item--disabled',
        itemOption: 'choices__item--choice',
        group: 'choices__group',
        groupHeading: 'choices__heading',
        button: 'choices__button',
        activeState: 'is-active',
        focusState: 'is-focused',
        openState: 'is-open',
        disabledState: 'is-disabled',
        highlightedState: 'is-highlighted',
        selectedState: 'is-selected',
        flippedState: 'is-flipped',
        selectedState: 'is-highlighted',
    }
});
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);


let valid = new JustValidate('.form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 30,
            function: () => {
                let nameForm = document.querySelector('.form__name');
                if (!nameForm.value.match(/\d/g)) {
                    return valid.messages.name.function
                }
                return
            }
        },
        tel: {
            required: true,
            function: () => {
                const phone = selector.inputmask.unmaskedvalue();
                return Number(phone) && phone.length === 10;
            }
        },


    },
    messages: {
        name: {
            required: "это поле обязательное",
            remote: " Такое имя уже есть!",
            name: 'введите правильно',
            minLength: 'введите как минимум 2 символа',
            maxLength: 'Введите от 2 до 30 символов',
            function: 'выввели цифры',
        },
        tel: {
            remote: " Такое телефон  уже используется!",
            tel: 'введите правильно',
            function: 'введено не корректно',
            required: "это поле обязательное",
        }
    },
});

$('.form').submit(function () {
    var form = $(this);
    let mess = $('.mess');
    $.ajax({
        type: "POST",
        url: "foo.php",
        data: form.serialize(),
        error: function () {
            mess.html('<div class="alert alert-danger">Ошибка отправки!</div>');
        }, success: function () {
            mess.html('<div class="alert alert-success">Собщение успешно отправленно!</div>');
            setTimeout(function () {
                form.trigger('reset');
            }, 2000);
        }
    });
});


$(document).ready(function () {
    $('a[href^="#"], *[data-href^="#"]').on('click', function (e) {
        e.preventDefault();
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });
});