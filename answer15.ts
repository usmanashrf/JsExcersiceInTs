let guests_name :string[]=['Ali','Mujtaba','Umer','khan'];

for(var i=0; i< guests_name.length; i++){
    console.log(`${guests_name[i]} I would like to invite you on my birthday`);
}


//Make changing in list
//umer is not coming so we'll replace umer with qasim

guests_name.splice(2,1,"Qasim");
console.log(guests_name);

for(var i=0; i< guests_name.length; i++){
    console.log(`Hi ${guests_name[i]}, I would like to invite you on my birthday`);
}