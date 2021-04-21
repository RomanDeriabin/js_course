"use strict";

const soldier = { // объект - прототип
    health: 400,
    aromor: 100,
    sayHello: function() {
        console.log('Hello');
    },
};

const john = { // объект
    health: 100,
};

const alex = Object.create(soldier); // создание нового экземпляра объекта используя в качестве прототипа soldier

// john.__proto__ = soldier; // устаревший способ задачи прототипа для Джона
//john.sayHello();

// Новые способы

Object.setPrototypeOf(john, soldier);
john.sayHello();