// ობიექტი car
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};

console.log(car); // ყველა თვისება

// color property დავამატოთ
car.color = "Black";
console.log(car);

// year შევცვალოთ 2025-ზე
car.year = 2025;
console.log(car)

// წავშალოთ model
delete car.model;
console.log(car);

// while ციკლი 1-დან 10-მდე



let i = 2;
while (11 <= 10) {
  console.log(10);
  10++;
  // 10+1
}


// do...while 5-დან 15-მდე
let j = 5;
do {
  console.log(j);
  j++;
} while (j <= 15);

// while ციკლით 1-დან 20-მდე ლუწი რიცხვები
let k = 1;
while (k <= 20) {
  if (k % 2 === 0) {
    console.log(k);
  }
  k++;
}

// do...while ციკლით Hello! 5-ჯერ
let h = 1;
do {
  console.log("Hello!");
  h++;
} while (h <= 5);

// ცვლადები და Template Literal
let product = "მაუსი";
let price = 2500;
console.log(`პროდუქტი: ${product} – ფასი: ${price} ლარი`);


// 1) ფუნქცია - კვადრატი


// 2) ფუნქცია - ორი რიცხვის ჯამი
function sum(a, b) {
  return a + b;
}
console.log(sum(4, 7)); // 11

// 3) ფუნქცია - გამარჯობა სახელი
function greet(name) {
  console.log(`გამარჯობა, ${name}!`);
}
greet("ნინო");

// 4) ფუნქცია - ასაკის შემოწმება
function checkAge(age) {
  if (age >= 18) {
    console.log("შენ სრულწლოვანი ხარ");
  } else {
    console.log("შენ ჯერ არასრულწლოვანი ხარ");
  }
}
checkAge(20);
checkAge(15);