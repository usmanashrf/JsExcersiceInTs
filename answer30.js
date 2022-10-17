"use strict";
let users = ["alex", "Luke", "Bob", "tony", "Admin", "Mike"];
for (var i = 0; i < users.length; i++) {
    if (users[i] === "Admin") {
        console.log(` Hello ${users[i]}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${users[i]}, thank you for logging in again.`);
    }
}
