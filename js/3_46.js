'use strict';

function showThis() {
    console.log(this);
}

showThis();

// 1) при использовании use ctrict this выведет undefined. Без use strict выведет объект window

function showThisA(a, b) {
    console.log(this);

    function sum() {
        console.log(this);
        return this.a + this.b
    }
    console.log(sum());
}
showThisA(4, 5);

//


const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
    }
};
obj.sum();

// Контекст у метода объектов - сам объект