let ans=0;
let operator=undefined ;
let num = [] ;
let calc = "over" ;

const screen = document.querySelector(".screen")
function display (a) {
    screen.textContent = a ;
};

function reset() {
    ans = 0 ;
    operator = undefined ;
    num = [] ;
    calc = "over" ;
    display(ans) ;
};

reset () ;

function add (a, b) {
    if (b === undefined) {
        b = 0 ;
    };
    ans = a + b ;
    num = undefined ;
    return (ans) ;
};



