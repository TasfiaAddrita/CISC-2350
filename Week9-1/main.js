function showStatic() {
    var staticPosition = document.getElementById("static");
    var absolutePosition = document.getElementById("absolute");
    var relativePosition = document.getElementById("relative");
    var fixedPosition = document.getElementById("fixed");

    staticPosition.style.display = "block";
    absolutePosition.style.display = "none";
    relativePosition.style.display = "none";
    fixedPosition.style.display = "none";
}

function showAbsolute() {
    var staticPosition = document.getElementById("static");
    var absolutePosition = document.getElementById("absolute");
    var relativePosition = document.getElementById("relative");
    var fixedPosition = document.getElementById("fixed");

    staticPosition.style.display = "none";
    absolutePosition.style.display = "block";
    relativePosition.style.display = "none";
    fixedPosition.style.display = "none";
}

function showRelative() {
    var staticPosition = document.getElementById("static");
    var absolutePosition = document.getElementById("absolute");
    var relativePosition = document.getElementById("relative");
    var fixedPosition = document.getElementById("fixed");

    staticPosition.style.display = "none";
    absolutePosition.style.display = "none";
    relativePosition.style.display = "block";
    fixedPosition.style.display = "none";
}

function showFixed() {
    var staticPosition = document.getElementById("static");
    var absolutePosition = document.getElementById("absolute");
    var relativePosition = document.getElementById("relative");
    var fixedPosition = document.getElementById("fixed");

    staticPosition.style.display = "none";
    absolutePosition.style.display = "none";
    relativePosition.style.display = "none";
    fixedPosition.style.display = "block";
}
