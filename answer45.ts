
function carInfo(manufacturer :string, model:string, feature?:string){

    let car ={
        manufacturer:{manufacturer},
        model:{model},
        feature:{feature}
    };

    return car;
}


var firstCall = carInfo("Honda","2022",'white');
console.log(firstCall);

var secCall = carInfo("Toyota","2020",'Black');
console.log(secCall);

var thirdCall = carInfo("Suzuki","2020");
console.log(thirdCall);