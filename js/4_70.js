'use sctrict';

const number = 1;

// создание модуля первый способ
(function() {
    const number = 2;
    console.log(number);
    console.log(number + 3);
}());

console.log(number);


// второй способ

const user = (function() {
    const privat = function() {
        console.log('I am privat');
    };
    return {
        sayHello: privat
    };
}());

user.sayHello();