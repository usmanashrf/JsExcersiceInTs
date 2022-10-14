"use strict";
let gsts = ['Ali', 'Mujtaba', 'Umer', 'khan'];
try {
    gsts[7][-4];
}
catch (error) {
    console.log(error);
}
