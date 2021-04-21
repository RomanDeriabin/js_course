'use strict';

localStorage.setItem('number', 5);

localStorage.getItem('number');

localStorage.removeItem('number');

// localStorage.setItem('number', 2);
// localStorage.clear();


const checkbox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    change = document.querySelector('#color');

if (localStorage.getItem('isChecked') == 'true') {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') == 'changed') {
    form.style.backgroundColor = 'red';
}


checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});


const persone = {
    name: 'Alex',
    age: 25,
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('object', serializedPersone);


//https://www.youtube.com/watch?v=SeXr8738iMU