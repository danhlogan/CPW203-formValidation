window.onload = function () {
    var formButton = document.querySelector("form > button");
    formButton.onclick = main;
};
function main() {
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");
}
function isTextPresent(id, errorMsg) {
    var textBox = document.getElementById(id);
    var textBoxValue = textBox.value;
    if (textBoxValue == "") {
        var errorSpan = textBox.nextElementSibling;
        errorSpan.innerText = errorMsg;
        return false;
    }
    return true;
}
