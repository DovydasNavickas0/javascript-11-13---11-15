let firstname = "start";
let role = "mokinys";

console.log(firstname);

console.log("Mano vardas yra "+firstname);

console.log('as vardu ${firstname} dirbu kaip ${role}');

let price = 7.20;
let quatity = 6;
let sum = price * quatity;
console.log(sum);

let mistake;
console.log(mistake);

let happy = true;
console.log(happy)

console.log(typeof firstname);
console.log(typeof price);
console.log(typeof happy);

console.log(isNaN(quatity))

let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}