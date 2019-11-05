$(document).ready(function () {
    let box = $("#box");

    /*
    Mouse events
     */

    /*
    box.mouseover(function (){
        $(this)
            .css("background", "red")
    });
    box.mouseout(function(){
        $(this)
            .css("background", "teal")
    });
    */

    /*
    Hover events
     */
    //all above is equivalent to:
    let mOver = function () {
        $(this)
            .css("background", "red")
    };
    let mOut = function () {
        $(this).css("background", "teal")
    };
    box.hover(mOver, mOut);
    //and this is better because we do this in just one method.

    /*
    Click events
     */
    box.click(function () {
        $(this).css("background", "blue")
    });
    box.dblclick(function () {
        $(this).css("background", "pink")
    });

    /*
    Blur and Focus events
     */
    let input = $("#form_input");
    input.focus(function () {
        $(this).css("border", "2px solid green");
    });
    input.blur(function () {
        console.log($(this).val());
        $(this).css("border", "1px solid black");
    });

    /*
    Mouse up, Mouse down, Mouse move
     */
    box.mousedown(function () {
        $(this).css("width", "40em");
    });
    box.mouseup(function () {
        $(this).css("width", "25em");
    })

    $(document).mousemove(function (event) {
        let coord = {};
        coord.x = event.clientX;
        coord.y = event.clientY;
        console.log({coord});
        $("#follow_me")
            .css("left", coord.x)
            .css("top", coord.y);
    });
});
