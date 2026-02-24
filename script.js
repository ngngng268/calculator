let ans=0 ;
let ansInput = [0, 0] ;
let operator = "" ;
let num = [] ;
let calc = "over" ;

const screen = document.querySelector(".screen")
function display (a) {
    screen.textContent = a ;
};

function reset() {
    ans = 0 ; 
    ansInput = [0, 0] ;
    operator = "" ;
    num = [] ;
    calc = "over" ;
    display(ans) ;
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
        ans = ans ;
    } else {
        ans = parseFloat(ansInput.join("")) ;
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
    return (ans) ;
};

const nine = document.querySelector(".nine") ;
nine.addEventListener("click", function(){
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
});

const eight = document.querySelector(".eight") ;
eight.addEventListener("click", function(){
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
});

const seven = document.querySelector(".seven") ;
seven.addEventListener("click", function(){
    if (calc = "over") {
        calc = "ongoing" ;
    };
    if (operator === "") {
        ansInput.push("7") ; 
        display(parseFloat(ansInput.join(""))) ;
    } else {
        num.push("8") ;
        display(parseFloat(num.join(""))) ;
    }
});
