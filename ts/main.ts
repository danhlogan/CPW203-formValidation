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
    
    if(isTextPresent("first-name","First name is required") &&
    isTextPresent("last-name", "Last name is required") == true)
    {
        displayWelcome()
    }
} 

/* I did not create this function as the video instructed because I did things a little bit 
differently. Birthdate will appear below the welcome message. 
function isValidDate(input:String):boolean
{
    
} 
*/
    

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

/**
 * Displays a welcome message if user correctly inputs information
 */
function displayWelcome():void
{
    let fNameBox = <HTMLInputElement>document.getElementById("first-name")
    let fNameText = fNameBox.value

    let lNameBox = <HTMLInputElement>document.getElementById("last-name")
    let lNameText = lNameBox.value
    
    document.getElementById("welcome").innerText = "Welcome to CPTC, " + " " 
    + fNameText + " " + lNameText + "!"

    let bDayBox =  <HTMLInputElement> document.getElementById("dob")
    let bDay = bDayBox.value

    document.getElementById("dobDisplay").innerHTML = "Registered Birthday: " + bDay

    fNameBox.value = ""
    lNameBox.value = ""
}
