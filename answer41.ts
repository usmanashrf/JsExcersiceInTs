var magiciansNames :string[]= [ 'alex', 'BOB', 'DUde' ]; 


function show_magicians(magicians:string[]) {
  for (let i=0; i<magicians.length; i++) {
    console.log(magicians[i]);
  }
  
}

show_magicians(magiciansNames);