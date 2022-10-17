var magiciansNames : string[]= [ 'alex', 'BOB', 'DUde' ]; 

function make_great1(magicians:string[]){

  let greatMagicians =[];
  for (let i=0; i<magicians.length; i++) {
    greatMagicians.push(`Great ${magicians[i]}`);
  }
return greatMagicians;
}

let greatMagicians = make_great1(magiciansNames);

function show_magicians1(magicians:string[], greatMag:string[]) {
  for (let i=0; i<magicians.length; i++) {
    console.log(`${magicians[i]},  ${greatMag[i]}`);
  }
}

show_magicians1(magiciansNames, greatMagicians);