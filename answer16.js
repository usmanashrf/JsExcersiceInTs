"use strict";
let guest = ['Ali', 'Mujtaba', 'Umer', 'khan'];
for (var i = 0; i < guest.length; i++) {
    console.log(`${guest[i]} I would like to invite you on my birthday`);
}
//Make changing in list
//umer is not coming so we'll replace umer with qasim
guest.splice(2, 1, "Qasim");
console.log(guest);
for (var i = 0; i < guest.length; i++) {
    console.log(`Hi ${guest[i]}, I would like to invite you on my birthday`);
}
//Here we found a bigger table so we'll invite some more friends
//ading new friend at the start of list
guest.splice(0, 0, "Arslan");
console.log(guest);
//add friend at the middle of any array
guest.splice(3, 0, "Inam");
console.log(guest);
//add friend at the end of any array
//we cant use append funciton we'll use push function
guest.push("Luke");
console.log(guest);
for (var i = 0; i < guest.length; i++) {
    console.log(`Hi ${guest[i]},I'm thorwing a party so you'have to come`);
}
