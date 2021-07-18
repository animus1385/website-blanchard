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