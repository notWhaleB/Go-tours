//var hot_offer_small_template;

function general_init() {

    footer_wave_init();

    $('ul.tabs').tabs();


    $("#gt-navigator").pushpin({
        top: $("nav").height()
    });

    $(".slider").slider({
        full_width: true
    });

    $("#button-up").click(function () {
        $('html, body').animate({scrollTop: 0}, "normal", "swing");
    });
}

function footer_wave_init() {
    var wave_width = Math.max($("html").width(), 1500);
    for (i = -1; i * 60 <= wave_width; ++i) {
        $("#gt-wave-svg").append('<use x="' + 60 * i + '" y="0" xlink:href="#wave-blue"/>');
    }

    var tjq = $("#gt-wave");
    tjq.html(tjq.html());
}