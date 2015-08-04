$(document).ready(function() {
    load_content($("header"), "data/header.html").then(
        load_content($("main"), "data/startpage.html").then(
            load_content($("footer"), "data/footer.html").then(
                function() {
                    general_init();
                    setTimeout(function() {
                        $("#yamp-module").append($("#yamp-container").detach());
                    }, 500);
                    setTimeout(function() {
                        VK.Widgets.Group("vk_groups", {mode: 0, width: "auto", height: "400", color1: '#ffffff', color2: '#404040', color3: '#03a9f4'}, 964559);
                    }, 500);
                }
            )
        )
    );
});