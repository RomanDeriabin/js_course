'use strict';

console.log('Enter data');

const req = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Work with data');

        const product = {
            name: 'TV',
            price: 2000,
        };
        resolve(product);
    }, 2000);
});

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'ordered';
            resolve(product);
        }, 2000);
    });
}).then(data => {
    data.modify = 'true';
    return data;
}).then((data) => {
    console.log(data);
});