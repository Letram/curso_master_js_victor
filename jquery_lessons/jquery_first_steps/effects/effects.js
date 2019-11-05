$(document).ready(function (){
    $("#box").hide();

    /*
    $("#show_btn").click(function () {
        $("#box").show("normal");
    });
    $("#hide_btn").click(function () {
        $("#box").hide("normal");
    });
    */
    /*
    $("#show_btn").click(function () {
        $("#box").fadeIn();
    });
    $("#hide_btn").click(function () {
        $("#box").fadeOut();
    });
    */
    $("#show_btn").click(function () {
        $("#box").fadeTo("normal", 1);
    });
    $("#hide_btn").click(function () {
        $("#box").fadeTo("normal", 0);
    });
    /*
    $("#show_btn").click(function () {
        $("#box").slideDown("normal");
    });
    $("#hide_btn").click(function () {
        $("#box").slideUp("normal");
    });

     */
    $("#toggle_btn").click(function(){
        $("#box").toggle("normal");
    });
});
