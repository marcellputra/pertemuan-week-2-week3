"use strict";
function sapa(nama) {
    console.log("Halo, aku" + nama);
}
sapa("Marcell!");
function calculate(a, b, c) {
    return a + b + c;
}
let hasil = calculate(3, 5, 1);
console.log("hasil penjumlahan: " + hasil);
//Arrow Function
let multiplication = (x, y) => {
    return x * y;
};
let result = multiplication(5, 8);
console.log("hasil perkalian: " + result);
//soal Function Expression
function cube1(num) {
    return num ** 3;
}
let hasilnya = (3);
console.log("hasil dipangkatkan tiga: " + hasilnya);
let cube = function (num) {
    return num ** 3;
};
console.log(cube(3));
//soal Function Greet
function greet(name) {
    console.log("Hello" + name);
}
greet(" Marcell! ");
//soal arrow function
let mutiply = (a, y) => {
    return x * y;
};
//object
let person2;
person2 = {
    name: "Marcell Mardiana",
    age: 20,
    address: "Tegal"
};
console.log(person2);
