window.onload = function()
{
    let formButton = <HTMLElement>document.querySelector("form > button")
    formButton.onclick = main
}

function main():void
{
    alert("SUCCESS")
}