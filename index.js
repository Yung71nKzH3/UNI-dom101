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

//Question 5
function setClass(elem, str){
    elem.className = str;
    return elem;
}

//Question 6
function addAClass(elem, str){
    elem.classList.add(str);
    return elem;
}

//Question 7
function removeAClass(elem, str){
    elem.classList.remove(str);
    return elem;
}

//Question 8
function newElement(name){
    return document.createElement(name);
}

//Question 9
function findElementById(id){
    return document.querySelector(`#${id}`);
}

//Question 10
function findElementsByQuery(query){
    return document.querySelectorAll(query)
}

//Question 11
function reverseList(query){
    const list = document.querySelector(query);
    const items = Array.from(list.children);
    items.reverse();
    items.forEach(item => list.appendChild(item));
    return list;
}

//Question 12
function mover(moveThis, appendToThis) {
    const elementToMove = document.querySelector(moveThis);
    const target = document.querySelector(appendToThis);
    target.appendChild(elementToMove);
    return target;
}

//Question 13
function filler(list, candidates) {
    candidates.forEach(str => {
        const li = document.createElement("li");
        li.textContent = str;
        list.appendChild(li);
    });
    return list;
}

//Question 14
function dupe(selector) {
    const original = document.querySelector(selector);
    const copy = original.cloneNode(true);
    original.parentNode.appendChild(copy);
    return original;
}

