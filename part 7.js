//PRINT DAY
function printDay(arr) {
    if (arr === 1) {
        return "Monday";
    } else if (arr === 2) {
        return "Tuesday";
    } else if (arr === 3) {
        return "wednesday"
    } else if (arr === 4) {
        return "Thurday";
    } else if (arr === 5) {
        return "Friday";
    } else if (arr === 6) {
        return "Saturday";
    } else if (arr === 7) {
        return "Sunday";
    }
}
console.log(printDay(8));

// LAST ELEMENTS
function lastElement(arr) {
    for (var i = 0; i < arr.length; i++) {
        return arr.length - 0
    }
}
console.log(lastElement([]))

//NUMBER COMPARE
function numberCompare(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        return "First is greater";
    } else if (firstNumber < secondNumber) {
        return " Second is greater";
    } else if (firstNumber === secondNumber) {
        return "Numbers are equal";
    }
}
console.log(numberCompare(1, 3));

//ARRAY MANIPULATION
function arrayManipulation(arr, command, location, value) {
    if (command === "remove" && location === "end") {
        return arr.pop();
    } else if (command === "remove" && location === "beginning") {
        return arr.shift();
    } else if (command === "add" && location === "beginning") {
        arr.unshift(value);
        return arr;
    } else if (command === "add" && location === "end") {
        arr.push(value)
        return arr
    }
}
console.log(arrayManipulation([1, 2, 3], "add", "end", 30));