"use strict";

// получение элемента по id
const box = document.getElementById('box');
console.log(box);

// получение элементов по tag. Получение всех элементов
const buttons = document.getElementsByTagName('button');
console.log(buttons);

// получение одного элемента через []
const button = document.getElementsByTagName('button');
console.log(buttons[2]);

// получение элемента по классу
const circles = document.getElementsByClassName('circle');
console.log(circles[2]);

// получение эдлементов по любому селектору. Более современный метод получения
const hearts = document.querySelectorAll('.heart'); // по классу
console.log(hearts);

// цикл для массива, полученный через querySelectorAll
hearts.forEach(item => {
    console.log(item);
});

// получение одного элемента по любому селектору
const oneHeartz = document.querySelector('.heart');
console.log(oneHeartz);