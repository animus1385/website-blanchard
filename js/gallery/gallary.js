
export default function activelightGallery() {
    lightGallery(document.querySelector('.lightgallery'), {
        plugins: [lgZoom, lgThumbnail, lgFullscreen],
        speed: 500,
    });
}

