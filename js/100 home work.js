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
// Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів.
// Оголоси функцію makeTransaction(quantity, pricePerDroid, customerCredits), яка складає та повертає повідомлення
// про купівлю ремонтних дроїдів.
// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// quantity — кількість замовлених дроїдів
// pricePerDroid — ціна одного дроїда
// customerCredits — сума коштів на рахунку клієнта
// Доповни функцію таким чином:

// Оголоси змінну для зберігання загальної суми замовлення(загальна вартість усіх замовлених дроїдів) і
// задай їй вираз розрахунку цієї суми.
// Додай перевірку, чи зможе клієнт оплатити замовлення:
// якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, функція має повертати рядок "Insufficient funds!"
// в іншому випадку функція має повертати рядок "You ordered <quantity> droids worth <totalPrice> credits!",
//  де < quantity > це кількість замовлених дроїдів, а < totalPrice > це їх загальна вартість.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
// У консоль будуть виведені результати її роботи.

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//   let totalPrice = quantity * pricePerDroid;  /*Розрахунок загальної вартості замовлення */
//   if (totalPrice > customerCredits) {        /*Перевірка, чи може клієнт оплатити замовлення */
//     return "Insufficient funds!";
//   } else {
//     return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
//   }
// }

// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

//!====================== TASK#2 =============================
// Оголоси функцію formatMessage(message, maxLength), яка приймає рядок(параметр message)
//та перевіряє його довжину відповідно до заданої максимальної довжини(параметр maxLength).
// Доповни код функції таким чином, щоб:

// Якщо довжина рядка дорівнює або менша за maxLength, то функція повертає початковий рядок без змін.
// Якщо довжина перевищує maxLength, то функція обрізає рядок до maxLength символів, додає трикрапку "..."
//в кінці та повертає обрізану версію.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
//У консоль будуть виведені результати її роботи.

// function formatMessage(message, maxLength) {
//   if (message.length <= maxLength) {
//     return message;

//   } else {
//     return message.slice(0, maxLength) + "...";
//   }
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

//!====================== TASK#3 =============================
// Функція checkForSpam(message) приймає рядок(параметр message), перевіряє його на вміст заборонених слів spam і sale,
//і повертає результат перевірки.
//Слова в рядку параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.
// Доповни код функції таким чином, що:

// Якщо знайдено заборонене слово(spam або sale), то функція повертає буль true
// Якщо в рядку відсутні заборонені слова, функція повертає буль false
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
//У консоль будуть виведені результати її роботи.

// function checkForSpam(message) {
//   const lowercaseMessage = message.toLowerCase() //* Перетворюємо рядок на нижній регістр для порівняння однакових/приведених значень/
//   //* Перевіряємо наявність заборонених слів у рядку/
//   if (lowercaseMessage.includes("spam") || lowercaseMessage.includes("sale")) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

//!====================== TASK#4 =============================
// Оголоси функцію getShippingCost(country), яка повинна перевіряти можливість доставки товару
//в країну користувача(параметр country) і повертати повідомлення про результат.
//Обов'язково використовуй інструкцію switch.
// Формат рядка, що повертається "Shipping to <country> will cost <price> credits",
//де замість < country > і < price > необхідно підставити відповідні значення.
// Список країн і вартість доставки:

// China — 100 кредитів
// Chile — 250 кредитів
// Australia — 170 кредитів
// Jamaica — 120 кредитів
// Зі списку видно, що доставка можлива не скрізь.Якщо зазначена країна відсутня у списку,
//то функція повинна повернути рядок "Sorry, there is no delivery to your country".
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
//У консоль будуть виведені результати її роботи.

// function getShippingCost(country) {
//   switch (country) {
//     case "China":
//       price = "Shipping to China will cost 100 credits";
//       break;
//     case "Chile":
//       price = "Shipping to Chile will cost 250 credits";
//       break;
//     case "Australia":
//       price = "Shipping to Australia will cost 170 credits";
//       break;
//     case "Jamaica":
//       price = "Shipping to Jamaica will cost 120 credits";
//       break;

//     default:
//       price = "Sorry, there is no delivery to your country";
//       break;
//   }
//   return price;
// }

// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

//~ ========================  Д/З #3 МАСИВИ  ========================================================================

//!====================== TASK#1 =============================

// Перш, ніж розв’язувати задачу, давай визначимося із новим терміном!
// Термін slug — це зрозумілий людині унікальний ідентифікатор, який використовується
//  у веб розробці для створення читабельних URL - адрес.
//   Наприклад, замість того, щоб користувач побачив в адресному рядку
// mysite.com / posts / 1q8fh74tx, можна зробити slug із назви статті.
// У результаті адреса буде приємнішою для сприйняття: mysite.com / posts / arrays -for-begginers.
//     Slug — це завжди рядок у нижньому регістрі, слова якого розділені тире.
// З цим розібралися ? А тепер давай нарешті виконувати задачу!
// Напиши функцію slugify(title), яка приймає заголовок статті,
//   параметр title і повертає slug, створений із цього рядка.
// Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
// Усі символи slug повинні бути в нижньому регістрі.
// Усі слова slug повинні бути розділені тире.


//function slugify(title) { // Функція приймає заголовок статті та повертає його slug

// let lowerCaseTitle = title.toLowerCase(); // Перетворюємо всі символи у рядку в нижній регістр

//  let splitedTitle = lowerCaseTitle.split(' ');   // Розділяємо рядок на масив слів за допомогою пробілів

// let slug = splitedTitle.join('-'); // З'єднуємо слова тире, отримуючи slug

// return slug;  // Повертаємо отриманий slug
//}

// console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

//!====================== TASK#2 =============================
// Напиши функцію під назвою makeArray, яка приймає три параметри:
// firstArray(масив), secondArray(масив) і maxLength(число).
// Функція повинна створювати новий масив, який містить усі елементи
//  з firstArray, а потім усі елементи з secondArray.
// Якщо кількість елементів у новому масиві перевищує maxLength,
// функція повинна повернути копію масиву з довжиною maxLength елементів.
// В іншому випадку функція повинна повернути весь новий масив.

// function makeArray(firstArray, secondArray, maxLength) { //* Оголошуємо функцію*/
//   const newAray = firstArray.concat(secondArray);
//   if (newAray.length > maxLength) {
//     return newAray.slice(0, maxLength); //*  повертаємо копію масиву з довжиною (maxLength)
//   } else {
//     return newAray; //* повертаємо весь новий масив*/
//   }
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

//!====================== TASK#3 =============================

// Напиши функцію filterArray(numbers, value), яка приймає масив чисел(numbers)
// та значення(value) як параметри.
// Функція повинна повертати новий масив лише тих чисел
// із масиву numbers, які більші за значення value.
// Усередині функції:
// Створи порожній масив, у який будеш додавати підходящі числа.
// Використай цикл для ітерації кожного елемента масиву numbers.
// Використовуй умовний оператор if усередині циклу для перевірки
//  кожного елемента и додавання до свого масиву.
// Поверни свій новий масив з підходящими числами як результат.

// function filterArray(numbers, value) {
//   const newArray = []
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];

//   }
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]


//~ ========================  Д/З Block#4 ========================================================================

//~ ========================  Д/З ========================================================================
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

//~ ===================================== MODUL 5 ============================

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

//~ ========================  Д/З БЛОК#6 ===============================================================================================

//!====================== TASK#1 =============================
// Перед звільненням розробник зламав вихідний код управління акаунтами
// користувачів нашого сервісу доставки їжі.Виконай рефакторинг методів об'єкта customer,
// розставивши відсутні this під час звернення до властивостей об'єкта.

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],

//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

//!====================== TASK#2 =============================
// Створи клас Storage, який створюватиме об'єкти для управління складом товарів.
// Клас очікує лише один аргумент — початковий масив товарів, який записується до створеного
// об'єкта в приватну властивість items.
// Оголоси наступні методи класу:
// getItems() — повертає масив поточних товарів у приватній властивості items.
// addItem(newItem) — приймає новий товар newItem і додає його до масиву товарів у приватну властивість items об'єкта.
// removeItem(itemToRemove) — приймає рядок з назвою товару itemToRemove і видаляє його з масиву товарів
// у приватній властивості items об'єкта.
// Візьми код нижче з ініціалізацією екземпляра й викликами методів і
// встав його після оголошення класу для перевірки коректності роботи.
// У консоль будуть виведені результати їх роботи.

// class storageObj {
//   constructor(items) {     // Конструктор класу, який приймає початковий масив товарів
//     this.items = items;  // Записуємо початковий масив в приватну властивість items
//   }

//   getItems() { // Метод для отримання поточного масиву товарів
//     return this.items;
//   }
//   addItem(newItem) { // Метод для додавання нового товару до масиву
//     this.items.push(newItem);
//   }
//   removeItem(itemToRemove) { // Метод для видалення товару за назвою з масиву
//     this.items = this.items.filter(item => !item.includes(itemToRemove));
//     // Використовуємо метод filter для створення нового масиву без товару, який треба видалити
//   }
// }

// const storage = new storageObj(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


// Исправление #2
// class Storage {
//   #items;                    // приватна властивість, що зберігає масив товарів
//   constructor(items) {      // конструктор класу, очікує масив товарів як єдиний аргумент
//     this.#items = items;   // записує масив товарів до приватної властивості #items
//   }

//   getItems() {     // метод, що повертає масив поточних товарів у приватній властивості #items
//     return this.#items;
//   }

//   addItem(newItem) {  // метод, що додає новий товар newItem до масиву товарів у приватну властивість #items об'єкта
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {   // метод, що видаляє товар itemToRemove з масиву товарів у приватній властивості #items об'єкта
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }

// }

// При вызове console.log(storage.getItems()); в консоль браузера должно вывестись["Nanitoids", "Prolonger", "Antigravitator"],
//   а выводится["Nanitoids", "Prolonger", "Antigravitator", "Droid"].

// GPT ответ №1:
// Чтобы при вызове console.log(storage.getItems()) в консоль разработчика браузера выводилось
// ["Nanitoids", "Prolonger", "Antigravitator"], а не["Nanitoids", "Prolonger", "Antigravitator", "Droid"],
//   вам нужно удалить элемент "Droid" из массива #items.Для этого вы можете использовать
//   метод removeItem(itemToRemove), который удаляет элемент из массива.
//   В вашем случае, вы можете вызвать storage.removeItem("Droid"), чтобы удалить "Droid"
//    из массива #items.Затем, при вызове console.log(storage.getItems()),
//   в консоль разработчика браузера будет выводиться массив["Nanitoids", "Prolonger", "Antigravitator"].

//   GPT ответ №2:
// Ваш код console.log(storage.getItems()); выводит результат в формате,
//   который включает не только массив, но и дополнительную информацию об объекте в консоли.
//   Это стандартное поведение в некоторых средах разработки и консолях браузера.
// Если вы хотите увидеть только массив в форме["Nanitoids", "Prolonger", "Antigravitator"],
//   вам, возможно, нужно использовать JSON.stringify при выводе в консоль:
// console.log(JSON.stringify(storage.getItems()));
// Это приведет к выводу только содержимого массива без дополнительной информации:
// ["Nanitoids", "Prolonger", "Antigravitator"]


//!====================== TASK#3 =============================
// Напиши клас StringBuilder, який приймає один параметр initialValue — довільний рядок,
// який записується у приватну властивість value об'єкта, що створюється.
// Оголоси наступні методи класу:

// getValue() — повертає поточне значення приватної властивості value.
// padEnd(str) — отримує параметр str(рядок) і додає його в кінець значення приватної
// властивості value об'єкта, який викликає цей метод.
// padStart(str) — отримує параметр str(рядок) і додає його на початок значення приватної
// властивості value об'єкта, який викликає цей метод.
// padBoth(str) — отримує параметр str(рядок) і додає його на початок і в кінець значення
// приватної властивості  value об'єкта, який викликає цей метод.
// Візьми код нижче з ініціалізацією екземпляра й викликами методів і встав його після
//  оголошення класу для перевірки коректності роботи.

// Не принятое решение
// class StringBuilder {
//   #value;
//   constructor(initialValue) {// Конструктор класу, приймає початкове значення initialValue
//     this.#value = initialValue;// Записуємо початкове значення у приватну властивість value
//   }
//   getValue() { // Метод для отримання поточного значення
//     return this.#value;
//   }
//   padEnd(str) {// Метод для додавання рядка на кінець поточного значення
//     this.#value += str;
//   }
//   padStart(str) { // Метод для додавання рядка на початок поточного значенн
//     this.#value += str + this.#value;
//   }
//   padBoth(str) {   // Метод для додавання рядка на початок і кінець поточного значення
//     this.#value += str + this.#value + str;
//   }
// }

// Исправление #2
// class StringBuilder {
//   #value;
//   constructor(startValue) {
//     this.#value = startValue;
//   }
//   getValue() {
//     return this.#value;
//   }
//   padEnd(str) {
//     this.#value += str;
//   }
//   padStart(str) {
//     this.#value = str + this.#value;
//   }
//   padBoth(str) {
//     this.#value = str + this.#value + str;
//   }
// }

// class StringBuilder {
//   #value; // приватна властивість, що зберігає рядок
//   constructor(initialValue) { // конструктор класу, очікує рядок initialValue як єдиний аргумент
//     this.#value = initialValue; // записує рядок initialValue до приватної властивості #value
//   }
//   getValue() { // метод, що повертає поточний рядок у приватній властивості #value
//     return this.#value;
//   }
//   padEnd(str) { // метод, що додає рядок str в кінець рядка у приватній властивості #value об'єкта, який викликає цей метод
//     this.#value += str;
//   }
//   padStart(str) { // метод, що додає рядок str на початок рядка у приватній властивості #value об'єкта, який викликає цей метод
//     this.#value = str + this.#value;
//   }
//   padBoth(str) { // метод, що додає рядок str на початок і в кінець рядка у приватній властивості #value об'єкта, який викликає цей метод
//     this.#value = str + this.#value + str;
//   }
// }


// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// Доброго времени суток!
// Спасибо за обратную связь!
// Удалил репозиторий полностью и создал новый.
//Task2: items сделал частной(#items);   в removeItem вместо includes использовал(!==);
//Task3: constructor(initialValue) поменял на constructor(startValue);  value частная(#value);   padStart исправил на - { this.#value = str + this.#value; };
//padBoth  исправил на - { this.#value = str + this.#value + str; }

//~ ========================  Д/З БЛОК#7 ===============================================================================================

// class User {
//   email;
//   constructor(email) {
//     this.email = email;
//   }
//   get email() {
//     return this.email;
//   }
//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
//   constructor({ email, access, blacklistedEmails }) {
//     super(email);
//     this.access = access;
//     this.blacklistedEmails = blacklistedEmails;
//   }
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email));
//   }
// }
// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
//   blacklistedEmails: [],
// });
//~ ======================== //~ ======================== //~ ======================== 