let ans=0 ;
let ansInput = [0, 0] ;
let operator = "" ;
let num = [] ;
let calc = "over" ;

const plusBtn = document.querySelector(".plus") ;
const minusBtn = document.querySelector(".minus") ;
const multiplyBtn = document.querySelector(".multiply") ;
const divideBtn = document.querySelector(".divide") ;
const operatorArr = [plusBtn, minusBtn, multiplyBtn, divideBtn] ;

const screen = document.querySelector(".screen")
function display (a) {
    if (a === ans) {
        screen.textContent = (
            new Intl.NumberFormat("en-EN", { maximumSignificantDigits: 12 , maximumFractionDigits: 10 }).format(a)
    ) ;} else {
        screen.textContent = (
            new Intl.NumberFormat("en-EN", {maximumFractionDigits: 20 }).format(a)
    )};
};

function reset() {
    ans = 0 ; 
    ansInput = [0, 0] ;
    operator = "" ;
    num = [] ;
    calc = "over" ;
    display(ans) ;
    operatorArr.map((btn) => (
        btn.style.cssText = "background-color : rgb(255, 255, 255) ; color : rgb(76, 89, 209)"
    )) ;
};

reset () ;

function add (a, b) {
    if (b === NaN) {
        b = 0 ;
    };
    ans = a + b ;
    return (ans) ;
};

function subtract (a, b) {
    if (b === NaN) {
        b = 0
    };
    ans = a - b ;
    return (ans) ;
};

function multiply (a, b) {
    if (b === NaN) {
        b = 1
    };
    ans = a * b ;
    return (ans) ;
};

function divide (a, b) {
    if (b === 0) {
        return ("You cannot divide by 0.")
    }
    else { 
        if (b === NaN) {
            b = 1
        };
        ans = a / b ;
        return (ans) ;
    };
};

function operate () {
    num = parseFloat(num.join("")) ;
    if ((num === NaN) || (operator === "")) {
        if (ansInput.length >= 3) {
            ans = parseFloat(ansInput.join(""))
        } ;
    } else {
        if (ansInput.length >= 3) {
            ans = parseFloat(ansInput.join(""))
        } ;
        if (operator = "plus") {
            ans = add(ans, num);
        } else if (operator = "minus") {
            ans = subtract(ans, num);
        } else if (operator = "multiply") {
            ans = multiply(ans, num);
        } else if (operator = "divide") {
            ans = divide(ans, num);
        } ;
    } ;
    display (ans) ;
    num = [] ;
    operator = "" ;
    ansInput = [0, 0] ;
    calc = "over" ;
    operatorArr.map((btn) => (
        btn.style.cssText = "background-color : rgb(255, 255, 255) ; color : rgb(76, 89, 209)"
    )) ;
    return (ans) ;
};

function inputNine () {
    if (calc = "over") {
        calc = "ongoing" ;
    };
    if (operator === "") {
        ansInput.push("9") ; 
        display(parseFloat(ansInput.join(""))) ;
    } else {
        num.push("9") ;
        display(parseFloat(num.join(""))) ;
    }
};
const nine = document.querySelector(".nine") ;
nine.addEventListener("click", inputNine);

function inputEight () {
    if (calc = "over") {
        calc = "ongoing" ;
    };
    if (operator === "") {
        ansInput.push("8") ; 
        display(parseFloat(ansInput.join(""))) ;
    } else {
        num.push("8") ;
        display(parseFloat(num.join(""))) ;
    }
};
const eight = document.querySelector(".eight") ;
eight.addEventListener("click", inputEight);

function inputSeven () {
    if (calc = "over") {
        calc = "ongoing" ;
    };
    if (operator === "") {
        ansInput.push("7") ; 
        display(parseFloat(ansInput.join(""))) ;
    } else {
        num.push("7") ;
        display(parseFloat(num.join(""))) ;
    }
};
const seven = document.querySelector(".seven") ;
seven.addEventListener("click", inputSeven);

function inputSix () {
    if (calc = "over") {
        calc = "ongoing" ;
    };
    if (operator === "") {
        ansInput.push("6") ; 
        display(parseFloat(ansInput.join(""))) ;
    } else {
        num.push("6") ;
        display(parseFloat(num.join(""))) ;
    }
};
const six = document.querySelector(".six") ;
six.addEventListener("click", inputSix);

function inputFive () {
    if (calc = "over") {
        calc = "ongoing" ;
    };
    if (operator === "") {
        ansInput.push("5") ; 
        display(parseFloat(ansInput.join(""))) ;
    } else {
        num.push("5") ;
        display(parseFloat(num.join(""))) ;
    }
};
const five = document.querySelector(".five") ;
five.addEventListener("click", inputFive);

function inputFour () {
    if (calc = "over") {
        calc = "ongoing" ;
    };
    if (operator === "") {
        ansInput.push("4") ; 
        display(parseFloat(ansInput.join(""))) ;
    } else {
        num.push("4") ;
        display(parseFloat(num.join(""))) ;
    }
};
const four = document.querySelector(".four") ;
four.addEventListener("click", inputFour);

function inputThree () {
    if (calc = "over") {
        calc = "ongoing" ;
    };
    if (operator === "") {
        ansInput.push("3") ; 
        display(parseFloat(ansInput.join(""))) ;
    } else {
        num.push("3") ;
        display(parseFloat(num.join(""))) ;
    }
};
const three = document.querySelector(".three") ;
three.addEventListener("click", inputThree);

function inputTwo () {
    if (calc = "over") {
        calc = "ongoing" ;
    };
    if (operator === "") {
        ansInput.push("2") ; 
        display(parseFloat(ansInput.join(""))) ;
    } else {
        num.push("2") ;
        display(parseFloat(num.join(""))) ;
    }
};
const two = document.querySelector(".two") ;
two.addEventListener("click", inputTwo);

function inputOne () {
    if (calc = "over") {
        calc = "ongoing" ;
    };
    if (operator === "") {
        ansInput.push("1") ; 
        display(parseFloat(ansInput.join(""))) ;
    } else {
        num.push("1") ;
        display(parseFloat(num.join(""))) ;
    }
};
const one = document.querySelector(".one") ;
one.addEventListener("click", inputOne);

function inputZero () {
    if (calc = "over") {
        calc = "ongoing" ;
    };
    if (operator === "") {
        ansInput.push("0") ; 
        display(parseFloat(ansInput.join(""))) ;
    } else {
        num.push("0") ;
        display(parseFloat(num.join(""))) ;
    }
};
const zero = document.querySelector(".zero") ;
zero.addEventListener("click", inputZero);

function inputDecimalSeparator () {
    if (calc = "over") {
        calc = "ongoing" ;
    };
    if ((operator === "") && (ansInput.includes(".") === false)) {
        ansInput.push(".") ; 
        display(parseFloat(ansInput.join(""))) ;
    } else if ((operator !== "") && (num.includes(".") === false)) {
        num.push(".") ;
        display(parseFloat(num.join(""))) ;
    }
};
const decimalSeparator = document.querySelector(".decimalSeparator") ;
decimalSeparator.addEventListener("click", inputDecimalSeparator);

function pressedBtn () {
    EventTarget.style.cssText = "background : rgb(76, 89, 209) ; color : rgb(255, 255, 255)"
};

const equalBtn = document.querySelector(".equalBtn") ;
equalBtn.addEventListener("click", operate);
