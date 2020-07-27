//Part 4a
function add(a, b) {
    return (a + b);
}
add(2, 2)

function subtract(a, b) {
    return (a - b);
}
subtract(2, 2)

function multiply(a, b) {
    return (a * b);
}
multiply(2, 2)

function division(a, b) {
    return (a / b);
}
console.log(division(2, 2))


//Part 4b
console.log(sayHello())
function sayHello(name) {
    var name = prompt("Enter Your name");
    if (name === "john") {
        return "Hello Boss";
    } else {
        return `Hello ${name}`
    }
}
console.log(sayHello())

//Part 4c
function average(arr) {
    var sum = 0
    for (var i = 0, sum = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(average([1, 2, 3, 4, 5, 6]));



//Part 4d
function createStudent(fName, lName) {
    var name = {
        firstName: fName,
        lastName: lName
    };
    return name;
}
console.log(createStudent("john", "believe"));


//Part 4e 
function createStudent(fName, lName) {
    var name = {
        firstName: fName,
        lastName: lName
    }
    return name;
}
var tim = createStudent("Tim", "Garcia");
var matt = createStudent("Matt", "Lane");
var elie = createStudent("Elie", "Schoppik");
var student = [tim, matt, elie];
console.log(student);


//Part 4f


//Part 4g
function extractEveryThird(arr) {

    for (var i = 2; i < arr.length; i++) {
        return arr[i];
    }
}
console.log(extractEveryThird(["first value", "second value", "third value"]));


//Part 4h


//Part 4i   
var myVar = "Hello from global";
function scopePractice() {
    var myVar = "Hello from function scope";
    return myVar;
}
scopePractice();
console.log(myVar);
// Answer: it the string "Hello from global" that will be printed to the console

var tricky = "Hello from global";
function trickyScopePractice() {
    tricky = "Hello from function scope";
}
console.log(tricky);
//Answer: it the string "Hello from global" the will be printed because it was declared in th global scope