$(document).ready(function () {
    $("#add_btn")
        .removeAttr("disabled")
        .click(function () {
            let link = $("#add_link").val();
            let a = $(`<a href="${link}"></a>`);
            let li = $("<li></li>");
            li.append(a);
            $("ul:first").append(li);
            reloadLinks();
            $("#add_link").val("");
        });

    reloadLinks();
});

function reloadLinks() {
    let links = $("a");
    links.each(function (index, element) {
        $(this).text($(this).attr("href"));
        $(this).attr("target", "_blank");
    });
}
