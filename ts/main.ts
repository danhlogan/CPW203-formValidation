window.onload = function()
{
    let formButton = <HTMLElement>document.querySelector("form > button")
    formButton.onclick = main
}

function main():void
{
    resetErrorMessages()
    isTextPresent("first-name","First name is required")
    isTextPresent("last-name", "Last name is required")
}

/**
 * Resets all the spans back to the default text
 */
function resetErrorMessages():void
{
    let allSpans = document.querySelectorAll("form span")
    for(let i = 0; i < allSpans.length; i++)
    {
        let currSpan = <HTMLElement>allSpans[i]
        if(currSpan.hasAttribute("data-required"))
        {
            currSpan.innerText = "*"
        }

        else
        {
            currSpan.innerText = ""
        }
    }
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
        let errorSpan = <HTMLSpanElement>textBox.previousElementSibling
        errorSpan.innerText = errorMsg
        return false;
    }

    return true;
}
