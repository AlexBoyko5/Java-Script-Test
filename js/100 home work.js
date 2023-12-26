//~ ========================  Д/З ОСНОВИ ФУНКЦІЙ  ========================================================================

//!====================== TASK#1 =============================
// Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів.
// Оголоси функцію makeTransaction, яка очікує два параметри, значення яких будуть задаватися під час її виклику:
// quantity— перший параметр, число, що містить кількість замовлених дроїдів
// pricePerDroid — другий параметр, число, що містить вартість одного дроїда
// Доповни код функції так, щоб вона повертала рядок з повідомленням про покупку ремонтних
// дроїдів: "You ordered <quantity> droids worth <totalPrice> credits!", де:
// <quantity> — це кількість замовлених дроїдів
// <totalPrice> — це загальна вартість замовлення, тобто вартість усіх замовлених дроїдів

// function makeTransaction(quantity, pricePerDroid) {
//     const totalPrice = quantity * pricePerDroid;
//     return `You ordered ${quantity} droids worth ${totalPrice} credits!`
// };
// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

//!====================== TASK#2 =============================
// Оголоси функцію getShippingMessage, яка очікує три параметри, значення яких будуть задаватися під час її виклику:
// country — перший параметр, рядок, що містить країну доставки
// price — другий параметр, число, що містить загальну вартість товару
// deliveryFee — третій параметр, число, що містить вартість доставки товару
// Доповни код функції так, щоб вона повертала рядок з повідомленням про доставку товару в країну
// користувача: "Shipping to <country> will cost <totalPrice> credits", де:
// <country> — це країни доставки
// <totalPrice> — це загальна вартість замовлення, що включає вартість товару і його доставки

// function getShippingMessage(country, price, deliveryFee) {
//     const totalPrice = price + deliveryFee;
//     return `Shipping to ${country} will cost ${totalPrice} credits`
// }
// console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

//!====================== TASK#3 =============================
// Оголоси функцію getElementWidth, яка очікує три параметри, значення яких будуть задаватися під час її виклику:
// content— перший параметр, ширина контенту
// padding — другий параметр, значення горизонтального падінгу для кожної зі сторін
// border — третій параметр, значення товщини бордера для кожної зі сторін
//  Значення всіх параметрів будуть рядками формату Npx де N — це довільне число, ціле або дробове.
// Доповни код функції так, щоб вона повертала число —загальну ширину елемента.
// При розрахунку загальної ширини орієнтуйся на те, що значення box - sizing дорівнює border - box.

// function getElementWidth(content, padding, border) {
//     let contentWidth = Number.parseFloat(content);
//     let paddingWidth = Number.parseFloat(padding);
//     let borderWidth = Number.parseFloat(border);
//     const result = contentWidth + (paddingWidth * 2) + (borderWidth * 2);
//     return result
// }
// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200


//~ ========================  Д/З Розгалуження і ЦИКЛИ  ==================================================================
//!====================== TASK#1 =============================
//!====================== TASK#2 =============================
//!====================== TASK#3 =============================


//!====================== TASK#1 =============================
//? Напиши стрілочну функцію getUserNames(users), яка прийматиме один параметр users — масив об’єктів користувачів.
//? Функція має повертати масив імен усіх користувачів(властивість name) із масиву users.
//? Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
//? У консоль будуть виведені результати її викликів.

// const getUserNames = (users) => {
//     return users.map(user => user.name);
// }
// return users.map(user => user.name);
// Цей рядок коду використовує метод (map) для створення нового масиву, де кожен елемент є іменем користувача.
// (users.map) викликає функцію, передану для обробки кожного елемента масиву (users.)
// Стрілочна функція user => user.name приймає кожний об'єкт користувача з масиву (users) і повертає його ім'я(user.name).
// Таким чином, return users.map(user => user.name); повертає масив імен користувачів.

// Расширенный вариант

// const getUserNames = users => {
//     const names = [];
//     for (const user of users) {
//         names.push(user.name);
//     }
//     return names;
// };


// console.log(
//     getUserNames([
//         {
//             name: "Moore Hensley",
//             email: "moorehensley@indexia.com",
//             balance: 2811
//         },
//         {
//             name: "Sharlene Bush",
//             email: "sharlenebush@tubesys.com",
//             balance: 3821
//         },
//         {
//             name: "Ross Vazquez",
//             email: "rossvazquez@xinware.com",
//             balance: 3793
//         },
//         {
//             name: "Elma Head",
//             email: "elmahead@omatom.com",
//             balance: 2278
//         },
//         {
//             name: "Carey Barr",
//             email: "careybarr@nurali.com",
//             balance: 3951
//         },
//         {
//             name: "Blackburn Dotson",
//             email: "blackburndotson@furnigeer.com",
//             balance: 1498
//         },
//         {
//             name: "Sheree Anthony",
//             email: "shereeanthony@kog.com",
//             balance: 2764
//         },
//     ])
// ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

// //!====================== TASK#2 =============================
// //?Напиши стрілочну функцію getUsersWithFriend(users, friendName) , яка прийматиме два параметра:
// //?перший параметр users — масив об’єктів користувачів
// //?другий параметр friendName — ім’я друга для пошуку.
// //?Функція має повертати масив усіх користувачів із масиву users,
// //?у яких є друг з іменем friendName.
// //?Друзі кожного користувача зберігаються у властивості friends.
// //?Якщо користувачів, у яких є такий других немає, то функція має повернути порожній масив.
// //?  Поради:
// //?Метод filter() можна використовувати для створення нового масиву з елементами, які задовольняють певну умову.
// //?Використовуй метод includes() для перевірки, чи масив friends містить friendName.
// //?Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
// //?У консоль будуть виведені результати її роботи.//

// const getUsersWithFriend = (users, friendName) =>
// Використовуємо метод filter() для створення нового масиву users, що містить тільки тих користувачів,
// у яких є друг із вказаним ім'ям (friendName)
// users.filter(user =>
//     // Використовуємо метод includes() для перевірки, чи має поточний користувач друга із вказаним ім'ям
//     user.friends.includes(friendName)
// );

// const getUsersWithFriend = (users, friendName) =>
//     users.filter(user => user.friends.includes(friendName));

//? У цьому коді usersFilter використовується для створення нового масиву користувачів(users),
//?   які задовольняють умову, яку визначає функція, передана як другий аргумент.(friendName)
//?  У цьому випадку ця функція використовує user.friends.includes для перевірки того,
//? чи має поточний користувач друга з вказаним ім'ям (friendName).

// При помощи цкла
// function getUsersWithFriend(users, friendName) {
//     const filteredUsers = [];
//     for (let i = 0; i < users.length; i++) {
//         const user = users[i];
//         if (user.friends.includes(friendName)) {
//             filteredUsers.push(user);
//         }
//     }
//     return filteredUsers;
// }

// const allUsers = [
//     {
//         name: "Moore Hensley",
//         friends: ["Sharron Pace"]
//     },
//     {
//         name: "Sharlene Bush",
//         friends: ["Briana Decker", "Sharron Pace"]
//     },
//     {
//         name: "Ross Vazquez",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
//     },
//     {
//         name: "Elma Head",
//         friends: ["Goldie Gentry", "Aisha Tran"]
//     },
//     {
//         name: "Carey Barr",
//         friends: ["Jordan Sampson", "Eddie Strong"]
//     },
//     {
//         name: "Blackburn Dotson",
//         friends: ["Jacklyn Lucas", "Linda Chapman"]
//     },
//     {
//         name: "Sheree Anthony",
//         friends: ["Goldie Gentry", "Briana Decker"]
//     }
// ];

// console.log(getUsersWithFriend(allUsers, "Briana Decker"));
// [
//     {
//         name: "Sharlene Bush",
//         friends: ["Briana Decker", "Sharron Pace"]
//     },
//     {
//         name: "Sheree Anthony",
//         friends: ["Goldie Gentry", "Briana Decker"]
//     }
// ]

// console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// [
//     {
//         name: "Elma Head",
//         friends: ["Goldie Gentry", "Aisha Tran"]
//     },
//     {
//         name: "Sheree Anthony",
//         friends: ["Goldie Gentry", "Briana Decker"]
//     }
// ]

// console.log(getUsersWithFriend(allUsers, "Adrian Cross")); // []

// //!====================== TASK#3 =============================
// //? Напиши стрілочну функцію sortByDescendingFriendCount(users) , яка прийматиме один параметр users — масив об’єктів користувачів.
// //? Функція має повертати масив усіх користувачів, відсортованих за спаданням кількостій їх друзів(властивість friends).
// //? Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи..
// //?У консоль будуть виведені результати її роботи.
// console.log(
//     sortByDescendingFriendCount([
//         {
//             name: "Moore Hensley",
//             friends: ["Sharron Pace"],
//             gender: "male"
//         },
//         {
//             name: "Sharlene Bush",
//             friends: ["Briana Decker", "Sharron Pace"],
//             gender: "female"
//         },
//         {
//             name: "Ross Vazquez",
//             friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//             gender: "male"
//         },
//         {
//             name: "Elma Head",
//             friends: ["Goldie Gentry", "Aisha Tran"],
//             gender: "female"
//         },
//         {
//             name: "Carey Barr",
//             friends: ["Jordan Sampson", "Eddie Strong"],
//             gender: "male"
//         },
//         {
//             name: "Blackburn Dotson",
//             friends: ["Jacklyn Lucas", "Linda Chapman"],
//             gender: "male"
//         },
//         {
//             name: "Sheree Anthony",
//             friends: ["Goldie Gentry", "Briana Decker"],
//             gender: "female"
//         }
//     ])
// );
// // [
// //   {
// //     name: "Ross Vazquez",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     gender: "male"
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     gender: "female"
// //   },
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     gender: "female"
// //   },
// //   {
// //     name: "Carey Barr",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     gender: "male"
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     gender: "male"
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     gender: "female"
// //   },
// //   {
// //     name: "Moore Hensley",
// //     friends: ["Sharron Pace"],
// //     gender: "male"
// //   }
// // ]

// //!====================== TASK#4 =============================
// //? Напиши стрілочну функцію getTotalBalanceByGender(users, gender), яка прийматиме два параметра:
// //?    перший параметр users — масив об’єктів користувачів,
// //?    другий параметр gender — рядок, що зберігає стать.
// //?Функція має використовувати ланцюжок виклику методів та повертати
// //?загальний баланс користувачів(властивість balance),
// //? стать яких(властивість gender) збігається зі значенням параметра gender.
// //?Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
// //?У консоль будуть виведені результати її роботи.
// const allUsers = [
//     {
//         name: "Moore Hensley",
//         gender: "male",
//         balance: 2811
//     },
//     {
//         name: "Sharlene Bush",
//         gender: "female",
//         balance: 3821
//     },
//     {
//         name: "Ross Vazquez",
//         gender: "male",
//         balance: 3793
//     },
//     {
//         name: "Elma Head",
//         gender: "female",
//         balance: 2278
//     },
//     {
//         name: "Carey Barr",
//         gender: "male",
//         balance: 3951
//     },
//     {
//         name: "Blackburn Dotson",
//         gender: "male",
//         balance: 1498
//     },
//     {
//         name: "Sheree Anthony",
//         gender: "female",
//         balance: 2764
//     }
// ];

// console.log(getTotalBalanceByGender(allUsers, "male")); // 12053

// console.log(getTotalBalanceByGender(allUsers, "female")); // 8863

//~ //!====================== MODUL 5 ============================

//!====================== TASK#3 =============================
//^Напиши стрілочну функцію sortByDescendingFriendCount(users),
//^яка прийматиме один параметр users — масив об’єктів користувачів.
//^Функція має повертати масив усіх користувачів,
//^відсортованих за спаданням кількостій їх друзів(властивість friends).

// const sortByDescendingFriendCount = (users) => {
//     // Сортуємо масив за спаданням кількості друзів
//     return users.sort((a, b) => b.friends.length - a.friends.length);
// };

// console.log(
//     sortByDescendingFriendCount([
//         {
//             name: "Moore Hensley",
//             friends: ["Sharron Pace"],
//             gender: "male"
//         },
//         {
//             name: "Sharlene Bush",
//             friends: ["Briana Decker", "Sharron Pace"],
//             gender: "female"
//         },
//         {
//             name: "Ross Vazquez",
//             friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//             gender: "male"
//         },
//         {
//             name: "Elma Head",
//             friends: ["Goldie Gentry", "Aisha Tran"],
//             gender: "female"
//         },
//         {
//             name: "Carey Barr",
//             friends: ["Jordan Sampson", "Eddie Strong"],
//             gender: "male"
//         },
//         {
//             name: "Blackburn Dotson",
//             friends: ["Jacklyn Lucas", "Linda Chapman"],
//             gender: "male"
//         },
//         {
//             name: "Sheree Anthony",
//             friends: ["Goldie Gentry", "Briana Decker"],
//             gender: "female"
//         }
//     ])
// );
//!====================== TASK#4 =============================

//^ Напиши стрілочну функцію getTotalBalanceByGender(users, gender), яка прийматиме два параметра:
//^перший параметр users — масив об’єктів користувачів,
//^другий параметр gender — рядок, що зберігає стать.
//^Функція має використовувати ланцюжок виклику методів та
//^повертати загальний баланс користувачів(властивість balance),
//^стать яких(властивість gender) збігається зі значенням параметра gender.

// const getTotalBalanceByGender = (users, gender) => {
//     return users
//         .filter(user => user.gender === gender) // фільтруємо користувачів за статтю
//         .reduce((totalBalance, user) => totalBalance + user.balance, 0); // обчислюємо загальний баланс
// };
// const allUsers = [
//     {
//         name: "Moore Hensley",
//         gender: "male",
//         balance: 2811
//     },
//     {
//         name: "Sharlene Bush",
//         gender: "female",
//         balance: 3821
//     },
//     {
//         name: "Ross Vazquez",
//         gender: "male",
//         balance: 3793
//     },
//     {
//         name: "Elma Head",
//         gender: "female",
//         balance: 2278
//     },
//     {
//         name: "Carey Barr",
//         gender: "male",
//         balance: 3951
//     },
//     {
//         name: "Blackburn Dotson",
//         gender: "male",
//         balance: 1498
//     },
//     {
//         name: "Sheree Anthony",
//         gender: "female",
//         balance: 2764
//     }
// ];

// console.log(getTotalBalanceByGender(allUsers, "male")); // 12053

// console.log(getTotalBalanceByGender(allUsers, "female")); // 8863


//!==================//!==================//!==================//!==================//!==================//!==================
// Д / З от ментора

/*Напишіть функцію checkBrackets(str) яка приймає рядок жс коду (someFn)
  і перевіряє правильність закриття дужок () {} []
  Якщо рядок містить коректний код функція повертає true.
  В іншому випадку повертає false
*/

// const someFn = `function foo() {
//   const arr = [1, 2, 3];
//   console.log(arr);
// }`;

// function checkBrackets(someFn) {

// }

// console.log(checkBrackets(someFn));