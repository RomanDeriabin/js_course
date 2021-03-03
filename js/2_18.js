"use strict";

let numberofFilms;

const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function start() {
    numberofFilms = +prompt('Сколько фильмов вы уже помотрели', '');
    while (numberofFilms == '' || numberofFilms == null || isNaN(numberofFilms)) {
        numberofFilms = +prompt('Сколько фильмов вы уже помотрели', '');
    }
    personalMovieDB.count = numberofFilms;
}

function rememberFilms() {
    for (let i = 0; i < 2; i++) {
        let nameOfMovieAnswer = prompt('Последний посмотренный фильм', '');
        while (nameOfMovieAnswer == '' || nameOfMovieAnswer == null || nameOfMovieAnswer.length > 50) {
            nameOfMovieAnswer = prompt('Последний посмотренный фильм', '');
            console.log(nameOfMovieAnswer);
        }
        let scoreOfMovieAnswer = prompt('Как бы вы оценили его? Введите значение от 1 - 10', '');
        while (scoreOfMovieAnswer == '' || scoreOfMovieAnswer == null || scoreOfMovieAnswer.length > 50) {
            scoreOfMovieAnswer = prompt('Как бы вы оценили его? Введите значение от 1 - 10', '');
        }
        personalMovieDB.movies[nameOfMovieAnswer] = scoreOfMovieAnswer;
    }
}

function detectPersonalMovieLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено слишком мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

// function showMyDB(nameOfDB) { // Первый вариант проверки приватности базы данных
//     if (nameOfDB.privat == false) {
//         console.log(personalMovieDB);
//     } else {
//         console.log('This is private information');
//     }
// }

function showMyDB(privateOption) { // Второй вариант проверки приватности базы данных
    if (!privateOption) {
        console.log(personalMovieDB);
    } else {
        console.log('This is private information');
    }
}

function writeUserGenres() {
    for (let i = 1; i <= 3; i++) {
        let genresAnswer = prompt(`Ваш любимый жанр под номером ${i}`, '');
        while (genresAnswer == null || genresAnswer == '' || genresAnswer.length < 1) {
            genresAnswer = prompt(`Ваш любимый жанр под номером ${i}`, '');
        }
        personalMovieDB.genres[i - 1] = genresAnswer;
    }
}

start();
rememberFilms();
detectPersonalMovieLevel();
writeUserGenres();
// showMyDB(personalMovieDB); // Вызов для первого варианта
showMyDB(personalMovieDB.privat); // Вызов для второго варианта