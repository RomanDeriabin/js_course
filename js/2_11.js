"use strict";

const numberofFilms = +prompt('Сколько фильмов вы уже помотрели', 'Введите количество');

const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


const nameOfMovieAnswer = prompt('Последний посмотренный фильм', 'Введите название'),
    scoreOfMovieAnswer = prompt('Как бы вы оценили его', 'Введите значение от 1 - 10'),
    nameOfMovieAnswer1 = prompt('Последний посмотренный фильм', 'Введите название'),
    scoreOfMovieAnswer2 = prompt('Как бы вы оценили его', 'Введите значение от 1 - 10');



personalMovieDB.movies[nameOfMovieAnswer] = scoreOfMovieAnswer;
personalMovieDB.movies[nameOfMovieAnswer1] = scoreOfMovieAnswer2;

console.log(personalMovieDB);