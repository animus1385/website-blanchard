// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
export function map() {
    let flag = 0;
    window.addEventListener("scroll", function () {
        if (
            window.scrollY >= 4500 - document.querySelector("#map").offsetTop &&
            0 == flag
        ) {
            ymaps.ready(function () {
                var e = new ymaps.Map("map", { center: [55.76, 37.64], zoom: 14 });

                e.controls.remove("zoomControl"),
                    e.controls.remove("searchControl"),
                    e.controls.remove("trafficControl"),
                    e.controls.remove("typeSelector"),
                    e.controls.remove("trafficControl"),
                    e.controls.remove("trafficControl"),
                    e.controls.remove("fullscreenControl"),
                    e.controls.remove("rulerControl"),
                    e.controls.remove("geolocationControl");
                var t = new ymaps.control.GeolocationControl({
                    options: { position: { right: 15, top: 360 }, size: "small" },
                });
                e.controls.add(t);
                var i = new ymaps.control.ZoomControl({
                    options: { position: { right: 15, top: 270 }, size: "small" },
                });

                e.controls.add(i);

                e.geoObjects.add(new ymaps.Placemark([55.758468, 37.601088], {
                    hintContent: 'Леонтьевский переулок, дом 5/1',
                    balloonContent: [
                        '<address>',
                        '<strong>Наш офис в Москве</strong>',
                        '<br/>',
                        'Адрес: Москва, ул. Леонтьевский переулок, дом 5/1',
                        '<br/>',
                        'Подробнее: <a href="https://company.yandex.ru/">https://company.yandex.ru</a>',
                        '</address>'
                    ].join('')
                },
                    {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/icon/marker.svg',
                        iconImageSize: [20, 20],
                    },
                ))                 
                    e.setBounds([[55.77, 37.59], [55.75, 37.611]], {
                        checkZoomRange: true,
                        zoomMargin: 14,
                    })               
            }),
                (flag = 1);

            let e = document.querySelector(".contacts__left"),
                t = document.querySelector(".contacts__map-conatainer");
            document.body.offsetWidth <= 450 && e.prepend(t);
        }
    });
}
