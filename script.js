const buttonValues = [
    "AC", "+/-", "%", "÷",
    "7", "8", "9", "x",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "=" 
];

const rightSymbols = ["÷", "x", "-", "+", "="];
const topSymbols = ["AC", "+/-", "%"];

for (let i = 0; i < buttonValues.length; i++) {
    //<button></button>
    let value = buttonValues[i];
    let button = document.createElement("button");
    button.innerText = value;

    //styling button colors


    if(value == "0") {
        button.style.width = "200px";
        button.style.gridColumn = "span 2";

    }

    if(rightSymbols.includes(value)){
        button.style.backgroundColor = "#D1AC00";
    }

    else if (topSymbols.includes(value)){
        button.style.backgroundColor = "#FAF4D3"
        button.style.color = "#0C1618"
    }

//add buttons to div
    document.getElementById("buttons").appendChild(button);
}


