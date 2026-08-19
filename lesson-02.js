"use strict";

// Lesson 02 exercise: Variables and data types
// In your exercise repository, create a branch named `lesson-02-exercise` and switch to it,
// then open `lesson-02.js`. The questions are inside as comments, and the file begins with the
// strict mode line. Work through the parts in order, beneath each question.

// TODO: Part one.
// Declare five variables that describe a small shop of your choosing, mixing `const` and `let`
// deliberately and naming everything in camelCase. Log each variable, and add a one-line
// comment justifying every choice between `const` and `let`.
const shopName = "The Corner shop"; // const used because the shop's name will never change.
const foundingYear = 2027; // const used because the founding year is permanent.
let currentCustomerCount = 4; // let used because the number of customers changes every day.
let isOpen = true; // let used because the open status can toggle throughout the day.
const taxRate = 0.08; // const used because the baseline local tax rate is fixed.

console.log(shopName);
console.log(foundingYear);
console.log(currentCustomerCount);
console.log(isOpen);
console.log(taxRate);

// TODO: Part two.
// Log the `typeof` result for each of your five variables, and additionally for `null` and for
// `undefined`. Note in a comment which one of these results is a famous historical bug of the
// language.
console.log(typeof shopName);
console.log(typeof foundingYear);
console.log(typeof currentCustomerCount);
console.log(typeof isOpen);
console.log(typeof taxRate);
console.log(typeof null); // typeof null returning 'object' is a famous historical bug in JavaScript.
console.log(typeof undefined);

// TODO: Part three.
// Declare one variable without assigning it a value, and a second variable set to `null` on
// purpose. Log both values and both `typeof` results, and state the difference between the two
// kinds of nothing in one comment sentence.
let unassignedVariable;
const intentionalNull = null;

console.log(unassignedVariable, typeof unassignedVariable);
console.log(intentionalNull, typeof intentionalNull);
// Undefined means a variable has been declared but not yet initialized, whereas null is an intentional assignment of an empty or nonexistent value.

// TODO: Part four.
// Convert the three provided string values to their intended types using `Number()` and
// `Boolean()`, and convert one number of your own to a string with `String()`. Log each result
// together with its `typeof`, and note in a comment which conversion would produce `NaN` if
// the string were not a clean number.

// * The three provided string values:
const priceText = "4.50";
const countText = "12";
const flagText = "true";

const convertedPrice = Number(priceText); // Using Number() in this conversion would produce NaN if the string were not a clean number.
const convertedCount = Number(countText);
const convertedFlag = Boolean(flagText);
const myCustomString = String(100);

console.log(convertedPrice, typeof convertedPrice);
console.log(convertedCount, typeof convertedCount);
console.log(convertedFlag, typeof convertedFlag);
console.log(myCustomString, typeof myCustomString);

// TODO: Part five.
// The file ends with a short broken program that contains a reassigned `const`, an assignment
// to a variable that was never declared, and a variable read before its declaration line. Run
// it, read each error message carefully, repair all three problems, and describe each repair
// in one comment line.

// ! This broken program crashes on purpose, one error at a time.
// ! Keep it commented until you reach this part, then uncomment and repair:
// const bakeryName = "Maison Sarah";
// bakeryName = "The Corner Bakery";
// openingHour = 7;
// console.log(loafCount);
// let loafCount = 12;
let bakeryName = "Maison Sarah"; // Changed const to let so the variable can be reassigned.
bakeryName = "The Corner Bakery";
let openingHour = 7; // Added 'let' to declare the variable before assignment under strict mode.
let loafCount = 12;
console.log(loafCount); // Moved the console.log() line below the variable declaration to prevent reference errors.

// TODO: Part six.
// Two variables, `a` and `b`, hold different values. Swap their contents using a third,
// temporary variable, and log both afterwards to prove the swap succeeded. This is the oldest
// exercise in programming, and it still earns its place.
let a = "apple";
let b = "banana";
let temp = a;

a = b;
b = temp;

console.log("a:", a); // Should log "banana"
console.log("b:", b); // Should log "apple"

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
