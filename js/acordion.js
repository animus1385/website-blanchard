window.addEventListener('DOMContentLoaded', function () {

    $(".history__button").click(function () {
        $(this).next('.slide__active').slideToggle();
        // $(this).next('.history__period').classList.toggle('border_active');
    })
  
});
