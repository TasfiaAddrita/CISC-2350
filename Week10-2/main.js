function normal() {
    var background = document.getElementById("background-img")
    background.style.backgroundBlendMode = 'normal';
    document.getElementById("blend-text").innerHTML = "in normal, the background-color will not bleed through the background-image";
}

function multiply() {
    var background = document.getElementById("background-img")
    background.style.backgroundBlendMode = 'multiply';
    document.getElementById("blend-text").innerHTML = "in multiply, the background-image and background-color are multiplied and typically this leads to a darker image than before";
}

function screen() {
    var background = document.getElementById("background-img")
    background.style.backgroundBlendMode = 'screen';
    document.getElementById("blend-text").innerHTML = "in screen, both the image and color is inverted, multiplied, and then inverted again";
}

function overlay() {
    var background = document.getElementById("background-img")
    background.style.backgroundBlendMode = 'overlay';
    document.getElementById("blend-text").innerHTML = "in overlay, the background-color is mixed with the background-image to reflect the lightness or darkness of the backdrop";
}

function darken() {
    var background = document.getElementById("background-img")
    background.style.backgroundBlendMode = 'darken';
    document.getElementById("blend-text").innerHTML = "in darken, if the background-image is darker than the background-color then the image is replaced, otherwise it is left as it was";
}

function lighten() {
    var background = document.getElementById("background-img")
    background.style.backgroundBlendMode = 'lighten';
    document.getElementById("blend-text").innerHTML = "in lighten, if the background-image is lighter than the background-color then the image is replaced, otherwise it is left as it was";
}

function colorDodge() {
    var background = document.getElementById("background-img")
    background.style.backgroundBlendMode = 'color-dodge';
    document.getElementById("blend-text").innerHTML = "in color-dodge, the background-color is divided by the inverse of the background-image; this is very similar to the screen blend mode";
}

function colorBurn() {
    var background = document.getElementById("background-img")
    background.style.backgroundBlendMode = 'color-burn';
    document.getElementById("blend-text").innerHTML = "in color-burn, the background-color is inverted, divided by the background-image and inverted again; this is similar to multiply";
}

function hardLight() {
    var background = document.getElementById("background-img")
    background.style.backgroundBlendMode = 'hard-light';
    document.getElementById("blend-text").innerHTML = "in hard-light, if the background-image is lighter than the background-color then the result is muliply or if it is lighter then the result is screen";
}

function softLight() {
    var background = document.getElementById("background-img")
    background.style.backgroundBlendMode = 'soft-light';
    document.getElementById("blend-text").innerHTML = "in soft-light, the final result is similar to hard-light but softer in that it looks like a diffused spotlight has been placed on the image";
}

function difference() {
    var background = document.getElementById("background-img")
    background.style.backgroundBlendMode = 'difference';
    document.getElementById("blend-text").innerHTML = "in difference, the result by subtracting the darker color of the background-image and the background-color from the lightest one; often the image will have a very high contrast";
}

function exclusion() {
    var background = document.getElementById("background-img")
    background.style.backgroundBlendMode = 'exclusion';
    document.getElementById("blend-text").innerHTML = "in exclusion, the result is very similar to difference yet with a little lower contrast";
}

function hue() {
    var background = document.getElementById("background-img")
    background.style.backgroundBlendMode = 'hue';
    document.getElementById("blend-text").innerHTML = "in hue, the result is the hue of the background-image combined with the luminosity and saturation of the background-color";
}

function saturation() {
    var background = document.getElementById("background-img")
    background.style.backgroundBlendMode = 'saturation';
    document.getElementById("blend-text").innerHTML = "in saturation, keeps the saturation of the background-image whilst mixing the hue and luminosity of the background-color";
}

function color() {
    var background = document.getElementById("background-img")
    background.style.backgroundBlendMode = 'color';
    document.getElementById("blend-text").innerHTML = "in color, keeps hue and saturation of background-image and the luminosity of the background-color";
}

function luminosity() {
    var background = document.getElementById("background-img")
    background.style.backgroundBlendMode = 'luminosity';
    document.getElementById("blend-text").innerHTML = "in luminosity, luminosity of the top color is preserved whilst using the saturation and hue of the background-color";
}
