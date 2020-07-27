// Creating an object
var johnbelieve = {
    firstName: "Kareem",
    lastName: "Johnbelieve",
    occupation: "Junior software developer"
}

// Accessing the objects using bracket
console.log(johnbelieve["firstName"]);
console.log(johnbelieve["lastName"]);
console.log(johnbelieve["occupation"]);

// Accessing the object using bracket
console.log(johnbelieve.firstName)
console.log(johnbelieve.lastName)
console.log(johnbelieve.occupation)

//Adding hobby to the object
johnbelieve.hobby
console.log(johnbelieve.hobby);

//Deleting the key and value of occupation
delete johnbelieve.occupation

for (var key in johnbelieve) {
    console.log(johnbelieve[key]);
}

//No five of Part 1
var namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
}

for (var key in namesAndHobbies) {
    console.log(namesAndHobbies[key] + " => " + key)
}

//Adding my name and my favorite hobby
namesAndHobbies.name = "johnbelieve"
namesAndHobbies.hobby = "coding"

//Checking if my name exist in the object also printing out name and hobby
if ("name" in namesAndHobbies) {
    for (var key in namesAndHobbies) {
        console.log(namesAndHobbies.name, namesAndHobbies.hobby)
    }

}