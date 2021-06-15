function show(display) {
    var myText = document.getElementsByTagName('input');
    myText[0].value = myText[0].value + display;
}

function clean() {
    var text = document.getElementsByTagName('input')
    text[0].value = " ";
}

function backspace() {
    var text = document.getElementById('showtext').value;
    document.getElementById('showtext').value = text.substring(0, text.length - 1);
}
document.getElementsByClassName("mydiv")[0].style.backgroundImage = "url('waterfall.jpeg')";
document.getElementsByClassName("container")[0].style.backgroundImage = "url('nature.jpg')";

function showResult() {
    var exp = document.getElementById("showtext").value;
    var result = eval(exp);
    document.getElementById("showtext").value = result;
}