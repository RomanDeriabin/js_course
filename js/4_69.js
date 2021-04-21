'use strict';

// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function() {
//         console.log(`Имя пользователя ${this.name}, age ${userAge}`);
//     };

//     this.getAge = function() {
//         return userAge;
//     };

//     this.setAge = function(age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log('Wrong enter data!');
//         }
//     };
// }


// const ivan = new User('Ivan', 27);
// // console.log(ivan.name);
// // console.log(ivan.userAge);

// // ivan.name = 'Alex';
// // ivan.say();

// // ivan.userAge = 35;
// // ivan.say();

// console.log(ivan.getAge());
// ivan.setAge(35);
// ivan.setAge(300);
// console.log(ivan.getAge());
// ivan.say();

// Class

// class User {

//     constructor(name, age) {
//         this.name = name;
//         this._age = age;
//     }

//     say() {
//         console.log(`Имя пользователя ${this.name}, age ${this._age}`);
//     }

//     get age() {
//         return this._age;
//     }

//     set age(age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             this._age = age;
//         } else {
//             console.log('Wrong enter data!');
//         }
//     }
// }


// const ivan = new User('Ivan', 27);
// console.log(ivan.age);
// ivan.age = 99;
// console.log(ivan.age);
// ivan.say();


// experemental
// class User {

//     constructor(name, age) {
//         this.name = name;
//         this._age = age;
//     }

//     #surname = 'Deriabin';

//     say = () => {
//         console.log(`Имя пользователя ${this.name} ${this.#surname}, age ${this._age}`);
//     }

//     get age() {
//         return this._age;
//     }

//     set age(age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             this._age = age;
//         } else {
//             console.log('Wrong enter data!');
//         }
//     }
// }


// const ivan = new User('Ivan', 27);
// console.log(ivan.age);
// ivan.age = 99;
// console.log(ivan.age);
// ivan.say();