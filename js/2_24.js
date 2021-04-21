"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже помотрели', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже помотрели', '');
        }
    },
    rememberFilms: function() {
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
    },
    detectPersonalMovieLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено слишком мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(privateOption) {
        if (!privateOption) {
            console.log(personalMovieDB);
        } else {
            console.log('This is private information');
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeUserGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genresAnswer = prompt(`Ваш любимый жанр под номером ${i}`, '');
            while (genresAnswer == null || genresAnswer == '' || genresAnswer.length < 1) {
                genresAnswer = prompt(`Ваш любимый жанр под номером ${i}`, '');
            }
            personalMovieDB.genres[i - 1] = genresAnswer;
        }
        personalMovieDB.genres.forEach(function(item, index) {
            console.log(`Ваш любимый жанр ${index+1}: ${item}`);
        });
    },
};

// function showMyDB(nameOfDB) { // Первый вариант проверки приватности базы данных
//     if (nameOfDB.privat == false) {
//         console.log(personalMovieDB);
//     } else {
//         console.log('This is private information');
//     }
// }

personalMovieDB.start();
personalMovieDB.rememberFilms();
personalMovieDB.detectPersonalMovieLevel();
personalMovieDB.writeUserGenres();
// showMyDB(personalMovieDB); // Вызов для первого варианта
// personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat); // Вызов для второго варианта