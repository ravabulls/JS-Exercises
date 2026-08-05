"use strict";

// Lesson 03 exercise: Strings and numbers
// In your exercise repository, create a branch named `lesson-03-exercise` and switch to it,
// then open `lesson-03.js`, where the questions wait as comments. Work beneath each question
// in order.

// TODO: Part one.
// Declare variables for a shop name, an opening hour, and a closing hour, then log one
// welcoming sentence built as a single template literal that uses all three.
const shopName = "The Crazy Corner Shop";
const openingHour = 8;
const closingHour = 20;

console.log(
  `Welcome to ${shopName}! We are open from ${openingHour} to ${closingHour}.`,
);

// TODO: Part two.
// The file provides a messy string with surplus spaces at both ends, the wrong case, and one
// word that needs replacing. Apply the methods from this lesson, chained or in sequence, to
// log the cleaned version, and add a comment naming each method you used and the job it
// performed.

// * The provided messy string:
const messy = "   Maison   Sarah, fresh bread daily   ";
const cleaned = messy.trim().toLowerCase().replace("bread", "pastries");
console.log(cleaned);
// Methods used:
// 1. trim() to remove whitespace from both ends of the string.
// 2. toLowerCase() to convert all characters in the string to lowercase.
// 3. replace() finds the first occurrence of "bread" and swaps it with "pastries".

// TODO: Part three.
// Using the provided product string, log its length, the position at which a given word
// begins, and a slice containing exactly that word. Then split the provided comma-separated
// list and log the resulting pieces.

// * The provided product string and comma-separated list:
const product = "Sourdough Loaf, whole grain";
const flavorList = "rye,spelt,wheat,olive";

console.log("Length:", product.length);
console.log("Index of 'Loaf':", product.indexOf("Loaf"));
console.log("Slice ('Loaf'):", product.slice(10, 14));
console.log("Split flavors:", flavorList.split(","));

// TODO: Part four.
// From the net price and tax rate in the file, calculate the final price and log it inside a
// template literal, formatted to two decimal places. Add a comment explaining why the
// formatting step must come last.

// * The provided net price and tax rate:
const netPrice = 4.0;
const taxRate = 0.07;
const finalPrice = (netPrice + netPrice * taxRate).toFixed(2);
console.log(`The final price is $${finalPrice}.`);
// The formatting step (toFixed) must come at the last because it returns a string, which would break any subsequent mathematical calculations if performed earlier.

// TODO: Part five.
// Using the random recipe from this lesson, log a random whole number from 1 to 6. Then adapt
// the recipe to produce a number from 10 to 20, and explain your adaptation in a comment.
const diceRoll = Math.floor(Math.random() * 6) + 1;
console.log("Random 1-6:", diceRoll);

// To get a number from 10 to 20, the range size is (20 - 10 + 1) = 11 numbers.
// We multiply Math.random() by 11, use Math.floor() to make it a whole number, and add the minimum offset of 10.
const customRandom = Math.floor(Math.random() * 11) + 10;
console.log("Random 10-20:", customRandom);

// TODO: Part six.
// Open the MDN String reference, choose one method this lesson did not cover, and use it
// correctly on a string of your choice. In a comment, cite the method's name and describe what
// it does in one sentence of your own words.
const sampleText = "JavaScript";
console.log(sampleText.includes("Script"));
// Method: includes() - Checks whether a string contains a specified substring, returning true or false accordingly.

// TODO: Part seven.
// Two classic exercises close the lesson. First, build a username generator: from a first name
// and a last name held in variables, produce a lowercase username in the pattern of first
// initial followed by full last name, such as mmustermann. Second, write a mad-libs story:
// declare four variables, an adjective, a noun, a verb, and a place, and log one short,
// ridiculous story built from a single template literal that uses all four.
const firstName = "Ravi";
const lastName = "Chaudhary";
const username = (firstName[0] + lastName).toLowerCase();
console.log("Generated username:", username);

const adjective = "sparkling";
const noun = "penguin";
const verb = "juggled";
const place = "kitchen";
console.log(
  `While standing in the ${place}, the ${adjective} ${noun} suddenly ${verb} three pineapples!`,
);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
