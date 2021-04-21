"use strict";
// модификация примитива
let a = 5,
    b = a;

b = b + 5;
console.log(a);
console.log(b);

// модификация копии объекта
const obj = {
    a: 5,
    b: 1,
};

const copy = obj; // здесь передается ссылка на объект - родитель

copy.a = 10; // исходя из строки 16 модифицируется и родительский и дочерний объект

console.log(copy);
console.log(obj);

//цикл для поверхностного копирования (клонирования) объекта
function copyObj(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const aObj = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4,
    },
};

const newObj = copyObj(aObj); // Копируется верхний уровеь объекта и создается новый объект.

newObj.a = 10; // изменения нового объекта вверху не отражаются на родителе
newObj.c.x = 8; // модификация вложенного объекта влияет на родителя. Т.к. глубокие объекты все еще передаюстя по ссылке

// соединение объектов
const first = {
    d: 17,
    e: 20,
};
const second = Object.assign({}, first); // клонирование

console.log(Object.assign(first, aObj)); // слияние объекта aObj в first
console.log(first);
console.log(aObj);


// поверхностное копирование массива
const oldArr = ['a', 'b', 'c'];
const newArr = oldArr.slice();

// Spread. метод разворота  для массива

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];
const newArray = [...array]; // новая поверхностная копия массива

// Spread. метод разворота  для объекта

const q = {
    one: 1,
    two: 2,
};

const newQ = {...q };