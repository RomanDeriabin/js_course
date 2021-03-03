"use strict";

if (2 == 4) {
    console.log('Ok');
} else {
    console.log('Not Ok');
}


// Простые ветвления
const num = 50;
if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('too much');
} else {
    console.log('Ok');
}

// Тернарный оператор
(num == 50) ? console.log('Ternarn ok!'): console.log('Error');

// Улучшенные ветвления
const number = 23;

switch (number) { // нет верных значений
    case 48:
        console.log('Это 48');
        break;
    case 49:
        console.log('Это 49');
        break;
    case 50:
        console.log('Это 50');
        break;
    default: // дефолтное так как нет верного
        console.log('Неудача');
        break;
}

switch (number) {
    case 48:
        console.log('Это 48');
        break;
    case 23: // верное
        console.log('Это 23');
        break;
    default: // дефолтное, если не было бы верного
        console.log('Неудача');
        break;
}