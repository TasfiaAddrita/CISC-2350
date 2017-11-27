$(document).ready(function() {
    $("nav li a:lt(2)").click(function() {
        $("#landing").css("width", "35%");
        $("nav li a").css("color", "black");
        // $(this).css("text-decoration", "underline");
        $(".right-panel").css("display", "flex");
        // $(this).css("display", "inline");
    })

    $("#landing h1").click(function() {
        $("#landing").css("width", "100%");
        $("nav li a").css("color", "white");
        $(".right-panel").css("display", "none");
    })

    $("#nav-about").click(function() {
        $("#about").css("display", "flex");
        $("#projects").css("display", "none");
        // $("#contact").css("display", "none");
    })

    $("#nav-projects").click(function() {
        $("#projects").css("display", "flex");
        $("#about").css("display", "none");
        // $("#contact").css("display", "none");
    })

    $("#nav-contact").click(function() {
        $("#contact").toggle();
        // $("#contact").css("display", "block");
        // $("#about").css("display", "none");
        // $("#projects").css("display", "none");
    })

    // $("#nav-contact").toggle();

    // $("#about").click(function() {
    //
    // })

    // $('a[href$="#about"]').click(function() {
    //     $("#about").css("display", "flex");
    //})
});
