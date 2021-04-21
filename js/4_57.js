'use strict';

// filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);

// map

// const answers = ['IvAn', 'AnnA', 'Hello'];
// const result = answers.map(item => item.toLowerCase()); //можно было и { return item.toLowerCase() }

let answers = ['IvAn', 'AnnA', 'Hello'];
answers = answers.map(item => item.toLowerCase());

// some/every

const some = [4, 'qwe', 'sds'];
console.log(some.some(item => typeof(item) === 'number'));

console.log(some.every(item => typeof(item) === 'number'));

// reduce

const arr = [4, 5, 1, 6, 3, 2];
const res = arr.reduce((sum, current) => sum + current); // суммирование

const fruits = ['Apple', 'Plump', 'Wattermello', 'pear'];
const resF = fruits.reduce((sum, current) => `${sum}, ${current}`); // объединение в строку через запятую
console.log(resF);



const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal',
};

const newArr = Object.entries(obj)
    .filter(item => item[1] === 'persone') // возвращаем все что имеет persone
    .map(item => item[0]); // возвращаем только имена persone

console.log(newArr);