// when user types in something in the input text area, the header will immediately update
// with the content the user typed in
function displayh1() {
    header = document.getElementById('header1');
    userVal = document.getElementById('input').value;
    header.innerHTML = userVal;
}

// when the user clicks on the header/content they wrote, the color of the text and border will automatically
// change to a random color
function changeColor() {
    div = document.getElementById('content');
    header = document.getElementById('header1');
    color = randomColor();
    header.style.color = color;
    div.style.borderColor = color;
}

// generate a random color
function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
