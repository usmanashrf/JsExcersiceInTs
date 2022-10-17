"use strict";
function make_shirts(sizeOfShirt = "Large", message = "I love JavaScript") {
    console.log(`size of your shirt is: ${sizeOfShirt}`);
    console.log(`message: ${message}`);
}
make_shirts();
make_shirts("medium");
make_shirts("extra large", "Hello world");
