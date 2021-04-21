"use strict";

const arr = [1, 2, 3, 6, 8];

// удаление последнего элемента
arr.pop();

// добавление элемента в конец
arr.push(10);

// Перебор элементов внутри массива через обычного цикла
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// перебор for of
for (let value of arr) {
    console.log(arr[value]);
}

// перебор forEach
arr.forEach(function(item, index, arr) {
    console.log(`${index}: ${item} внутри массива ${arr}`);
    console.log(arr[index]);
});

// split -  превращение строки в массив через разделитель
const str = prompt('', '');
const products = str.split(', ');
console.log(products);

// joint - превращение массива в строку
console.log(products.join('; '));


// сортировка sort как строка
const arrSort = [32, 4, 7, 23, 10];
arrSort.sort();

// шаблон для сортировки чисел
function compareNum(a, b) {
    return a - b;
}
arrSort.sort(compareNum);