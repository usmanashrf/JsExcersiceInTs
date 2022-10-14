"use strict";
let guest_List = ['Ali', 'Mujtaba', 'Umer', 'khan'];
for (var i = 0; i < guest_List.length; i++) {
    console.log(`${guest_List[i]} I would like to invite you on my birthday`);
}
//Make changing in list
//umer is not coming so we'll replace umer with qasim
guest_List.splice(2, 1, "Qasim");
console.log(guest_List);
for (var i = 0; i < guest_List.length; i++) {
    console.log(`Hi ${guest_List[i]}, I would like to invite you on my birthday`);
}
//Here we found a bigger table so we'll invite some more friends
//ading new friend at the start of list
guest_List.splice(0, 0, "Arslan");
console.log(guest_List);
//add friend at the middle of any array
guest_List.splice(3, 0, "Inam");
console.log(guest_List);
//add friend at the end of any array
//we cant use append funciton we'll use push function
guest_List.push("Luke");
console.log(guest_List);
for (var i = 0; i < guest_List.length; i++) {
    console.log(`Hi ${guest_List[i]},I'm thorwing a party so you'have to come`);
}
// here we found we only have place for two persons so we have to remove the friends from list
for (var i = guest_List.length - 1; i > 1; i--) {
    console.log(`Sorry ${guest_List[i]},you are not coming in party we are out of space`);
    guest_List.pop();
}
console.log("==============================");
for (var i = 0; i < guest_List.length; i++) {
    console.log(`Hi ${guest_List[i]},you are still coming`);
}
//reomve remaing guests as well
console.log("reomve remaing guests as well");
for (var i = guest_List.length; i > 0; i--) {
    guest_List.pop();
}
console.log(guest_List);
