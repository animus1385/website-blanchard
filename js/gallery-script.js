let galleryRight = document.querySelector('.gallery__right');
let galleryFilter = document.querySelector('.gallery__filter-full');


if (document.body.offsetWidth <= 768) {
    galleryFilter.prepend(galleryRight);
}




