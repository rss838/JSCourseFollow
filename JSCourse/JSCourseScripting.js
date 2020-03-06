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

//number conversions Numbers are automatically converted for lots of stuff, but not all stuff...
//true and false become 1 and 0, respectively
let stringNumber = "123"
stringNumber = Number(stringNumber)
alert(typeof stringNumber)


//boolean conversion, empty stuff like 0, or undefined become false, other stuff become true
alert ( Boolean(1) ); //true

//operand, or arguement. What operations are applied to. 5 * 2 has two operands, 5, and 2

//an operator is unary if it has a single operand
//an operator is binary if it has two operands


//string concatenation, binary +
//when binary plus is applied to strings, it merges them
let s = "my" + "string"
alert(s); //mystring
//if one operand is a string, the other one gets converted to a string as well
alert('1' + 2); //"12"

//string concatenation only happens for binary +. other arithemetic
//operators work only with numbers and always convert
//their operands to numbers

//numeric conversion unary +
//when and unary operator has + applied to it it gets converted to a number
alert( +true ); //1

/* remainder %: the result of integer division
*/
alert(6 % 2 ) //3

//exponentiation: means exactly what it sounds like..
alert( 2 ** 2); //4 (2 * 2)
//exponentation can work for non integer numbers as well..
alert( 4 ** 0.5); //2

//increment/decrement: increases or decreases a VARIABLE by 1
let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3

counter = 2;
--counter;        // works the same as counter = counter - 1, but is shorter
alert( counter ); // 1


/* Modify-in-place. Applies an operator to a variable,
and stores the new result in that same variable.*/
//instead of:
let p = 2;
p = p + 5;
//use
let p = 2;
p+= 5; // n now equals 7, but it took slightly less long to type


//operators exercises
let a = 1, b = 1;
let c = ++a; 2 ?
let d = b++; 1 ?

let a = 2;
let x = 1 + (a *= 2);
//a=4
//x=5

//type conversions exercise
"" + 1 + 0 //1 wrong. should be 10
"" - 1 + 0 //-1
true + false //1
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //9px
"$" + 4 + 5 //$45
"4" - 2 //2
"4px" - 2 //NaN
7 / 0 // 0 Wrong. correct answer is infinity
"  -9  " + 5 //-95
"  -9  " - 5 //-14
null + 1 //1
undefined + 1 //1 Wrong, correct answer is NaN
" \t \n" - 2 // -2 