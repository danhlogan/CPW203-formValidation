window.onload = function () {
    var formButton = document.querySelector("form > button");
    formButton.onclick = main;
};
function main() {
    resetErrorMessages();
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");
    if (isTextPresent("first-name", "First name is required") &&
        isTextPresent("last-name", "Last name is required") == true) {
        displayWelcome();
    }
}
function resetErrorMessages() {
    var allSpans = document.querySelectorAll("form span");
    for (var i = 0; i < allSpans.length; i++) {
        var currSpan = allSpans[i];
        if (currSpan.hasAttribute("data-required")) {
            currSpan.innerText = "*";
        }
        else {
            currSpan.innerText = "";
        }
    }
}
function isTextPresent(id, errorMsg) {
    var textBox = document.getElementById(id);
    var textBoxValue = textBox.value;
    if (textBoxValue == "") {
        var errorSpan = textBox.previousElementSibling;
        errorSpan.innerText = errorMsg;
        return false;
    }
    return true;
}
function displayWelcome() {
    var fNameBox = document.getElementById("first-name");
    var fNameText = fNameBox.value;
    var lNameBox = document.getElementById("last-name");
    var lNameText = lNameBox.value;
    document.getElementById("welcome").innerText = "Welcome to CPTC, " + " "
        + fNameText + " " + lNameText + "!";
    var bDay = document.getElementById("dob").value;
    document.getElementById("dobDisplay").innerHTML = "Registered Birthday: " + bDay;
    fNameBox.value = "";
    lNameBox.value = "";
}
