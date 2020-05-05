window.onload = function()
{
    let formButton = <HTMLElement>document.querySelector("form > button")
    formButton.onclick = main
}

function main():void
{
    isTextPresent("first-name","First name is required")
    isTextPresent("last-name", "Last name is required")
}

/**
 * Returns true if the textbox with the given id has some text inside it 
 * @param id The id of the <input type ="text"> to validate
 * @param errorMsg The message to display in the sibling span of the text box
 */
function isTextPresent(id: string, errorMsg: string):boolean
{
    let textBox = <HTMLInputElement>document.getElementById(id)
    let textBoxValue = textBox.value

    if (textBoxValue == "") 
    {
        let errorSpan = <HTMLSpanElement>textBox.nextElementSibling
        errorSpan.innerText = errorMsg
        return false;
    }

    return true;
}
