"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    },
    makeTest: function() {
        console.log('Test');
    }
};

// delete options.name;

// перебор свойств объекта
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let objKey in options[key]) {
            console.log(`Ключ(свойство) ${objKey} имеет значение ${options[key][objKey]}`);
        }
    } else {
        console.log(`Ключ(свойство) ${key} имеет значение ${options[key]}`);
    }
}

// примитивный счетчик
let counter = 0;
for (let key in options) {
    counter++;
}
console.log(counter);

// улучшенный счетчик
console.log(Object.keys(options).length);

// Запуск метода объекта options
options.makeTest();

// Деструктуризация объекта. Получение ключей - значений у подметодов
const { border, bg } = options.colors;
console.log(border);