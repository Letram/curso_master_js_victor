//$ is the shortcut of jQuery and then between parenthesis goes he selector. In this case is the whole DOM.
$(document).ready(() => {
    console.log("We are ready!");

    /*
    ID SELECTOR
    */
    //id selector is done with "#" + id inside the parenthesis. It returns a selector with the elements that matches the predicate.
    //we can also store the value in a variable with var/let: var a = $("#blabla")
    //css method allow us to change the css property of an element for the value we want. css(key, value).
    $("#first")
        .css("background", "red")
        .css("color", "white");
    $("#second")
        .css("font-size", "3em");
    $("#third")
        .css("background", "green");

    /*
    CLASS SELECTOR
    */
    //class selector is done with "." + className inside the parenthesis. This returns an array of element that matches the predicate in the parenthesis.
    let elements = $(".zebra");
    console.log(elements[0]);
    //equivalent to array access but this way I have access to more jQuery methods.
    console.log(elements.eq(0));
    elements.css("padding", "3px");

    //we can also attach events to any element just like so:
    //NOTE: ARROW FUNCTIONS DOEST WORK IN THIS KIND OF EVENTS
    $(".no_border").click(function () {
        $(this).addClass("zebra");
    });

    /*
    LABEL SELECTOR
    */
    //label selector is done just like putting the label inside the parenthesis. This returns an array of element that matches the predicate in the parenthesis.
    let paragraphs = $("p").css("cursor", "pointer");
    paragraphs.click(function () {
        $(this).toggleClass("big");
    });

    /*
    ATTRIBUTE SELECTOR
    */
    //attribute selectors are done putting the attribute name inside brackets. This returns an array of elements.
    let aGoogle = $("[title='a_google']").css("background", "purple").css("color", "white");
    let aWikipedia = $("[title='a_wikipedia']").css("background", "red");

    /*
    FIND AND PARENT AND OTHERS
    */
    //we can select multiple things separating with commas the different predicates. This means every P or A in out web.
    $("p, a").addClass("mt-45px");

    //with selector.find we can find elements that matches the predicate inside the selector's
    //ex: find all elements with the class highlighted inside #box
    $("#box").find(".highlighted").css("background", "pink");
});
