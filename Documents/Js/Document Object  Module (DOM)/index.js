// DOM Manipulation

let  elem = document.getElementById('click');

console.log(elem);

let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);
// elemClass[0].style.background = "red";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
elemClass[0].classList.remove("text-success");

console.log(elem.innerHTML);
console.log(elem.innerText);

console.log(elemClass[0].innerHTML);
console.log(elemClass[0].innerText);

// tn = document.getElementsByTagName('button');

// console.log(tn);

tn = document.getElementsByTagName('div');

console.log(tn);
createElement = document.createElement('p');
createElement.innerText = "This is a created Para";
tn[0].appendChild(createElement);

createElement2 = document.createElement('b');
createElement2.innerText = "This is a created Para by Mukesh";
tn[0].replaceChild(createElement2, createElement);

//removeChild(element); ---> removes an element.

//Selecting using Query

// sel = document.querySelector('.container');
// console.log(sel);


sel = document.querySelectorAll('.container');
console.log(sel);