'use strict';

// // Успешное выполнение try
// try {
//   console.log('Normal'); // здесь код не встречает ошибок
// } catch (e) {
//   console.log('Error'); // поэтому этот участок пропускается
// }

// console.log('Still normal'); // скрипт продолжает выполняться

// // Не успешное выполнение try
// try {
//     console.log('Normal');
//     console.log(a); // здесь код встречает ошибоку - не находит переменную
//     console.log('Result'); // Этот участок кода не выполнится
// } catch (e) { // e - объект отшибки
//     console.log(e);
//     console.log('Error'); // После встречи ошибки код перейдет 
// }

// console.log('Still normal'); // скрипт продолжает выполняться


// Не успешное выполнение try и наличие finally
try {
    console.log('Normal');
    console.log(a); // здесь код встречает ошибоку - не находит переменную
    console.log('Result'); // Этот участок кода не выполнится
} catch (e) { // e - объект отшибки
    console.log(e);
    console.log('Error'); // После встречи ошибки код перейдет 
} finally {
    // выполнится в любом случаее
}

console.log('Still normal'); // скрипт продолжает выполняться