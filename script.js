const buttonValues = [
    "AC", "+/-", "%", "÷",
    "7", "8", "9", "x",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "=" 
];

const rightSymbols = ["÷", "x", "-", "+"];
const topSymbols = ["AC", "+/-", "%"];

for(let i=0; i < buttonValues.length; i++) {
    //<button></button>
    let value = buttonValues[i];
    let button = document.createElement("button");
    button.innerText = value;
}

//add buttons to div

document.getElementById("buttons").appendChild(button);