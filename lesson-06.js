"use strict";

// Lesson 06 exercise: Arrays and loops
// In your exercise repository, create a branch named `lesson-06-exercise` and switch to it,
// then open `lesson-06.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Build an array of at least five menu item names. Log the whole array, the first item, the
// last item read through `length` minus 1, and the array's length.
const menu = [
  "Croissant",
  "Baguette",
  "Espresso",
  "Pain au Chocolat",
  "Quiche",
];
console.log("Whole menu:", menu);
console.log("First item:", menu[0]);
console.log("Last item:", menu[menu.length - 1]);
console.log("Array length:", menu.length);

// TODO: Part two.
// Grow and shrink the menu with one `push`, one `unshift`, one `pop`, and one `shift`, logging
// the array after each step, and note in a comment which end of the array each method touched.
menu.push("Macaron");
console.log("After push:", menu); // push touched the end (right) of the array.

menu.unshift("Brioche");
console.log("After unshift:", menu); // unshift touched the beginning (left) of the array.

menu.pop();
console.log("After pop:", menu); // pop touched the end (right) of the array.

menu.shift();
console.log("After shift:", menu); // shift touched the beginning (left) of the array.

// TODO: Part three.
// Print every menu item twice, first with a counting `for` loop that uses the index, then with
// a `for...of` loop, and add a one-line comment on when you would choose each form.
console.log("--- Counting for loop ---");
for (let i = 0; i < menu.length; i++) {
  console.log(`Index ${i}: ${menu[i]}`);
}

console.log("--- for...of loop ---");
for (const item of menu) {
  console.log(item);
}
// Choose a counting for loop when you need index access or need to loop through items in custom steps, and choose a for...of loop when you simply want clean and readable iteration over values without tracking indices.

// TODO: Part four.
// Using the provided prices array, build display strings with `map`, keep the items under five
// euros with `filter`, and fetch the first item over ten euros with `find`, logging each
// result. Add a comment stating what `forEach` would have returned in their place, and why
// that is the well-known trap.

// * The provided prices:
const prices = [4.5, 12, 3.2, 8];

const displayStrings = prices.map((price) => `${price.toFixed(2)} €`);
console.log("Mapped display strings:", displayStrings);

const underFive = prices.filter((price) => price < 5);
console.log("Items under five euros:", underFive);

const overTen = prices.find((price) => price > 10);
console.log("First item over ten euros:", overTen);
// forEach would have returned undefined in their place because forEach is designed purely for side effects and always returns undefined, which is a well-known trap when developers mistakenly try to chain or assign its output.

// TODO: Part five.
// Loop over the provided artists array and log a two-line card for each artist using template
// literals. Then add one artist of your own invention to the data and run the file again,
// noting in a comment what you did not have to change.

// * The provided artists:
const artists = [
  "Pinkfong",
  "Adriano Celentano",
  "Asake",
  "Miyagi and Andy Panda",
  "Johnny Cash",
];

for (let i = 0; i < artists.length; i++) {
  console.log(`Artist #${i + 1}`);
  console.log(`Name: ${artists[i]}\n`);
}

artists.push("Stromae"); // Added own invention artist

for (let i = 0; i < artists.length; i++) {
  console.log(`Artist #${i + 1}`);
  console.log(`Name: ${artists[i]}\n`);
}
// We did not have to change the loop logic or template formatting structure because array iteration dynamically adapts to changes in the array's length.

// TODO: Part six.
// Assign the menu to a second variable, push a new item through the second name, and log both
// variables to demonstrate the shared reference. Then create a spread copy, change the copy,
// and log both lengths to prove the original survived.
const menuReference = menu;
menuReference.push("Eclair");
console.log("Original menu:", menu);
console.log("Menu reference:", menuReference);

const menuSpreadCopy = [...menu];
menuSpreadCopy.push("Tart");
console.log("Original menu length:", menu.length);
console.log("Spread copy length:", menuSpreadCopy.length);

// TODO: Part seven.
// The counting classics. Implement FizzBuzz in full: loop from 1 to 100, printing Fizz for
// multiples of 3, Buzz for multiples of 5, FizzBuzz for both, and the number itself otherwise,
// reusing your single-number logic from the conditionals exercise. Then, with loops over the
// provided numbers array, compute the sum and find the largest value without library helpers.

// * The provided numbers for the sum and the largest:
const numbers = [12, 5, 41, 8, 33, 2, 27];

console.log("--- FizzBuzz 1 to 100 ---");
for (let n = 1; n <= 100; n++) {
  if (n % 3 === 0 && n % 5 === 0) {
    console.log("FizzBuzz");
  } else if (n % 3 === 0) {
    console.log("Fizz");
  } else if (n % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(n);
  }
}

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Sum of numbers:", sum);

let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log("Largest value:", largest);

// TODO: Part eight.
// The string classics that waited for loops. Reverse a string with a loop that walks it
// backwards by index. Count its vowels with a loop and `includes` against a vowels array. As a
// stretch, use your reverser to build a palindrome check, and test it on three words, ignoring
// case with `toLowerCase`.
const sampleStr = "Bakery";
let reversedStr = "";
for (let i = sampleStr.length - 1; i >= 0; i--) {
  reversedStr += sampleStr[i];
}
console.log("Reversed string:", reversedStr);

const vowels = ["a", "e", "i", "o", "u"];
let vowelCount = 0;
const lowerStr = sampleStr.toLowerCase();
for (let i = 0; i < lowerStr.length; i++) {
  if (vowels.includes(lowerStr[i])) {
    vowelCount++;
  }
}
console.log("Vowel count:", vowelCount);

function isPalindrome(word) {
  const cleaned = word.toLowerCase();
  let rev = "";
  for (let i = cleaned.length - 1; i >= 0; i--) {
    rev += cleaned[i];
  }
  return cleaned === rev;
}

console.log("Is 'Kayak' a palindrome?", isPalindrome("Kayak"));
console.log("Is 'Hello' a palindrome?", isPalindrome("Hello"));
console.log("Is 'Racecar' a palindrome?", isPalindrome("Racecar"));

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
