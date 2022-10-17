var magiciansNames :string[] = [ 'alex', 'BOB', 'DUde' ]; 

function make_great(magicians:string[]){

  let greatMagicians =[];
  for (let i=0; i<magicians.length; i++) {
    greatMagicians.push(`Great ${magicians[i]}`);
  }
return greatMagicians;
}

magiciansNames = make_great(magiciansNames);

function show_magician(magicians:string[]) {
  for (let i=0; i<magicians.length; i++) {
    console.log(magicians[i]);
  }
}

show_magician(magiciansNames);