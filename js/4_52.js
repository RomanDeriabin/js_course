'use strict';

const inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();
    request.open('GET', 'js/4_52.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    // status - код ошибки
    // statusText - Текст ошибки
    // response - ответ от сервера (то что мог задать бэкендер)
    // reateState - состояние запроса

    request.addEventListener('readystatechange', () => {
        if (request.readyState == 4 && request.status == 200) {
            const usd = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / usd.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'Something wrong';
        }
    });

    // Использование load. Срабатывает только один раз, только когда запрос готов
    //   request.addEventListener('load', () => {
    //     if (request.status == 200) {
    //         const usd = JSON.parse(request.response);
    //         inputUsd.value = (+inputRub.value / usd.current.usd).toFixed(2);
    //     } else {
    //         inputUsd.value = 'Something wrong';
    //     }
    // });
});