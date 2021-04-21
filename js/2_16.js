"use strict";

let num = 20;
// function declaration
function showFirstMessage() {
    console.log('Hello!');
}
showFirstMessage();

function showMessageFromArgument(text) {
    console.log(text);
}
showMessageFromArgument('This is Argument');

function second(arg) {
    console.log(arg);
}
second(num);

function third(arg) {
    let num = 10;
    console.log(num);
}
third(num);

function calc(a, b) {
    return (a + b);
}
console.log(calc(2, 3));

function ret() {
    let num = 50;
    return num;
}
const anotherNum = ret();
console.log(anotherNum);


// function expression
let logger = function() {
    console.log('Heelo');
};
logger();


// Стрелочные функции
let calc = (a, b) => {
    console.log('1');
    return a + b;
};
console.log(calc(2, 3));