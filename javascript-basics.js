// Comments in Javascript

// Variables have to be declared in javascript
//Do not use snake_case for variables, but camelCase

// 'let' allows us to change the value of a variable after it has been created. Works like regular variable assignment in Python. 

let greet = "Hello Dr Spock";

greet = "Hello dear friend"; // reassignment of variable

//const keyword:
//const are, ahem, constant variables. Can't change its value once declared.

const myAwesomeness = 10;

//DO NOT USE VAR, ITS OUTDATED
//Best practice is to use const by default, and use let when you need to change the value of a variable

// Javascript ignores line breaks and indendtation during execution. Use semicolons for each statement

// template literals are a bit like Python's f-strings and allow us to insert variables into strings
let name = 'Leah';
let greeting = 'Hello';

let message = `${greeting} ${name}`;