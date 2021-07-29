var textInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");
var btnTranslate =document.querySelector("#translate-button");

var serverURL = "https://api.funtranslations.com/translate/pirate.json";

function getURl(input){
    return encodeURI(serverURL+"?"+"text="+input);
}

function clickHandler(){
    
    fetch(getURl(textInput.value))
    .then(response => response.json())
    .then(json => {txtOutput.innerText = json.contents.translated
    })
    
}



btnTranslate.addEventListener("click",clickHandler)