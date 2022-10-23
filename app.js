/* Q + A
1. How do we assign a value to a variable?

Using the assignment operator =

////////
2. How do we change the value of a variable?

The variable must be "let" or "var" in order to change its value, which can be done using the assignment operator and then take the variable name and using the assignment operator to assign to a new value

////////
3. How do we assign an existing variable to a new variable?

you can set the variables equal to each other.

////////
4. Remind me, what are declare, assign, and define?

Declaring a variable names the variable, assigning it gives it a value, and defining means gives it a property.

////////
5. What is pseudocoding and why should you do it?
Pseudocoding is breaking down code in plain English to help yourself and other programmers (who may or may not know different programming languages) understand the logic of the coding problem

////////
6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

this is depends how long it takes to understand the logic behind the problem, but thinking about the problem is solving the problem. I would spend 10% of time thinking about it, and then the rest of the time typing out the code trying to solve it.
*/

// STRINGS 
// let firstVariable = "Hello World";
// firstVariable = 9;
// let secondVariable = firstVariable;
// secondVariable = "Any String";

// //the value of the firstVariable is 9

// let myName = "Nat";
// console.log(`Hello, my name is ${myName}!`);


// //BOOLEANS
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';
 
// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');

// ////// FOR THE NEXT TWO, USE ONLY && OR ||

// console.log(true || false);
// console.log(false && false && false && false && false || true);

// console.log(false === false)
// console.log(e == 'Kevin');
// console.log(a < b + c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)`
// console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"`
// console.log(48 == '48');

// ////////////////////////
// console.log("The Farm");

// let animal = "cow";
// if (animal === "cow"){
//     console.log("moooo!");
// } else {
//     console.log("Hey! You're not a cow.")
// }

// animal === "cow" ? console.log("moooo!") : console.log("Hey! You're not a cow.");

// ////////////////////////
// console.log("Driver's Ed");
// let personsAge = 15;
// if (personsAge >= 16){
//     console.log("Here are the keys!")
// } else {
//     console.log("Sorry, you're too young.")
// }
// ////////////////////////

////LOOPS

// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }

/*for(let i=10; i<=400; i++){
    console.log(i);
}*/

// for (let i = 12; i <= 4000; i += 3){
//     console.log(i);
// }

//Get Even

// for (let i = 1; i <= 100; i++){
//     if (i % 2 == 0){
//         console.log(`${i} <-- is an even number`);
//     }
// }

//Give Me 5

// for (let i = 0; i <= 100; i++){
//     if (i % 5 == 0 && i % 3 == 0){
//         console.log(`I am a ${i}. Three is a crowd! High Five!`);
//     }
//     else if (i % 5 == 0){
//         console.log(`I am a ${i}. High Five!`);
//     }
//     else if (i % 3 == 0){
//         console.log(`I am a ${i}. Three is a crowd!`);
//     };
// }


//Savings Account
let bank_account = 0;

for (let i = 1; i <= 10; i++){
    bank_account += i;
} 

console.log(`$` + bank_account);
////

let bank_account2 = 0;

for(let i = 1; i <= 100; i++){
    bank_account2 += i*2;
}
console.log(`$` + bank_account2);


//ARRAYS & CONTROL FLOW
/////////A/////////////
/*
What are the things in an array called?
elements

Do Arrays guarantee those things will be in order?
no, you have to manually sort it using methods

What real-life thing could you model with an array?
shopping list, user emails, anything you can put in a list
*/
/////////B/////////////
// let quotes = [
//     "Quote1",
//     "Quote2",
//     "Quote3"
// ];

// console.log(quotes);

/////////C/////////////
// const randomThings = [1, 10, "Hello", true];

// //accessing the first element
// console.log(randomThings[0]); //output 1

// //changing the value
// randomThings[2] = "World";
// console.log(randomThings[2]);
// console.log(randomThings);

/////////D/////////////
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

//to access the 3rd element
console.log(ourClass[2]);

//to replace an element
ourClass[4] = "Octocat";
console.log(ourClass[4]);

//to add an element - you can use push or unshift
ourClass.push("Cloud City");
console.log(ourClass);

/////////E/////////////
const myArray = [5, 10, 500, 20]

//adding two more elements at the end of the array
myArray.push("Aegon", "Another String");
console.log(myArray);

//removing the 5 from the array
myArray.shift();
console.log(myArray);

//adding to the beginning of the arrasy
myArray.unshift("Bob Marley");
console.log(myArray);

//removing a string from the end of the array
myArray.pop();
console.log(myArray);

//reverse the array
myArray.reverse();
console.log(myArray);

// Yes, we mutated the array because we changed the order and data of the elements in the array. The .reverse method reverse the order of the data, but the Array.reverse.protoype resulted in an error?

/////////BIGGIE SMALLS/////////////

let i = 99;

if (i<100){
    console.log("little number")
} else if (i>=100) {
    console.log("big number")
};

/////////Monkey in the Middle/////////
const num = 6;

if (num < 5) {
    console.log("little number")
} else if (num > 10){
    console.log("big number")
} else {
    console.log("monkey")
};

/////////What's in Your Closet?/////////

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];

console.log("Kristyn is rocking that " + kristynsCloset[2] +  " today!")

//adding RayBans in Kristyns closet
kristynsCloset.splice([6], 0, "RayBans");
console.log(kristynsCloset);

//modifying knit hat in Kristyns closet
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);

const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

//accessing first element in THom's closet
console.log(thomsCloset[0][0]);
console.log(thomsCloset[1][1]);
console.log(thomsCloset[2][2]);
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]}, and ${thomsCloset[2][2]}!`)

thomsCloset[1] = "Footie Pajamas";

console.log(thomsCloset[1]);

/////////Functions/////////

/////////printGreeting/////////
function printCoolThat(name){
    console.log(`${name} is cool`);
}
printCoolThat("Captain Reynolds");

///////calculateCube/////////
function calculateCube(num){
    console.log(num ** 3);
}
calculateCube(5);

///////isVowel///////// <-- practice this one

const vowel = ["a", "e", "i", "o", "u"];

function isVowel(character){
    let letter = character.toLowerCase();
        if (vowel.includes(letter)){
        return true;
    } else {
        return false;
    }
}
console.log(isVowel("B"));

///////Get Two Lengths///////// <-- practice this one
function getTwoLengths(parameter1, parameter2){
    return [parameter1.length, parameter2.length]
}

console.log(getTwoLengths("hey", "hello"));

//////////getMultipleLengths//////// <-- practice this one

function getMultipleLengths(strings){
    const output = [];
    for(let string of strings){
        output.push(string.length);
    }
    return output;
};
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

//////////maxOfThree////////

function maxOfThree(num1, num2, num3){
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3){
        return num2;
    } else if (num3 > num1 && num3 > num2){
        return num3;
    } else {
        return num1;
    }
}

console.log(maxOfThree(3, 45, 3));

/////////printLongestWord///////// COME BACK TO THIS
// function printLongestWord(arrayOfStrings){
//     for (let i = 0; i < arrayOfStrings.length; i++){
//         console.log(arrayOfStrings[i].length);
//     }
// }

// function printLongestWord(arrayWithStrings) {
//     let arrayWithStrings = [];
//     arrayWithStrings.
// }

// arrayWithStrings = ["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"];

/////////Objects/////////
/////////Make a user object/////////
const user = {
    name: "Nat",
    email: "natty@spice.com",
    age: 25,
    purchased: [],
    friend: {
        name: "Han",
        age: 26,
        location: "Chicago",
        purchased: []
    }
}

/////////Update the user/////////
user.email = "natty@spicyice.com"

//birthday//
user.age++

/////////Adding keys and values/////////
user.location = "Denver";

/////////Shopaholic/////////
user.purchased.push("carbohydrates", "peace of mind", "Merino jodhpurs");
console.log(user.purchased);

/////////Object-within-object/////////
console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age = 55;
console.log(user.friend.age); //output 55
user.friend.purchased.push("The One Ring", "A latte");
console.log(user.friend);

/////////Loops/////////
for (let i = 0; i < user.purchased.length; i++) {
    console.log(user.purchased[i]);
}

for (let i = 0; i < user.friend.purchased.length; i++) {
    console.log(user.friend.purchased[i]);
}

/////////Functions can operate on objects/////////
function updateUserThat(){
    user.age++
    user.name = user.name.toUpperCase();
}
updateUserThat();
console.log(user);

function oldAndLoud (person) {
    person.age++;
    person.name.toUpperCase();
    return person;
}
console.log(oldAndLoud(user));