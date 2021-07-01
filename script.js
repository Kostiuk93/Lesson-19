"use strict";
//Callback-функции
function first() {
    // Происходит какое то действие
    setTimeout (function(){
        console.log(1);
    } ,500);
}

function second(){
    console.log(2);
}

first();
second();
//
function leaarnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

leaarnJS('JavaScript', function(){
    console.log('Я прошел этот урок');
});
// Красткий синтаксис прошлой функции
function leaarnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}
function done(){
    console.log('Я прошел этот урок');
}

leaarnJS('JavaScript', done);
