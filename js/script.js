
// ИМПОРТ ФАИЛОВ 

import { swiperStart } from './start/swiper-start.js'
import { swiperGallery } from './gallery/swiper-gallery.js'
import { swiperEvetns } from './events/swiper-events.js'
import { swiperEditions } from './editions/swiper-editions.js'
import { swiperPartners } from './parthners/swiper-partners.js'
import { map } from './contacts/map.js'
import { choices } from './gallery/choices-scripts.js'
import { customInput } from './container-pop/inputmask-custom.js'
import { validateForm } from './contacts/validForm.js'
import { ajaxForm } from './contacts/ajax.js'
import { buttonContries } from './history/contries.js'
import { accordion } from './history/acordion.js'
import { burgerMenu } from './header/burger.js'
import { headerButtons } from './header/header-buttons.js'
import { animateScroll } from './anchors.js'
import { formInput } from './container-pop/form-input.js'
import { containerPop } from './container-pop/container-pop.js'
import { price } from './editions/price.js'
import { filter } from './editions/filter.js'

//  ПОДКЛЮЧЕНИЕ ФУНКЦИЙ
swiperStart();      /* СВАЙПЕР START */
swiperGallery();    /* СВАЙПЕР ГАЛЕРЕИ */
swiperEvetns();     /* СВАЙПЕР ЭВЕНТА(ТОЛЬКО ПРИ МАСШТАБИРОВАНИИ) */
swiperEditions();   /* СВАЙПЕР ИЗДАНИЙ */
swiperPartners();   /* СВАЙПЕР ПАРТНЕРОВ */
map();              /* КАРТА */
choices();          /* СЕЛЕКТОР В ГАЛЕРЕИ */
customInput();      /* МАСКА НОМЕРА ТЕЛЕФОНА */
validateForm();     /* ВАЛИДАЦИЯ ФОРМЫ В КОНТАКТАХ */
ajaxForm();         /* ОТПРАВКА ФОРМЫ */
buttonContries();   /* КНОПКИ СТРАН В КАТАЛОГЕ */
accordion();        /* АККОРДИОН В КАТАЛОГЕ */
burgerMenu();       /* КНОПКА МЕНЮ В МОБИЛЬНОЙ ВЕРСИИ */
headerButtons();    /* ВСПЛЫВАЮЩЕЕ ОКНО ПО КЛИНУ НА КНОПКИ В НИЖНЕЙ ПАНЕЛЕ ХЕДЕРА */
animateScroll();    /* ПЛАВНАЯ АНИМАЦИЯ */
formInput()         /* МЕНЯЕТ ЦВЕТ БЕКГРАУНДА ПРИ КЛИКЕ */
containerPop()      /* ОКНО РЕГИСТРАЦИИ */
price()             /* ПОДСЧЕТ ЦЕНЫ */
filter()            /* ФИЛЬТЕР ПО ЖАНРАМ */


