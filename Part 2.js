var programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes:
        "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

//Adding Go to the array of Langauges
programming["languages"].push("Go");

//Changing difficulty level to 7
programming["difficulty"] = 7;

//Deleting the keyword Jokes
delete programming["jokes"]

//Adding a new keyword and value
programming.isFun = true

//Looping through and and printing out the languages array
if ("languages" in programming) {
    console.log(programming.languages)
}

//Looping through and printing out the keys in the programming object
for (var key in programming) {
    console.log(key)
}

//Looping through and printing out the values in the programming object
for (var key in programming) {
    console.log(programming[key])
}
