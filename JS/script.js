"use strict";


let numberOfFilms = prompt('Сколько фильмов Вы просмотрели?', ' ');



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {} ,
    genres: [],
    privat: false
};

const a = prompt('Один из просмотренных фильмов', ' ');
const b = prompt('Hа сколько оцените его', ' ');
const c = prompt('Один из просмотренных фильмов', ' ');
const d = prompt('Hа сколько оцените его', ' ');


personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;

console.log(personalMovieDB);
