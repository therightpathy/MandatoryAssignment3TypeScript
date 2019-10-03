let inputElement = document.getElementById("wordInput");
let dropdownELement = document.getElementById("dropdownElement")
let outputElement = document.getElementById("wordOutput");
let chooseButton = document.getElementById("chooseButton");
let inputString = "";
chooseButton.addEventListener("click", callSwitch);
inputElement.addEventListener("change", refreshString);


function refreshString() {
    inputString = inputElement.value;
}


function callSwitch() {
switch (dropdownELement.value) {
    case "Count":
        Count();
        break;
    
    case "Upper":
        UpperCase();
        break;

    case "Lower":
        LowerCase();
        break;
        
        default:
            break;
 }
}

 function Count() {
     outputElement.innerHTML = inputElement.value.length.toString();
 }

function UpperCase() {
    outputElement.innerHTML = inputString.toUpperCase();
}

function LowerCase() {
    outputElement.innerHTML = inputString.toLowerCase();
}