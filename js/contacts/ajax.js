export function ajaxForm() {

    $(".form").submit(function () {
        var e = $(this);
        let t = $(".mess");
        $.ajax({
            type: "POST",
            url: "foo.php",
            data: e.serialize(),
            error: function () {
                t.html('<div class="alert alert-danger">Ошибка отправки!</div>');
            },
            success: function () {
                t.html(
                    '<div class="alert alert-success">Собщение успешно отправленно!</div>'
                ),
                    setTimeout(function () {
                        e.trigger("reset");
                    }, 2e3);
            },
        });
    })
}
