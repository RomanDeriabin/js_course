"use strict";

const btn = document.querySelector('button');
const btns = document.querySelectorAll('button');

// старые способы

// btn.onclick = function() {
//     alert('Click');
// };

// btn.onclick = function() { // Второй обработчик заменяет собой первый обработчик
//     alert('Second Click');
// };



// Новые способы

// btn.addEventListener('click', () => {
//     alert('This is click');
// });

// btn.addEventListener('click', () => {
//     alert('This is second click');
// });

// Наведение мыши
// btn.addEventListener('mouseenter', () => {
//     console.log('Hover');
// });

// узнать информацию о собитии над элементом
// btn.addEventListener('mouseenter', (e) => {
//     console.log(e.type);
//     console.log(e.target);
//     e.target.remove(); // удаление элемента
// });


// удаление обработчика после выполнения функции
let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);

// всплытие события
// const overlay = document.querySelector('.overlay');

// btn.addEventListener('click', (e) => {
//     console.log(e.target);
// });
// overlay.addEventListener('click', (e) => {
//     console.log(e.currentTarget);
// });

// отмена стандартных поведений 
// const linkToYouTube = document.querySelector('a');

// linkToYouTube.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(e.target);
// });

// Повешать обработчик на группу элементов
btns.forEach(btn => {
    btn.addEventListener('click', deleteElement);
});