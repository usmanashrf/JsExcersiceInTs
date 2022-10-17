"use strict";
let usersList = [];
if (usersList.length > 0) {
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i] === "Admin") {
            console.log(` Hello ${usersList[i]}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${usersList[i]}, thank you for logging in again.`);
        }
    }
}
else {
    console.log(`We need to find some users!`);
}
