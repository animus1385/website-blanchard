export function filter() {
    $(document).ready(function () {
        if ($(window).width() <= 500) {
            $('.editions__all-category--new').append($('.ed__elem-4'));
            $('.editions__elem').addClass('active-2')
            $('.ed__elem-4').removeClass('active-2');
            $('.ed__elem-4').children('.editions__elem-button').addClass('editions__elem-button--acive');
            $('#category-4').prop('checked', true);

            $('.category__list-title').click(function () {
                $('.editions h2').toggleClass('h2-active');
                $('.editions__all-category').toggleClass('active--editions__all-category');
            });

            $('body').on('click', '.active-2', function () {
                $('.editions__all-category--new').append($(this).addClass('active-elem'));
                $(this).removeClass('active-2')
                $(this).children('.editions__elem-button').addClass('editions__elem-button--acive')
                $('.category__list-title').removeClass('h2-active');
            });

            $('body').on('click', '.editions__elem-button', function () {
                let deleteElem = $(this).parent()
                if (!$('.editions__all-category').is(deleteElem)) {
                    deleteElem = deleteElem.remove()                 
                    deleteElem.addClass('active-2')     
                    $(this).removeClass('editions__elem-button--acive');
                    $('.editions__all-category').append(deleteElem.removeClass('active-elem'))
                    $('.editions__all-category input[type="checkbox"]').prop('checked', false);
                }
            })

        }

    });
    $('.editions__category').keypress(function (e) {
        if (e.keyCode == 13) {
            $(this).attr('visibility', 'inherit');
        }
    });
}
