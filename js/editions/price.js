
export function price() {
    function prettify(num) {
        var n = num.toString();
        var separator = " ";
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator);
    }

    var $test = $(".cost-price-2");
    var val = $test.prop("value");
    $test.prop("value", prettify(val));
}