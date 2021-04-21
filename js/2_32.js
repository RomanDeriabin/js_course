"use strict";

// console.log(document.body);
// console.log(document.head);
// console.log(document.documentElement);

// дочерние узлы
console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// // родительский узел
// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('#current').parentNode.parentNode);

// // получение cледующего соседyющего узла
// console.log(document.querySelector('[data-current]="3"').nextSibling);

// // получение предыдущего соседyющего узла
// console.log(document.querySelector('[data-current]="3"').previousSibling);


// // получение родительского элемента
// console.log(document.querySelector('#current').parentElement);

// // получение первого ребенка эелемента
// console.log(document.body.firstElementChild);

// получение всех дочерних жлементов
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text' || node.nodeName == '#comment') {
        continue;
    }
    console.log(node);
}