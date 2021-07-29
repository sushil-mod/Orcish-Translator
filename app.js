var textInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");
var btnTranslate =document.querySelector("#translate-button");

var serverURL = "https://api.funtranslations.com/translate/orcish.json";

btnTranslate.addEventListener("click",clickHandler)

function clickHandler(){

    fetch(getURl(textInput.value))
    .then(response => response.json())
    .then(json => {txtOutput.innerText = json.contents.translated})

}

function getURl(input){
    return serverURL + "?" + "text=" + input;
}
