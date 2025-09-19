// 1)მასივის მეთოდები: splice, slice, reverse,concat, join,
// 2)ჩანესტილი მასივი
// 3)სტრინგის მეთოდები: concat, includes, length, replace, split, substring, slice, tolowerCase, toUpperCase, trim, charAt

//4) if else ,ternary , switch
// 5) loop    for, while
// 6 ) function declaration, expresion, arrow
// 7) Template Literal


// 8 ) მასივის მეთოდები map, reduce, foreach 



//1) // splice(start, deleteCount, item1, item2, ...)

// // splice - წაშლის ან ჩასვამს ელემენტებს
// let fruits = ["apple", "banana", "cherry", "mango","fig"];
// fruits.splice(1,2, "orange"); 
// console.log(fruits); // ["apple", "orange", "mango","fig"]

// array.slice(start, end)
// slice - იღებს მასივის ნაწილს
             
// let numbers = [1, 2, 3, 4, 5];
// let part = numbers.slice(1, 4);
// console.log(part); // [2, 3, 4]

// // reverse - აბრუნებს  შებრუნებულ მასივს
// let letters = ["a", "b", "c"];
// letters.reverse();
// console.log(letters); // ["c", "b", "a"]

// // concat - აერთებს მასივებს
// let girls = ["Anna", "Tina"];
// let boys = ["Gio", "Luka"];
// let students = girls.concat(boys);
// console.log(students); // ["Anna", "Tina", "Gio", "Luka"]

// // join - აერთიანებს სტრინგად
// let words = ["I", "love", "coding"];

// console.log(words.join(" ")); // "I love coding"

// 2)// ჩანესტილი მასივი
// let classes = [
//   ["Anna", "Gio"],
//   ["Tina", "Luka"],
//    ["Ann", "Gi"],
//   ["Tin", "Luk"]
// ];
// console.log(classes[2][1]); // "Tina" (მეორე მასივის პირველი ელემენტი)

// 3)string's methods

// let text = "   JavaScript is Awesome!   ";

// // concat - აერთიანებს
// let hello = "Hello".concat(" ", "World");
// console.log(hello); // "Hello World"

// // includes - ამოწმებს არის თუ არა
// let sentence =" Awesome house"
// console.log(sentence.includes("Awesome")); // true

// // length - სტრინგის სიგრძე
// console.log(text.length); // 27

// // replace - ცვლის
// console.log(text.replace("Awesome", "cool")); 
// "   JavaScript is cool!   "

// // split - ყოფს მასივად
// console.log("red,green,blue".split(",")); 
// // ["red", "green", "blue"]

// // substring - იღებს ნაწყვეტს
// console.log(text.substring(3, 13)); 
// "JavaScript"

// // slice - ანალოგიური substring-ს
// console.log(text.slice(3, 13)); 
// // "JavaScript"

// // toLowerCase 
// console.log(text.toLowerCase()); 
// // "   javascript is awesome!   "

// // toUpperCase 
// console.log(text.toUpperCase()); 
// "   JAVASCRIPT IS AWESOME!   "

// // trim - შლის ცარიელ სივრცეებს
// console.log(text.trim()); 
// // "JavaScript is Awesome!"

// charAt - აბრუნებს კონკრეტულ სიმბოლოს
// console.log(text.charAt(12)); // "J"

// 4 if else, ternary, switch



// 1. if else - ვამოწმებთ ქულას
// let score = 22;
// if (score >= 90) {
//   console.log("Excellent");
// } else if (score >= 75) {
//   console.log("Good");
// } else {
//   console.log("Needs Improvement");
// }

// // 2. ternary operator - მოკლე ჩანაწერი
// let result = (score >= 50) ? "Passed" : "Failed";
// console.log(result); // "Passed"

// // 3. switch - ზუსტი ქულის მიხედვით
// let score = 100;
// switch (score) {
//   case 100:
//     console.log("Perfect score!");
//     break;
//   case 85:
//     console.log("Very good!");
//     break;
//   case 60:
//     console.log("Average");
//     break;
//   default:
//     console.log("Keep trying!");
// }
// // let score = 75;

// switch (true) {
//   case (score >= 90):
//     console.log("Excellent");
//     break;
//   case (score >= 75):
//     console.log("Good");
//     break;
//   case (score >= 50):
//     console.log("Passed");
//     break;
//   default:
//     console.log("Failed");
// }

// 5 

// for (დაწყების მნიშვნელობა; პირობა; ცვლილება) {
//   // კოდის ნაწილი რომელიც განმეორდება
// }
// მაგალითი 1 – 1–დან 5–მდე დაბეჭდვა


// for (let i = 1; i < 11; i++) {
 
//  console.log("hello")
// }
// // 1 2 3 4 5

// let sum = 0;

// for (let i = 1; i <= 4; i++) {
//   sum += i;   // sum = sum + i
// }


// console.log("ჯამი:", sum);


// // მაგალითი 2 – მასივის ელემენტების დაბეჭდვა

// let fruit = ["apple", "banana"];

// for (let i = 0; i < fruit.length; i++) {
//   console.log(fruit[i]);
// }
// // apple
// // banana
// // cherry




