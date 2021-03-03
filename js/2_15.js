"use strict";

const numberofFilms = +prompt('Сколько фильмов вы уже помотрели', '');
let answerCounter = 0;

const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

// первый вариант цикла
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

// второй вариант цикла
// while (answerCounter < 2) {
//     let nameOfMovieAnswer = prompt('Последний посмотренный фильм', '');
//     while (nameOfMovieAnswer.length == 0 || nameOfMovieAnswer.length > 50) {
//         nameOfMovieAnswer = prompt('Последний посмотренный фильм', '');
//     }

//     let scoreOfMovieAnswer = prompt('Как бы вы оценили его? Введите значение от 1 - 10', '');
//     while (scoreOfMovieAnswer.length == 0 || scoreOfMovieAnswer.length > 50) {
//         scoreOfMovieAnswer = prompt('Как бы вы оценили его? Введите значение от 1 - 10', '');
//     }
//     personalMovieDB.movies[nameOfMovieAnswer] = scoreOfMovieAnswer;
//     answerCounter++;
// }


// Третий вариант цикла
// for (let i = 0; i < 2; i++) {
//     const a = prompt('Последний посмотренный фильм', '');
//     const b = prompt('Как бы вы оценили его? Введите значение от 1 - 10', '');
//     if (a != null && a != '' && a.length < 50 && b != null && b != '' && b.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         console.log(personalMovieDB);
//         i--;
//     }
// }

if (personalMovieDB.count < 10) {
    console.log('Просмотрено слишком мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);