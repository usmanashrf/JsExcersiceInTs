"use strict";
let transportation = ["Car", "Airplane", "Motorcycle"];
let statements = ['I like my', 'I own a', 'I love ride'];
for (var i = 0; i < transportation.length; i++) {
    for (var j = 0; j < statements.length; j++) {
        console.log(`${statements[j]} ${transportation[i]}`);
    }
}
