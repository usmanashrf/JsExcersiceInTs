let places :string[]=["Scotland","Turkey","Australia","Canada","UK"];

//normal order
console.log("Normal order");
for(var i=0; i< places.length; i++){
    console.log(`${places[i]}`);
}
//Alphabatical order
const orderPlaces = [...places].sort();
  console.log("\n");
  console.log("sorted Array");
  console.log(orderPlaces);

  console.log("\n");
  console.log("real Array");
  console.log(places);

  //Reverse Alphabatical order
const reversePlaces = [...orderPlaces].reverse();

console.log("\n");
console.log("reverse alphabatically Array");
console.log(reversePlaces);

console.log("\n");
console.log("real Array");
console.log(places);

console.log("\n");
console.log("real Array");
console.log(places);
//reverse the order original array
console.log("reverse the order original array");
places.reverse();
console.log(places);

// Agian reverse the order original array
console.log("agian reverse the order original array");
places.reverse();
console.log(places);

//sort original array Alphabatically
console.log("sorted Array");
places.sort();
console.log(places);

// reverse sort original array Alphabatically
console.log("sorted Array");
places.reverse();
console.log(places);