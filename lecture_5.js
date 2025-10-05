
//1)მასივის მეთოდები splice, slice
//2)functions 
//3) მასივის მეთოდები foreach ,map, flat, flatmap,filter, some,every,reduce 


// სავარჯიშოები
// 1
// let fruits = ["ვაშლი","ატამი", "ბანანი","მანგო"]
// splice -ის გამოყენებით დაამატე " მარწყვი"  ინდექს 1-ზე,წაშალე ერთი ელემენტი
// slice -ის გამოყენებით , შექმენი მასივი სადაც შეინახავ ატამს და ბანანს.


// 2 

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
// მაგალითი: ფასი = 200, ფასდაკლება = 10% → შედეგი 180.









// function finalPrice(price) {
//   let discount = price * 0.20;       // 20% ფასდაკლება
//   let total = price - discount;      // საბოლოო ფასი
//   return total;
// }
// let result = finalPrice(100)
// console.log(result); // 80



//  expression function
// const finalPrice = function(price) {
//   let discount = price * 0.20;
//   let total = price - discount;
//   return total;
// };
// console.log(finalPrice(130)); // 80




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





//  3
// forEach
// let numbers = [10, 20, 30];

// numbers.forEach(num => {
//   console.log(num);
// });



// // 10%-ით ფასის მომატება
// const cartItems = [
//     { name: "ყავა", price: 5, quantity: 2 },
//     { name: "ჩაი", price: 3, quantity: 4 },
//     { name: "შოკოლადი", price: 2, quantity: 5 }
// ];
// cartItems.forEach(function(item) {
//     item.price = item.price * 1.10;
// });
// console.log("პროდუქტების ახალი ფასები:");
// cartItems.forEach(function(item) {
//     console.log(`${item.name}: $${item.price.toFixed(2)}`);
// });


//  map 1

// let numbers = [1, 2, 3, 4, 5];
//  let multiplied = numbers.map(num => num * 3);
// console.log(multiplied);


//3.1 
// const users = [
//   { id: 1, name: "Ana", age: 15 },
//   { id: 2, name: "Gio", age: 17 },
//   { id: 3, name: "Nino", age: 16 }
// ];

// const names = users.map(user => user.name);
// console.log(names);



// flat

// let numbers =[1,2,[3,4],5]
// let flatNumbers =numbers.flat();
// console.log(flatNumbers)

// flatmap


//  filter მხოლოდ ლუწი რიცხვები
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);


// some



// every


// reduce
// 1 ციფრების შეკრება

// let numbers = [2, 3, 4, 5];

// let sum = numbers.reduce((acc, num) => acc + num, 0);

// console.log(sum); // 14







//2 სტრინგის გაერთიანება ერთ სტრინგად

// const words = ["გამარჯობა", "მეგობრებო", "როგორ", "ხართ?"];

// const sentence = words.reduce((acc, word) => acc + " " + word);

// console.log(sentence);






// 3 ყველაზე გრძელი სტრინგის პოვნა
// const fruits = ["ვაშლი", "მარწყვი", "მანგო", "ბანანი", "ატამი"];

// const longest = fruits.reduce((acc, word) => {
//   return word.length > acc.length ? word : acc;
// }, "");

// console.log(longest);


// 4 ლუწი რიცხვების ჯამი
// const numbers = [1, 2, 3, 4, 5, 6];

// const sumOfEvens = numbers.reduce((acc, num) => {
//   if (num % 2 === 0) {
//     acc += num; // ფილტრაცია + დაგროვება
//   }
//   return acc;
// }, 0);

// console.log(sumOfEvens);


// ითვლის კალათში არსებული item -ის total price -ს 
// const cart = [
//   { product: "Apple", price: 2, qty: 3 },
//   { product: "Banana", price: 1, qty: 5 },
//   { product: "Orange", price: 3, qty: 2 }
// ];

// const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

// console.log(total); 


// map , reduce
// let students = [
//   { name: "ნინო", grades: [90, 80, 85] },
//   { name: "ლაშა", grades: [70, 75, 80] }
// ];

// // თითოეულის საშუალო ქულის გამოთვლა
// let averages = students.map(student => {
//   let sum = student.grades.reduce((a, b) => a + b, 0);
//   return sum / student.grades.length;
// });

// console.log(averages); 




// // სხვადასხვა პროცენტით მატება ,ფუნქცია ფასის მომატებისთვის
// const cartItems2 = [
//     { name: "ყავა", price: 5, quantity: 2, increasePercent: 10 },
//     { name: "ჩაი", price: 3, quantity: 4, increasePercent: 20 },
//     { name: "შოკოლადი", price: 2, quantity: 5, increasePercent: 5 }
// ];


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


