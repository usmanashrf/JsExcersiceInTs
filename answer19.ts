let guest_list=['Ali','Mujtaba','Umer','khan'];

for(var i=0; i< guest_list.length; i++){
    console.log(`${guest_list[i]} I would like to invite you on my birthday`);
}


//Make changing in list
//umer is not coming so we'll replace umer with qasim

guest_list.splice(2,1,"Qasim");
console.log(guest_list);

for(var i=0; i< guest_list.length; i++){
    console.log(`Hi ${guest_list[i]}, I would like to invite you on my birthday`);
}

console.log(`Total Number of guests which are coming is :${guest_list.length}`);