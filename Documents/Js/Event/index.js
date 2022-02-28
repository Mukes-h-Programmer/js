// Events in JavaScript

// function clicked() {
//     console.log("The button was clicked");
// }
// window.onload = function () {
//     console.log("The document was loaded.");
// }

// firstContainer.addEventListener('click', function()
// {
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked.</b>"
//     console.log("clicked in.")
// })

// firstContainer.addEventListener('mouseover', function () {
//     console.log("Mouse over.")
// })
// firstContainer.addEventListener('mouseout', function () {
//     console.log("Mouse out.")
// })
let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
firstContainer.addEventListener('mouseup', function () {
    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
    console.log("Mouse up.")
})
firstContainer.addEventListener('mousedown', function () {
   
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked.</b>"
    console.log("Mouse down.")
})
