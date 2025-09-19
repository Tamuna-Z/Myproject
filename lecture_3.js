// 1) object
// 2)loop - for, while,  do .... while
// 3 )Template Literal 
// 4)function declaration, expresion, arrow 

// 5) მასივის მეთოდები map, reduce, foreach 


//1 ობიექტის შექმნა
// let student = {
//   name: "ნინო",
//   age: 15,
//   grade: "10th",
//   isActive: true
// };


// წიგნის ობიექტი
// let book = {
//   title: "ჰარი პოტერი და ფილოსოფიური ქვა",
//   author: "ჯ. კ. როულინგი",
//   pages: 223,
//   isAvailable: true
// };

// // ობიექტის გამოყენება
// console.log(book.title);       // გამოიტანს: ჰარი პოტერი და ფილოსოფიური ქვა
// console.log(book.author);      // გამოიტანს: ჯ. კ. როულინგი
// console.log(book.pages);       // გამოიტანს: 223
// console.log(book.isAvailable); // გამოიტანს: true
// console.log(student.name);   // გამოიტანს: ნინო
// console.log(student.age);    // გამოიტანს: 15


// ახალი ინფორმაცია დამატება
// book.genre = "ფენტეზი";  // ახალი key:value წყვილი
// console.log(book.genre);  // გამოიტანს: ფენტეზი

// // არსებული ინფორმაციის შეცვლა
// book.pages = 230;          // გვერდების რაოდენობის განახლება
// console.log(book.pages);   // გამოიტანს: 230

// // ობიექტის სხვა ცვლილება
// book.isAvailable = false;  // ხელმისაწვდომობის შეცვლა
// console.log(book.isAvailable); // გამოიტანს: false

// წაშლა

// delete book.genre;


//2) while (პირობა) {
//   // კოდის ნაწილი რომელიც განმეორდება
// }
// // მაგალითი:  1–დან 5–მდე დაბეჭდვა

// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }
// // 1 2 3 4 5

// // მაგალითი: მასივის ელემენტების დაბეჭდვა

// let fruits = ["apple", "banana", "cherry"];
// let j = 0;

// while (j < fruits.length) {
//   console.log(fruits[j]);
//   j++;
// }
// apple
// banana
// cherry

// do .... while
// let j = 1;

// do {
//   console.log("hello", j);
//   j++;
// } while (j <= 5);

// 3 template literal  -  `${}`
// // console.log(`Hello, my name is ${userName} and I am ${age} years old.`);

// 4
//  function - Declaration, espression, arrow
// ფუნქციის გამოძახება წინასწარ

// sayHello();
// function sayHello() {
//   console.log("Hello!");
// }


// const sayHi = function() {
//   console.log("Hello!");
// };

// sayHi();


// const greet = () => {
//   console.log("Hello!");
// };

// greet(); 


// function sayHello(name) {
//   console.log(`Hello ${name}`);
// }
// sayHello("Ana");

// declaration

// function finalPrice(price) {
//   let discount = price * 0.20;       // 20% ფასდაკლება
//   let total = price - discount;      // საბოლოო ფასი
//   return total;
// }

// // გამოყენება   expression
// let result = finalPrice(100)
// console.log(result); // 80

// let result2 = finalPrice(250)
// console.log(result2); // 200

//  expression function

// const finalPrice = function(price) {
//   let discount = price * 0.20;
//   let total = price - discount;
//   return total;
// };

// console.log(finalPrice(100)); // 80

//  arrow function1
// const finalPrice = (price) => {
//   let discount = price * 0.20;
//   let total = price - discount;
//   return total;
// };

// console.log(finalPrice(250)); // 200


 
//  arrow function2
// const finalPrice = price => price - price * 0.20;

// console.log(finalPrice(500)); // 400


// სავარჯიშოები

//1) დაწერე ფუნქცია, რომელიც მიიღებს რიცხვს და დააბრუნებს  კვადრატს.

// მაგალითი: თუ შეიყვან 5 → უნდა დააბრუნოს 25.

//2) დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და დააბრუნებს მათ ჯამს.

// მაგალითი: 4 და 7 → შედეგი 11.

// 3)დაწერე ფუნქცია, რომელიც მიიღებს სახელს და კონსოლში დაბეჭდავს:

// "გამარჯობა, [სახელი]!"

// მაგალითად: თუ არგუმენტი არის "ნინო" → "გამარჯობა, ნინო!".

//4) დაწერე ფუნქცია, რომელიც მიიღებს ასაკს და შეამოწმებს:

// თუ 18-ზე მეტია → "შენ სრულწლოვანი ხარ".

// თუ არა → "შენ ჯერ არასრულწლოვანი ხარ".


//5) დაწერე ფუნქცია, რომელიც მიიღებს პროდუქტის ფასს და ფასდაკლების პროცენტს, და დააბრუნებს საბოლოო ფასს.
// function finalPrice(price, discountPercent) {
//   let discount = price * (discountPercent / 100);
//   return price - discount;
// }
// console.log(finalPrice(200, 10)); // 180

// მაგალითი: ფასი = 200, ფასდაკლება = 10% → შედეგი 180.


//  5
//  map 1

// let numbers = [1, 2, 3, 4, 5];

// let multiplied = numbers.map(num => num * 3);

// console.log(multiplied); // [3, 6, 9, 12, 15]


//2 
// const users = [
//   { id: 1, name: "Ana", age: 15 },
//   { id: 2, name: "Gio", age: 17 },
//   { id: 3, name: "Nino", age: 16 }
// ];

// const names = users.map(user => user.name);
// console.log(names); // ["Ana", "Gio", "Nino"]


// reduce
// 1 ციფრების შეკრება

// let numbers = [2, 3, 4, 5];

// let sum = numbers.reduce((acc, num) => acc + num, 0);

// console.log(sum); // 14

// let numbers = [1, 2, 3, 4, 5];


//2 სტრინგის გაერთიანება ერთ სტრინგად

// const words = ["გამარჯობა", "მეგობრებო", "როგორ", "ხართ?"];

// const sentence = words.reduce((acc, word) => acc + " " + word);

// console.log(sentence);
// "გამარჯობა მოსწავლეებო როგორ ხართ?"

// 3 ყველაზე გრძელი სტრინგის პოვნა
// const fruits = ["ვაშლი", "მარწყვი", "მანგო", "ბანანი", "ატამი"];

// const longest = fruits.reduce((acc, word) => {
//   return word.length > acc.length ? word : acc;
// }, "");

// console.log(longest);
// "მარწყვი"

// 4 ლუწი რიცხვების ჯამი
// const numbers = [1, 2, 3, 4, 5, 6];

// const sumOfEvens = numbers.reduce((acc, num) => {
//   if (num % 2 === 0) {
//     acc += num; // ფილტრაცია + დაგროვება
//   }
//   return acc;
// }, 0);

// console.log(sumOfEvens);
// // 12



// reduce
// ითვლის კალათში არსებული item -ის total price -ს 

// const cart = [
//   { product: "Apple", price: 2, qty: 3 },
//   { product: "Banana", price: 1, qty: 5 },
//   { product: "Orange", price: 3, qty: 2 }
// ];

// const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

// console.log(total); // 17


// foreach
// let numbers = [10, 20, 30];

// numbers.forEach(num => {
//   console.log(num);
// });

// const cartItems = [
//     { name: "ყავა", price: 5, quantity: 2 },
//     { name: "ჩაი", price: 3, quantity: 4 },
//     { name: "შოკოლადი", price: 2, quantity: 5 }
// ];

// // 10%-ით ფასის მომატება
// cartItems.forEach(function(item) {
//     item.price = item.price * 1.10; // ფასს ვუმატებთ 10%
// });

// console.log("პროდუქტების ახალი ფასები:");
// cartItems.forEach(function(item) {
//     console.log(`${item.name}: $${item.price.toFixed(2)}`);
// });


// const cartItems2 = [
//     { name: "ყავა", price: 5, quantity: 2, increasePercent: 10 },
//     { name: "ჩაი", price: 3, quantity: 4, increasePercent: 20 },
//     { name: "შოკოლადი", price: 2, quantity: 5, increasePercent: 5 }
// ];

// // სხვადასხვა პროცენტით მატება ,ფუნქცია ფასის მომატებისთვის
// function increasePrices(items) {
//     items.forEach(function(item) {
//         item.price = item.price * (1 + item.increasePercent / 100);
//     });
// }

// // ფასების მომატება
// increasePrices(cartItems2);

// // ახალი ფასების გამოქვეყნება
// console.log("პროდუქტების ახალი ფასები:");
// cartItems2.forEach(function(item) {
//     console.log(`${item.name}: $${item.price.toFixed(2)}`);
// });


