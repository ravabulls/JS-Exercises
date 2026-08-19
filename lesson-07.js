"use strict";

// Lesson 07 exercise: Objects
// In your exercise repository, create a branch named `lesson-07-exercise` and switch to it,
// then open `lesson-07.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Model a single menu item as an object with at least four properties of mixed types,
// including one boolean. Log two properties with dot notation, then log one property through
// bracket notation with the key held in a variable, and note in a comment why the brackets
// were required in that case.
const menuItem = {
  name: "Croissant",
  price: 2.5,
  calories: 230,
  isVegetarian: true,
};

console.log("Name:", menuItem.name);
console.log("Price:", menuItem.price);

const lookupKey = "isVegetarian";
console.log("Is Vegetarian (bracket notation):", menuItem[lookupKey]);
// Brackets were required here because the property key is stored dynamically inside a variable rather than being hardcoded as a literal name.

// TODO: Part two.
// Give the item a `describe` method that returns one sentence built from the object's own
// properties through `this`, and log the result of calling it.
menuItem.describe = function () {
  return `${this.name} costs $${this.price.toFixed(2)}, contains ${this.calories} calories, and is vegetarian: ${this.isVegetarian}.`;
};

console.log(menuItem.describe());

// TODO: Part three.
// Build an array of at least five menu item objects, and walk it with `for...of`, logging one
// formatted line per item.
const menuItems = [
  { name: "Croissant", price: 2.5, calories: 230, isVegetarian: true },
  { name: "Baguette", price: 3.0, calories: 350, isVegetarian: true },
  {
    name: "Ham and Cheese Sandwich",
    price: 5.5,
    calories: 500,
    isVegetarian: false,
  },
  { name: "Espresso", price: 2.0, calories: 5, isVegetarian: true },
  { name: "Quiche Lorraine", price: 4.8, calories: 420, isVegetarian: false },
];

console.log("--- Menu Items List ---");
for (const item of menuItems) {
  console.log(
    `- ${item.name}: $${item.price.toFixed(2)} (${item.calories} cal)`,
  );
}

// TODO: Part four.
// Put the callback methods to work on the data: log the names of all vegetarian items by
// combining `filter` and `map`, and fetch the first item cheaper than three euros with `find`.
// Add a comment stating what `find` returns when nothing matches.
const vegetarianNames = menuItems
  .filter((item) => item.isVegetarian)
  .map((item) => item.name);

console.log("Vegetarian items:", vegetarianNames);

const cheapItem = menuItems.find((item) => item.price < 3.0);
console.log("First item cheaper than 3 euros:", cheapItem);
// find returns undefined when no element in the array matches the provided testing function.

// TODO: Part five.
// Take one menu item and log its keys, its values, and finally every pair through a `for...of`
// loop over its entries with a destructured pair, formatted as the key, a colon in the output
// text, and the value.
const sampleItem = menuItems[0];
console.log("Keys:", Object.keys(sampleItem));
console.log("Values:", Object.values(sampleItem));

console.log("--- Key-Value Pairs ---");
for (const [key, value] of Object.entries(sampleItem)) {
  console.log(`${key}: ${value}`);
}

// TODO: Part six.
// Assign one item to a second variable, change the price through the second name, and log the
// first to demonstrate the shared reference. Then build a spread copy that overrides only the
// price, and log both objects to prove they now differ in exactly that property.
const originalItem = menuItems[0];
const itemReference = originalItem;
itemReference.price = 2.99;
console.log(
  "Original item price after reference mutation:",
  originalItem.price,
);

const itemSpreadCopy = { ...originalItem, price: 3.5 };
console.log("Original item price:", originalItem.price);
console.log("Spread copy price:", itemSpreadCopy.price);

// TODO: Part seven.
// As a stretch, build the classic word frequency counter: split the provided sentence into
// words and walk them with a loop, using each word as a bracket-notation key on a counter
// object and adding one per sighting. Log the finished counter, and if the sort extension
// caught your interest, log its entries ordered so that the most frequent word comes first.

// * The provided sentence for the word frequency counter:
const sentence =
  "the quick brown fox jumps over the lazy dog the fox sleeps and the dog dreams";

const words = sentence.split(" ");
const counter = {};

for (let i = 0; i < words.length; i++) {
  const word = words[i];
  if (counter[word]) {
    counter[word]++;
  } else {
    counter[word] = 1;
  }
}

console.log("Word frequency counter object:", counter);

const sortedEntries = Object.entries(counter).sort((a, b) => b[1] - a[1]);
console.log("--- Sorted Word Frequencies (Most Frequent First) ---");
for (const [word, count] of sortedEntries) {
  console.log(`${word}: ${count}`);
}

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
