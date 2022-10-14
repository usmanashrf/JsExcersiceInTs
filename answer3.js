"use strict";
let anyName = "Mark";
console.log(`lowercase,  ${anyName.toLowerCase()}`);
console.log(`uppercase:  ${anyName.toUpperCase()}`);
function titleCase(anyName) {
    anyName.toLowerCase();
    var nameArray = anyName.split(" ");
    for (var i = 0; i < nameArray.length; i++) {
        nameArray[i].charAt(0).toUpperCase();
    }
    let str = nameArray.join(" ");
    return str;
}
console.log(`titlecase :  ${titleCase(anyName)}`);
