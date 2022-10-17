"use strict";
let favorite_fruits = ["Apple", "banana", "pear"];
if (favorite_fruits.includes("Apple")) {
    console.log(`You really like ${favorite_fruits[0]}`);
}
if (favorite_fruits[1] == 'banana') {
    console.log(`You really like ${favorite_fruits[1]}`);
}
if (favorite_fruits[1] !== favorite_fruits[2]) {
    console.log(`You really like ${favorite_fruits[1]}`);
}
if (favorite_fruits.includes("Apple") && favorite_fruits.includes("pear")) {
    console.log(`You really like ${favorite_fruits[0]} & ${favorite_fruits[2]}`);
}
if (favorite_fruits.includes("Apple") || favorite_fruits.includes("mango")) {
    console.log(`You really like ${favorite_fruits[0]}`);
}
