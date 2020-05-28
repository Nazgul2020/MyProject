"use strict";


let numberOfFilms = prompt('Сколько фильмов Вы просмотрели?', ' ');


let a;
let b;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



for (let i = 0; i < 2; i++) {
    a=prompt("Введите название фильма");
    b=prompt("Оцените фильм");
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}


if (personalMovieDB.count < 10) {

    alert("Вы посмотрели мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
} else {
    alert('произошла ошибка');
}
// const a = prompt('Один из просмотренных фильмов', ' ');
// const b = prompt('Hа сколько оцените его', ' ');
// const c = prompt('Один из просмотренных фильмов', ' ');
// const d = prompt('Hа сколько оцените его', ' ');


//personalMovieDB.movies[c] = d;

console.log(personalMovieDB);