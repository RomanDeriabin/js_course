'use strict';

// new RegExp('pattern', 'flags'); // старый способ создания регулярого выражения

// /pattern (шаблон)/f // новый способ создания регулярки



const ans = prompt('Tell me you name');

const reg = /n/ig;

//flags 
// i - что-то найти в независимости от регистра
// g- пытаемся найти все вхождения (не работает с методом search)
// m- многострочный режим

console.log(ans.search(reg)); // метод search ищет только первое совпадения и не подходит для  флага g "например в имени Ann" он не сможет найти все символы 'n', а только первый
console.log(ans.match(reg)); // подходит для поиска всех вхождений

const pass = prompt('Password');
console.log(pass.replace(/./g, '*')); // регулярка созданная прям внутри метода. Точка говорит о том, что мы используем все символы
console.log(pass.replace(/\./g, '*')); // экронирование точки
console.log(pass.replace(/\|/g, '*')); // экронирование палочки вериткальной. В общем читай про экранирование спец символов

console.log('12-34-56'.replace(/-/g, ':')); // все дифисы заменяются двоеточиями
console.log('12-34-56'.replace(/-/g, '')); // здесь все дифисы удаляться. Т.е. замены не будет из-за второго аргумента



console.log(reg.test(ans)); // смотрит есть ли совпадение по регулярке (reg) в ответе (ans). Возвращает булевое значение

// \d - ищем только цифры
// \w - все слова / буквы
// \s - все пробелы


// поиск первого числа в строке
const ans2 = prompt('Enter words and digits');
const searchFirstDigit = /\d/;
console.log(ans2.match(searchFirstDigit));

// поиск всех чисел в строке с помощью флага g
const ans3 = prompt('Enter words and digits');
const searchAllDigits = /\d/g;
console.log(ans2.match(searchAllDigits));

// поиск по шаблону(pattern), заданному в регулярке
const str = 'My na is R2D2';
console.log(str.match(/\w\d\w\d/i));

// \D - НЕ числа
// \W - НЕ буквы
// \S - НЕ пробелы