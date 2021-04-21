"use strict";

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

// добавление инлайн стилей 
box.style.backgroundColor = 'blue';
box.style.width = '500px';


// Добавление для конкретного элемента из псевдомассива элементов
btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// добавление инлайн css стилей группой
box.style.cssText = 'background-color: blue; width: 400px';

// Добавление инлайн стилей через цикл для всех элементов в псевдомассиве
for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'green';
}

// Добавление инлайн стилей для псевдомассива через forEach для querySelectorAll
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

// создание элемента

// создание элемента в js коде
const divOne = document.createElement('div');

// Добавление элементу класс из css стилей
div.classList.add('black');

// добавление жлемента на страницу
document.body.append(div);
wrapper.append(div);
wrapper.prepend(div);

hearts[1].before(div);
hearts[1].after(div);

// Удаление элемента
circles[0].remove();

// замена элемента
hearts[0].replaceWith(circles[1]);

// создание текстового узла без html кода
const text = document.createTextNode('Тут был я');

// создание html структуры внутрь элемента
div.innerHTML = '<h1>Hello world</h1>';


div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');