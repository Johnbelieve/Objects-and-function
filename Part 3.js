// Number 1
function myName() {
    console.log("Kareem Johnbelieve")
}
myName();

// Number 2
var favoriteFoods = ["pizza", "ice cream"];
function randomFood() {
    if (Math.random() > .3) {
        return favoriteFoods[0];
    } else {
        return favoriteFoods[1];
    }
}
randomFood();
console.log(randomFood());

// Number 3
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function displayOddNumber() {
    for (i = 0; i < number.length; i++) {
        if (i % 2 === 1) {
            console.log(i);
        }
    }
}
console.log(displayOddNumber());

// Number 4
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function displayEvenNumber() {
    for (i = 1; i < number.length; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
    return i;
}
console.log(displayEvenNumber());

// Number 5
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function returnFirstOddNumber() {
    for (i = 1; i < number[2]; i++) {
        if (i % 2 === 1) {
            console.log(i);
        }
    }
}
console.log(returnFirstOddNumber());

// Number 6
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function returnFirstEvenNumber() {
    for (i = 1; i < number[2]; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
console.log(returnFirstEvenNumber());

// Number 7
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function returnFirstHalf() {
    for (i = 1; i < number.length / 2; i++) {
        if (i % 2 === 0 || i % 2 === 1) {
            console.log(i);
        }
    }
    return i;
}
console.log(returnFirstHalf());

// Number 8
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function returnSecondHalf() {
    for (i = 6; i < number.length; i++) {
        if (i % 2 === 0 || i % 2 === 1) {
            console.log(i);
        }
    }
    return i;
}
console.log(returnSecondHalf());