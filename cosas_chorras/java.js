let x = "pepe";
let y = "alba";
y = x;
console.log(y);

let N56 = 56;
let N57 = 57;
N56 += N57;
console.log(N56);



let N58 = 58;
let N59 = 59;
N59 -= N58;
console.log(N59);


let a = 10;
let u = 20;
u *= 7;
console.log(u)
u *= a;
console.log(u);


let t = "t" ;
let r = "r";
t = t && (t = r);// tambien se puede escribir asi t &&= r;
console.log(t);

function Boton({ texto }) {
  texto ||= "Haz clic aquí";
  return <button>{texto}</button>;
}

// si el && lo cambio por ||= seria que si es falso lo cambia si es verdadero lo deja igual es como el && pero en falso y depues estaria el ??= que es si el valor el null o undefinined lo cambia si no lo deja igual

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

