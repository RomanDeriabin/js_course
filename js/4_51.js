'use strict';

const persone = {
    name: 'Alex',
    tel: '+7444444',
    parents: {
        mom: 'Elena',
        dad: 'Sergey',
    }
};

console.log(JSON.stringify(persone));
console.log(JSON.parse(JSON.stringify(persone)));

// JSON.parse - парсит json в объект
// JSON.stringify - парсит объект в json

// создание глубокой копии объекта
const clonedObj = JSON.parse(JSON.stringify(persone));
console.log(clonedObj);
clonedObj.parents.mom = 'Ann';
console.log(persone);
console.log(clonedObj);