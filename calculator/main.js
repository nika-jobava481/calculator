var theme = "light";
var themeChanger = document.querySelector("#theme");
var numberButtons = document.querySelectorAll(".num__key");
var addsOpButtons = document.querySelectorAll(".addsOp");
var body = document.querySelector("body");
var calculator = document.querySelector("#calculator");
var keyboard = document.querySelector("#keyboard");
var main = document.querySelector("main");
var spans = document.querySelectorAll("span");

var calculationArea = document.querySelector("#paragraph");

var negateBtn = document.querySelector("#negate");
var backspaceBtn = document.querySelector("#backspace");
var modulusBtn = document.querySelector("#modulus");
var divisionBtn = document.querySelector("#division");
var multiplicationBtn = document.querySelector("#multiplication");
var subtractionBtn = document.querySelector("#subtraction");
var additionBtn = document.querySelector("#addition");
var dotBtn = document.querySelector("#dot");


var clearBtn = document.querySelector("#clear");

var equalityBtn = document.querySelector("#equality");

var allButtons = document.querySelectorAll("button");

var icon = document.querySelector(".fa-lightbulb");


for (var i = 0; i < addsOpButtons.length; i++) {
    addsOpButtons[i].addEventListener("click", function () {
        if (!calculationAreaIsFilledWithZero()) {
            if (lastCharacterIsOperator()) {
                backspaceFunction();
            }
            calculationArea.textContent += this.textContent;
        }
    });
}


for (var i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", function () {
        if(calculationAreaIsFilledWithZero()){
            calculationArea.textContent = "";
        }
        calculationArea.textContent += this.textContent;
    });
}


negateBtn.addEventListener("click", function () {
    negationFunction();
});

backspaceBtn.addEventListener("click", function () {
    backspaceFunction();
});

equalityBtn.addEventListener("click", function () {
    equalityFunction();
});

clearBtn.addEventListener("click", function () {
    if (!calculationAreaIsFilledWithZero()) {
        clearFunction();
    }
});



themeChanger.addEventListener("click", function () {
    themeChangerFunction();
});


document.addEventListener("keydown", function (e) {
    if (e.keyCode == 48) {
        if (calculationAreaIsFilledWithZero()) {
            calculationArea.textContent = "";
        }
        calculationArea.textContent += 0;
    } else if (e.keyCode == 49) {
        if (calculationAreaIsFilledWithZero()) {
            calculationArea.textContent = "";
        }
        calculationArea.textContent += 1;
    } else if (e.keyCode == 50) {
        if (calculationAreaIsFilledWithZero()) {
            calculationArea.textContent = "";
        }
        calculationArea.textContent += 2;
    } else if (e.keyCode == 51) {
        if (calculationAreaIsFilledWithZero()) {
            calculationArea.textContent = "";
        }
        calculationArea.textContent += 3;
    } else if (e.keyCode == 52) {
        if (calculationAreaIsFilledWithZero()) {
            calculationArea.textContent = "";
        }
        calculationArea.textContent += 4;
    } else if (e.keyCode == 53) {
        if (calculationAreaIsFilledWithZero()) {
            calculationArea.textContent = "";
        }
        calculationArea.textContent += 5;
    } else if (e.keyCode == 54) {
        if (calculationAreaIsFilledWithZero()) {
            calculationArea.textContent = "";
        }
        calculationArea.textContent += 6;
    } else if (e.keyCode == 55) {
        if (calculationAreaIsFilledWithZero()) {
            calculationArea.textContent = "";
        }
        calculationArea.textContent += 7;
    } else if (e.keyCode == 56) {
        if (calculationAreaIsFilledWithZero()) {
            calculationArea.textContent = "";
        }
        calculationArea.textContent += 8;
    } else if (e.keyCode == 57) {
        if (calculationAreaIsFilledWithZero()) {
            calculationArea.textContent = "";
        }
        calculationArea.textContent += 9;
    } else if (e.keyCode == 187 || e.keyCode == 13) {
        equalityFunction();
    } else if (e.keyCode == 99 || e.keyCode == 67) {
        if (calculationAreaIsFilledWithZero()) {
            clearFunction();
        }
    } else if (e.keyCode == 9) {
        themeChangerFunction();
    } else if (e.keyCode == 8) {
        if (calculationAreaIsFilledWithZero()) {
            backspaceFunction();
        }
    }
});



function backspaceFunction() {
    if (!calculationAreaIsFilledWithZero()) {
        calculationArea.textContent = calculationArea.textContent.slice(0, -1);
    }
}

function negationFunction() {
    if (lastCharacterIsOperator()) {
        backspaceFunction();
    }
    var temp = calculationArea.textContent;
    calculationArea.textContent = eval(temp - 2 * temp);

}



function lastCharacterIsOperator() {
    var temp = calculationArea.textContent;
    if (temp[temp.length - 1] == "/" || temp[temp.length - 1] == "." || temp[temp.length - 1] == "+" || temp[temp.length - 1] == "-" || temp[temp.length - 1] == "%" || temp[temp.length - 1] == "*") {
        return true;
    } else {
        return false;
    }
}

function clearFunction() {
    if (!calculationAreaIsFilledWithZero()) {
        calculationArea.textContent = 0;
    }
}

function calculationAreaIsFilledWithZero() {
    if (calculationArea.textContent == 0) {
        return true;
    } else {
        return false;
    }
}



function equalityFunction() {
    if (!calculationAreaIsFilledWithZero()) {
        if (lastCharacterIsOperator()) {
            backspaceFunction();
        }
        calculationArea.textContent = eval(calculationArea.textContent);
    }
}



function themeChangerFunction() {
    if (theme == "light") {
        body.classList.remove("light");
        body.classList.add("dark");
        icon.classList.remove("far");
        icon.classList.add("fas");

        theme = "dark";
    } else {
        body.classList.remove("dark");
        body.classList.add("light");
        icon.classList.remove("fas");
        icon.classList.add("far");

        theme = "light";
    }
}
