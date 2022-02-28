// Arrow Functions

// function sum(a, b){
// return a+b;    
// }
sum = (a, b) => {
    return a+b;
}

// setTimeout and setInterval

mukesh = ()=> {
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired </b>"
    console.log("I am your log");
}

// setTimeout(mukesh, 3000);

// setInterval(mukesh, 2000);

clr = setInterval(mukesh, 2000);

// Use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

