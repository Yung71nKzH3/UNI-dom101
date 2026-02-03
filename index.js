/*
 * This is index.js
 * Open index.html in your browser to check what
 * you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

//Question 1
function replaceText(elem, str) {
    elem.textContent = str;
}

//Question 2
function addTextTo(elem, str) {
    elem.textContent += str;
}

//Question 3
function moreBears() {
    let elem = document.getElementById("animals")
    elem.src = "http://placebear.com/400/200"
    elem.alt = "A bear."
    elem.title = "A BEAR!"
}

//Question 4
function setId(elem, str) {
    elem.id = str;
    return elem;
}
