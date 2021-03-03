"use strict";

let num = 50;
let num1 = 50;


// проверь -> сделай ????
while (num <= 55) {
    console.log(num);
    num++;
}
console.log('');

// сделай -> проверь ????
do {
    console.log(num1);
    num1++;
}
while (num1 <= 55);

// for
for (let i = 1; i < 8; i++) {
    console.log(i);
}

// принудительный выход из цикла
for (let i = 1; i < 8; i++) {
    if (i == 3) {
        break;
    }
    console.log(i);
}

// пропуск прохода в цикле
for (let i = 1; i < 8; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}