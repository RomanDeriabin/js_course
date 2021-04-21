'use strict';

// let number = 7;

// function ShowPrime(num) {
//     for (let i = 2; i < num; i++) {
//         if (!isPrime(i)) { // ожидаем, что isPrime(i) == false. Если это так, то условие будет true
//             continue;
//         }
//         console.log('Prime ' + i);
//     }

// }

// function isPrime(num) {
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }

// ShowPrime(number);


function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
);