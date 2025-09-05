
// 1️⃣ ელემენტის დამატება

// შექმენით მასივი fruits ელემენტებით "apple", "banana", "cherry".

// დაემატოს მასივში "orange" ელემენტი.

// დაბეჭდეთ საბოლოო მასივი.

// 2️⃣ ელემენტის ამოღება

// შექმენით მასივი numbers ელემენტებით 10, 20, 30, 40.

// ამოიღეთ პირველი ელემენტი.

// დაბეჭდეთ საბოლოო მასივი.

// 3️⃣ ელემენტის ჩასმა

// შექმენით მასივი colors ელემენტებით "red", "blue", "green".

// ჩასვით "yellow" მეორე პოზიციაზე.

// დაბეჭდეთ საბოლოო მასივი.

// 4️⃣ მასივის გაერთიანება

// შექმენით ორი მასივი: animals1 = ["cat", "dog"] და animals2 = ["lion", "tiger"].

// გაერთიანეთ ისინი ერთ მასივად.

// დაბეჭდეთ საბოლოო მასივი.

// 5️⃣ მასივის სორტირება

// შექმენით მასივი scores = [50, 30, 20, 10, 40].

// დაალაგეთ მასივი ზრდადობის მიხედვით.

// დაბეჭდეთ შედეგი.

// 6️⃣ მასივის ელემენტების სტრინგად გაერთიანება

// შექმენით მასივი cities = ["Tbilisi", "Batumi", "Kutaisi"].

// გაერთიანეთ ელემენტები ერთ სტრინგად, ერთმანეთისგან ხაზით " - ".

// დაბეჭდეთ შედეგი.

// 7️⃣ მასივის შებრუნება

// შექმენით მასივი letters = ["a", "b", "c", "d"].

// შებრუნეთ ელემენტების რიგი.

// დაბეჭდეთ შედეგი.

// 8️⃣ მასივის ზომის დადგენა

// შექმენით მასივი books = ["Math", "Science", "History"].

// დაბეჭდეთ მასივის ზომა.

// 9️⃣ ელემენტების ძებნა

// შექმენით მასივი food = ["bread", "milk", "cheese"].

// გადაამოწმეთ, თუ მასივში არსებობს ელემენტი "milk".

// დაბეჭდეთ შედეგი.



// 1. დავალება: ელემენტის დამატება

let fruits = ["apple", "banana", "cherry"];
fruits.push("orange");
console.log(fruits);


// 2. დავალება: ელემენტის ამოღება

let numbers = [10, 20, 30, 40];
numbers.shift();
console.log(numbers);


// 3. დავალება: ელემენტის ჩასმა

let colors = ["red", "blue", "green"];
colors.splice(1, 0, "yellow"); 
console.log(colors);


// 4. დავალება: მასივის გაერთიანება

let animals1 = ["cat", "dog"];
let animals2 = ["lion", "tiger"];
let allAnimals = animals1.concat(animals2);
console.log(allAnimals);


// 5. დავალება: მასივის სორტირება

let scores = [50, 30, 20, 10, 40];
scores.sort((a, b) => a - b);
console.log(scores);


// 6. დავალება: მასივის ელემენტების ტექსტად გაერთიანება

let cities = ["Tbilisi", "Batumi", "Kutaisi"];
let result = cities.join(" - ");
console.log(result);


// 7. დავალება: მასივის შებრუნება

let letters = ["a", "b", "c", "d"];
letters.reverse();
console.log(letters);


// 8. დავალება: მასივის ზომის დადგენა

let books = ["Math", "Science", "History"];
console.log(books.length);


// 9. დავალება: ელემენტების ძებნა

let food = ["bread", "milk", "cheese"];
console.log(food.includes("milk"));
