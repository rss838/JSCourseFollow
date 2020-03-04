//This Script contains a bunch of comments for learning/reference purposes!


//variables Lesson


//This goes at the beginning of a scripting file for "reasons??<insert actual reason here at some point!"
"use strict";

// This is a comment

//Brings up browser alert box, also JS does addition
alert(3+5+2);

let message; //"Let" createsa JS variable

message = 'Hola'; //= adds content to the variable//

alert(message); //shows variable content

const MY_SANITY = 0 // Const is a way of creating a variable that can't/won't be changed
/*constants that are hard coded, and pre-know
should always be capitalized. My sanity is 0, I know that it
is 0, and I also know that it will always be 0. So, Therefore,
It should be a capitalized constant.
There are also other constants as well, constants that are
unchanging, but not always known or not known until run time are
not capitalized. Example:
const pageLoadTime = 1231232131;
constants also don't necesarily need to be defined immediatly
*/ 

//variables lessons exercise
//working with variables exercise
let admin;
let name;
name= 'John';
admin= name;
alert(admin);

//giving the right name exercise

let ourPlanetName= 'Earth';
let currentUser= 'Bob';


//Data Types Lesson
//Data Types are different types of data that can be contained within a variable!

//Numbers
let numberExample = 123;
let numberExample2 = 4;
let numberExample3 = 420.420;
alert( numberExample / numberExample2 );

//BigInt: Numbers bigger than 2^53 or less than -2^53

let bigInt = 81927398217319821379812739817298317298321798327982173n;
// n at the end for bigint

//String
let string = 'abc'
let string2 = "double quotes work the same as single quotes"
let backtickString3 = `backticks can embed another string, ${string}`

//Boolean: contains only two values, true and false
let nameFieldChecked = true;
let ageFieldChecked = false;

//null: value that represents absolutely nothing 
let age = null;

//undefined: The value of a declared variable that isn't defined
let p;
alert(p); //says "undefined"

/*objects and symbols: objects store collections of data and more
complex entities. They get their own lesson.... symbols refer to 
objects */


//typeof operator: allows us to see which type of data is stored in a variable
typeof 0; // "number"

//Data Types exercise
//strings quotes exercise
let name2 = "Ilya";

alert( `hello ${1}` ); // ? hello 1

alert( `hello ${"name"}` ); // ? hello name

alert( `hello ${name2}` ); // ? hello Ilya


/*type conversions: From lesson :"Most of the time, operators 
and functions automatically convert the values given to 
them to the right type.
For example, alert automatically converts any value to a string 
to show it. Mathematical operations convert values to numbers.
There are also cases when we need to explicitly convert a 
value to the expected type." */

//String conversions
let value1 = true;
alert(typeof value1); //boolean
value1 = String(value1);
alert(typeof value1); //string
