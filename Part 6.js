// a. What does the following code output? Why?
var firstName = 'Elie';
function displayFirstName() {
    var firstName = 'Tim';
    return firstName;
}
displayFirstName();
//It will Output 'Tim' because it is the function displayFirstName that is being invoked and not the global variable


// b.What does the following code output ? Why ?
function displayFirstName() {
    var firstName = 'Tim';
    return firstName;
}
displayFirstName();
console.log(firstName) // ?
//It will output error because a variable can't be called outside the function scope since it's not a global function


//c.What does the following code output ? Why ?
console.log(firstName) // ?
var firstName = "Elie"

/*It will output undefined because the variable was not 
declared before console logging it and can't be hoisted  because hoisting accept only value of a variable
and not the variable declaration itself*/



//d.What does the following code output ? Why ?
console.log(firstName) // ?
firstName = 'Elie'
//It will out error because the variable firstName was not declared


//e.What does the following code output ? Why ?
function sayHi() {
    return 'Hi ' + firstName;
    var firstName = 'Elie'
}
sayHi(); // ?
//It will output Hi undefined because for function th hoisting have to take place at the top


//f.What does the following code output ? Why ?
function sayHi() {
    return 'Hi ' + firstName;
     firstName = 'Elie'
}
sayHi(); // ?
// It will output refrence error because there was no variable firstName refrenced in the sayHi function


//g.What does the following code output ? Why ?
sayHi() // ?
function sayHi() {
    return 'Hi!';
}
//It will output Hi! because it has a return value in the function


//h.What does the following code output ? Why ?
sayHi() // ?
var sayHi = function () {
    return 'Hi!';
}
//It will output error because the bracket () after sayHi is making it a function which it is not.