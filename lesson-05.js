"use strict";

// Lesson 05 exercise: Functions
// In your exercise repository, create a branch named `lesson-05-exercise` and switch to it,
// then open `lesson-05.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Take the order pricing chain from the previous exercise, which the file provides again, and
// wrap it in a declared function that receives the order size as a parameter. Call the
// function with four different sizes and log each result.

// * The pricing chain from the previous exercise, provided again:
function checkOrderSize(orderSize) {
  if (orderSize > 12) {
    console.log("Large order, call the bakery ahead");
  } else if (orderSize > 6) {
    console.log("Medium order, ready in an hour");
  } else {
    console.log("Small order, walk right in");
  }
}

checkOrderSize(14);
checkOrderSize(10);
checkOrderSize(5);
checkOrderSize(12);

// TODO: Part two.
// Change the function so that it returns its message instead of printing inside the body, and
// move every `console.log` to the call site. Add a one-sentence comment on why the returning
// version is more reusable.
function getOrderMessage(orderSize) {
  if (orderSize > 12) {
    return "Large order, call the bakery ahead";
  } else if (orderSize > 6) {
    return "Medium order, ready in an hour";
  } else {
    return "Small order, walk right in";
  }
}

console.log(getOrderMessage(14));
console.log(getOrderMessage(10));
console.log(getOrderMessage(5));
// Returning values is more reusable because it allows the output to be stored in variables, manipulated, tested, or sent anywhere instead of being forcibly printed directly to the console.

// TODO: Part three.
// The file provides two small declared helper functions. Convert the first into a function
// expression and the second into a one-line arrow function with an implicit return, and prove
// with logged calls that the behavior of both is unchanged.

// * The two provided helpers, convert the first to a function expression,
// * the second to a one-line arrow function with an implicit return:
const double = function (n) {
  return n * 2;
};

const shout = (text) => `${text.toUpperCase()}!`;

console.log(double(5)); // Expected: 10
console.log(shout("hello")); // Expected: "HELLO!"

// TODO: Part four.
// Give your pricing function a default parameter value, and log one call that supplies the
// argument and one call that relies on the default.
function getOrderMessageWithDefault(orderSize = 5) {
  if (orderSize > 12) {
    return "Large order, call the bakery ahead";
  } else if (orderSize > 6) {
    return "Medium order, ready in an hour";
  } else {
    return "Small order, walk right in";
  }
}

console.log(getOrderMessageWithDefault(15)); // Supplies argument
console.log(getOrderMessageWithDefault()); // Relies on default parameter (5)

// TODO: Part five.
// Write a function named `repeat` that receives a callback and a count, and calls the callback
// that many times using the counting pattern provided in the file's starter comments. Pass it
// an arrow function of your own and run it.

// * The starter counting pattern for repeat(callback, count):
// * let i = 1;
// * while (i <= count) { call the callback here; i = i + 1; }
function repeat(callback, count) {
  let i = 1;
  while (i <= count) {
    callback();
    i = i + 1;
  }
}

repeat(() => {
  console.log("Repeating action!");
}, 3);

// TODO: Part six.
// The file contains a short program with global, function, and block declarations, including
// one shadowed name. Before running it, write a comment predicting each logged line; then run
// it, correct your misses, and leave both prediction and result visible.

// * The provided scope program, predict every logged line before running:
const shopName = "Maison Sarah";
function greet(customer) {
  const shopName = "The Corner Bakery";
  return `Welcome to ${shopName}, ${customer}`;
}
console.log(greet("Anna")); // prediction: Welcome to The Corner Bakery, Anna, actual: Welcome to The Corner Bakery, Anna
console.log(shopName); // prediction: Maison Sarah, actual: Maison Sarah
if (true) {
  const insideIf = "visible in here";
  console.log(insideIf); // prediction: visible in here, actual: visible in here
}
// console.log(insideIf); // prediction first, then uncomment to verify:
// Prediction: ReferenceError because block-scoped variables declared with const are not accessible outside their block.
const insideIf = "visible in here"; // (Leaving commented or handled safely according to instructions; testing the error behavior via comment or execution)
// console.log(insideIf); // Throws ReferenceError as predicted.

// TODO: Part seven.
// Write the classic temperature converter as two functions, one converting Celsius to
// Fahrenheit and one converting back, each returning its result. Log a small table of three
// conversions in each direction, formatted with template literals and `toFixed`.
function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}

function fahrenheitToCelsius(f) {
  return ((f - 32) * 5) / 9;
}

console.log("--- Celsius to Fahrenheit ---");
const celsiusValues = [0, 20, 100];
for (let i = 0; i < celsiusValues.length; i++) {
  const c = celsiusValues[i];
  console.log(`${c}°C is equal to ${celsiusToFahrenheit(c).toFixed(2)}°F`);
}

console.log("--- Fahrenheit to Celsius ---");
const fahrenheitValues = [32, 68, 212];
for (let i = 0; i < fahrenheitValues.length; i++) {
  const f = fahrenheitValues[i];
  console.log(`${f}°F is equal to ${fahrenheitToCelsius(f).toFixed(2)}°C`);
}

// TODO: Part eight.
// The file provides a line that throws a TypeError when run. Wrap it in `try` and `catch`, log
// a friendly sentence that contains the error's message, and log one further line after the
// block to prove the program survived.

// ! This line throws a TypeError. Keep it commented until this part,
// ! then uncomment it and wrap it in try and catch:
const answer = 42;
try {
  console.log(answer.toUpperCase());
} catch (error) {
  console.log(`Caught an error safely: ${error.message}`);
}
console.log("Program survived the error execution.");

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
