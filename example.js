// // ობიექტი car
// let car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2020
// };

// console.log("საწყისი ობიექტი:", car);

// // ახალი property დამატება
// car.color = "black";
// console.log("ფერის დამატების შემდეგ:", car);

// // year შეცვლა
// car.year = 2025;
// console.log("year შეცვლილი:", car);

// // model წაშლა
// delete car.model;
// console.log("model წაშლილი:", car);


// // while ციკლი 1-დან 10-მდე
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// do...while 5-დან 15-მდე
// let j = 5;
// do {
//   console.log(j);
//   j++;
// } while (j <= 15);

// // while – მხოლოდ ლუწი რიცხვები 1-დან 20-მდე
// let k = 1;
// while (k <= 20) {
//   if (k % 2 === 0) {
//     console.log(k);
//   }
//   k++;
// }

// // do...while – "Hello!" 5-ჯერ
// let m = 1;
// do {
//   console.log("Hello!");
//   m++;
// } while (m <= 5);


// // Template Literal
// let product = "ლეპტოპი";
// let price = 2500;
// console.log(`პროდუქტი: ${product} – ფასი: ${price} ლარი`);


// // ფუნქციები
// // 1) კვადრატი
// function square(num) {
//   return num * num;
// }
// console.log("5-ის კვადრატი:", square(5));

// // 2) ორი რიცხვის ჯამი
// function sum(a, b) {
//   return a + b;
// }
// console.log("4 + 7 =", sum(4, 7));

// // 3) მისალმება
// function greet(name) {
//   console.log(`გამარჯობა, ${name}!`);
// }
// greet("ნინო");

// // 4) ასაკის შემოწმება
// function checkAge(age) {
//   if (age > 18) {
//     console.log("შენ სრულწლოვანი ხარ");
//   } else {
//     console.log("შენ ჯერ არასრულწლოვანი ხარ");
//   }
// }
// checkAge(20);
// checkAge(15);
