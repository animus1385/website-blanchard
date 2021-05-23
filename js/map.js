// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
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

        zoom: 7

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