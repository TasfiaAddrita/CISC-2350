$(document).ready(function() {

    $(document).mousemove(function(event) {
        $(".circle").css("left", event.clientX);
        $(".circle").css("top", event.clientY);
    })

    $("nav li a:lt(2)").click(function() {
        if ($(window).width() > 480) {
           $("#landing").css("width", "35%");
        }
        else {
           $("#landing").css("width", "100%");
        }
        $("nav li a").css("color", "black");
        $(".right-panel").css("display", "flex");
    })

    $("#landing h1").click(function() {
        $("#landing").css("width", "100%");
        $("nav li a").css("color", "white");
        $(".right-panel").css("display", "none");
        $(".circle").css("display", "block");
    })

    $("#nav-about").click(function() {
        $("#about").css("display", "flex");
        $("#projects").css("display", "none");
        $(".circle").css("display", "none");
    })

    $("#nav-projects").click(function() {
        $("#projects").css("display", "flex");
        $("#about").css("display", "none");
    })

    $("#nav-contact").click(function() {
        $("#contact").toggle();
    })

    $("#experience-header").click(function() {
        $("#experience-box").toggle();
    })

    $("#leadership-header").click(function() {
        $("#leadership-box").toggle();
    })

    $("#skills-header").click(function() {
        $("#skills-box").toggle();
    })
});
