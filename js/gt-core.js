function load_content(elem, url) {
    return $.ajax({
        url: url
    }).done(function (data) {
        elem.append(data);
    });
}

//function get_hot_offer(url) {
//    $.ajax({
//        url: url
//    }).done(function (data) {
//        data.replace("[]", )
//    });
//}