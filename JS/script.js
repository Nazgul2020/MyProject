"use strict";


let numberOfFilms;

function start() {
    while (numberOfFilms == ' ' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов Вы просмотрели?', ' ');
    }
}

start();

let a;
let b;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        a = prompt("Введите название фильма");
        b = prompt("Оцените фильм");
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {

        alert("Вы посмотрели мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        alert("Вы киноман");
    } else {
        alert('произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB() {

    if (personalMovieDB.privat == false) {
        //personalMovieDB.privat=true;
        console.log(personalMovieDB);
    }

}
showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }

}
writeYourGenres();

console.log(personalMovieDB);