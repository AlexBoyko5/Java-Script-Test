//^ ================================================================================================================================
//~ОБЧИСЛЮВАЛЬНІ (computed) ВЛАСТИВОСТІ -  в JavaScript дозволяють вам динамічно визначати імена властивостей об'єкта під час його створення.

//~ Це корисно, коли ви хочете використовувати змінні або обчислювальні вирази для визначення імен властивостей.
//~Синтаксис обчислювальних властивостей виглядає так:

// Синтаксис обчислювальних властивостей
// const obj = {
//   [вираз]: значення,
//   // або
//   [вираз_для_імені_властивості](): {
//     // ...
//   }
// };

// Приклади
const propertyName = 'dynamicProperty';
const obj1 = {
  [propertyName]: 'Значення для динамічної властивості',
};

console.log(obj1.dynamicProperty); // Виведе: Значення для динамічної властивості

// Використання функції для обчислення імені методу
const methodName = 'dynamicMethod';
const obj2 = {
  [methodName + 'WithSuffix']() {
    console.log('Виклик динамічного методу');
  },
};

obj2.dynamicMethodWithSuffix(); // Виведе: Виклик динамічного методу

//^ ================================================================================================================


//!====================  Перебір об'єкта, Цикл for...in, Метод Object.keys(), Object.values()  =============================================

//Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of.
//Запиши у змінну keys масив ключів властивостей об'єкта apartment,і додай в масив values всі значення його властивостей.

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
/*Використовуємо Object.keys() для отримання масиву ключів властивостей об'єкта*/
const keys = Object.keys(apartment);
/*Цикл for...of для перебору масиву ключів*/
for (const key of keys) {
  /*Додаємо значення кожної властивості до масиву values*/
  values.push(apartment[key]);
}
//^ ===============================================
//Виконай рефакторинг функції countProps(object), замінивши перебір ключів за допомогою циклу for…in на метод Object.keys()
//для отримання масиву властивостей.
//Функція має повернути кількість властивостей в об'єкті object.

function countProps(object) {
  let propCount = 0;

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }
  return propCount;
}

// РЕШЕНИЕ !
function countProps(object) {
  const keys = Object.keys(object);
  return keys.length;
}
//^ ============================================
//Запиши у змінну keys масив ключів властивостей об'єкта apartment, а у змінну values - масив їх значень.
//Використовуй методи Object.keys() і Object.values().
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys = Object.keys(apartment);;
const values = Object.values(apartment);
//^ ==============================================

//!=======================  Object.values()  ==============================================================================

//Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries) в якості параметра.
// Кожна властивість об'єкта salaries — це ключ, що містить ім'я співробітника, та значення - його відповідна зарплатня.
//Доповни код функції countTotalSalary(salaries) так, щоб вона повертала загальну суму зарплат всіх співробітників.
//Поради:
//Ініціалізуй змінну totalSalary зі значенням 0, яка буде відповідати за загальну суму зарплат усіх співробітників
//Використай метод Object.values() для отримання значень (зарплат) з об'єкта salaries
//Пройдись по отриманих значеннях за допомогою циклу та додай кожне значення до змінної totalSalary.
//Поверни totalSalary як результат

function countTotalSalary(salaries) {
  let totalSalary = 0;
  const values = Object.values(salaries);
  for (const salary of values) {
    totalSalary += salary;
  }
  return totalSalary;
}
//! 1 - Ініціалізація змінної totalSalary: Спочатку ми створюємо змінну totalSalary і присвоюємо їй значення 0.
//Ця змінна буде відповідати за загальну суму зарплат усіх співробітників.

//! 2 - const values(Object.values(salaries) Отримання масиву значень з об’єкта (salaries):
// Ми використовуємо метод Object.values(salaries), щоб отримати масив всіх значень (зарплат) з об’єкта salaries.
// Це допомагає нам отримати доступ до зарплат кожного співробітника.
// Цей метод приймає об'єкт як аргумент і повертає масив його значень (значення властивостей об'єкта).
// Object - це вбудований об'єкт в JavaScript, який має властивості та методи для роботи з об'єктами.
// values - это переменная, которая содержит массив значений перечисляемых свойств объекта salaries
// salaries - це об'єкт, який містить ім'я співробітника як ключ та відповідну зарплату як значення.
// Object.values(salaries) - Метод, який приймає об'єкт (salaries) і повертає масив його значень (в даному випадку, масив зарплат).

//! 3 - (for (const salary of values)
//salary: Це масив, який ми отримали за допомогою методу Object.values(salaries). У нашому випадку, це масив зарплат співробітників.
//for...of: Це спеціальна структура циклу , яка призначена для ітерації через значення масиву (або іншої ітерабельної структури).
//^ const salary of values - Цей синтаксис означає, що для кожного елемента (salary) в масиві (values) буде виконано наступний блок коду.=>
//^=> totalSalary += salary; - Кожне значення (salary) додається до змінної totalSalary
//Отже, кожна ітерація циклу додає зарплату кожного співробітника до загальної суми (totalSalary).
// Після завершення циклу ми отримуємо суму всіх зарплат, яка зберігається в змінній totalSalary.
//
//^ ================================================

//! ======================================= Масив об’єктів ===============================================================================
//Масив colors містить колекцію кольорів. Кожен колір представлений об'єктом і має властивості hex і rgb
// з відповідними для цього формату і кольору значеннями.
//Перебери масив об'єктів colors, використовуючи цикл for...of.
//Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

// Перебір масиву об'єктів colors за допомогою циклу for...of/
//Щоб заповнити масиви hexColors і rgbColors значеннями кольорів з масиву colors,

//Цей код пройде крізь кожен об'єкт у масиві colors, витягне значення hex та rgb і додасть їх до відповідних масивів hexColors та rgbColors.
//Результатом буде вивід двох масивів, які містять значення кольорів у форматах HEX та RGB.

for (const color of colors) {
  // Додавання значень до відповідних масивів
  hexColors.push(color.hex);
  // Додавання значення властивості до масиву rgbColors
  rgbColors.push(color.rgb);
}
//^ =================================================

// Функція getProductPrice(productName) приймає один параметр productName - назва продукту.
// Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.
// Доповни код функції так, щоб вона шукала об'єкт продукту з певним ім'ям (властивість name) в масиві products і повертала його ціну (властивість price).
// Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

function getProductPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  //* Цей код перебирає масив products та порівнює ім'я кожного продукту з вказаним productName.

  for (const product of products) {
    //* Порівнюємо ім'я продукту
    //* product.name и product.price - это свойства объекта (product), который является элементом массива (products).
    //* product.name - это свойство объекта product, которое содержит имя продукта,
    //* а product.price - это свойство объекта product, которое содержит цену продукта
    //* при переборі масиву (products) кожний (product) є об'єктом, який містить властивості (name, price, quantity).
    //* За допомогою виразу (product.name) ви отримуєте значення властивості (name) для конкретного продукту =>
    //^ => (в умові завдання, що вище)...так, щоб вона (функція) шукала об'єкт продукту з певним ім'ям\властивістю (властивість name) в масиві (products)
    //* аналогічно для product.price.

    if (product.name === productName) {
      //* Якщо ім'я співпадає, повертаємо ціну продукту
      return product.price;
    }
  }
  //* Якщо не знайдено продукт із вказаним ім'ям, повертаємо null
  return null;
}
//! ======================================= Метод об’єктів ================================

//^ ============== Зміна за посиланням ===================================
// const bookShelf = {
//     books: ["The Last Kingdom"],
//     getBooks() {
//         return this.books;
//     },
//     addBook(bookName) {
//         this.books.push(bookName);
//     }
// };
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks());

// //*const bookShelf = {
//     //^Здесь создается (ОБЪЕКТ) с именем bookShelf.
//     //^Он содержит свойства(в данном случае books) и
//     //^методы(в данном случае getBooks и addBook).
// //*books: ["The Last Kingdom"],
//     //^Массив книг:
//     //^Внутри объекта bookShelf есть свойство books,
//     //^которое представляет собой массив книг.
//     //^В данном случае, массив начинается с книги "The Last Kingdom".
// //*getBooks() {
//         //^ getBooks - это метод объекта bookShelf,
//         //^который возвращает массив книг, хранящийся в свойстве (books.)
//         //^(this) в данном контексте ссылается на сам объект bookShelf.
// //*     return this.books;},
//  //* addBook(bookName) {
//         //^addBook - это метод объекта bookShelf,
//         //^который принимает аргумент bookName и добавляет его в конец массива books.
//         //^Таким образом, этот метод предназначен для добавления новых книг на полку.
// //*this.books.push(bookName);
// //*     }
// //*};
// //^Добавление книг на полку:
// //^Здесь вызываются методы addBook для добавления
// //^ двух новых книг("The Mist" и "Dream Guardian") на полку.
// //*bookShelf.addBook("The Mist");
// //*bookShelf.addBook("Dream Guardian");
// //*console.log(bookShelf.getBooks());

const atTheOldToad = {
  potions: ["Speed potion", "Stone skin"],
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    this.potions.push(potionName);
  },
};
//^ ========================================
const bookShelf = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 }
  ],
  getBooks() {
    return this.books;
  }
};

//% Объявление объекта:
//  const bookShelf = {
//   1 - Создается объект с именем bookShelf.
// В данном случае, объект представляет книжную полку.

//  2 - Массив книг:

// books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 }
//   ],
//   Внутри объекта bookShelf есть свойство books, представляющее собой массив объектов.
//   Каждый объект в массиве представляет одну книгу
//   и содержит свойства title(название книги) и rating(рейтинг книги).
//  В данном примере на полке уже есть две книги: "The Last Kingdom" с рейтингом 8 и "The Mist" с рейтингом 6.

// 3 - Метод getBooks:

//     getBooks() {
//     return this.books;
//   }
// getBooks - это метод объекта bookShelf, который возвращает массив книг, хранящихся в свойстве books.
//    Таким образом, этот метод предназначен для получения списка книг на полке.

// 4 - Использование объекта:

// console.log(bookShelf.getBooks());
// Здесь вызывается метод getBooks для получения текущего списка книг на полке,
//  и результат выводится в консоль.

// В итоге, этот код представляет объект, моделирующий книжную полку.
// Он содержит информацию о книгах(название и рейтинг) и предоставляет метод для получения списка книг.

//! ============== Масив об’єктів ==========================================================================
//^ ============== Перебор масиву та повернення значень (return) ===========================================


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;

//     for (const potion of this.potions) { //^В этой строке начинается цикл for...of.
//        //^Он предназначен для итерации по каждому элементу массива this.potions (т.е. там где ...potions: []....)
//       //^ Переменная potion принимает значение текущего элемента массива
//       //^ (например при первой итерации (name: "Speed potion", price: 460)) на каждой итерации.
//       totalPrice += potion.price;
//     }

//     return totalPrice;
//   },
// };

// //*const atTheOldToad = {
// //^Здесь создается объект atTheOldToad, который представляет лавку зелий

// //*potions: [
// //*{ name: "Speed potion", price: 460 },
// //*{ name: "Stone skin", price: 520 },],
// //^ Внутри объекта atTheOldToad есть свойство potions, представляющее собой [массив объектов].
// //^ Каждый объект представляет одно зелье и содержит свойства name(название зелья) и price(цена зелья).

// //*getPotions() {
// //*return this.potions;},
// //^ getPotions - это метод объекта atTheOldToad, который возвращает массив зелий, хранящихся в свойстве potions.

// //*addPotion(newPotion) {
// //*this.potions.push(newPotion);},
// //^ addPotion - это метод объекта atTheOldToad, который принимает параметр newPotion (новое зелье)
// //^ и добавляет его в конец массива зелий в свойстве potions.

// //*getTotalPrice() {
// //*let totalPrice = 0;
// //*for (const potion of this.potions) {
// //*totalPrice += potion.price;}
// //*return totalPrice;},
// //^ getTotalPrice - это метод объекта atTheOldToad,
// //^ который вычисляет и возвращает общую стоимость всех зелий в массиве potions.
// //^ Используется цикл for...of, чтобы пройти по каждому зелью и сложить цены.
// //?============================================================================================================================

//^ ============== Зміна об'єкта в масиві ============================================================================

//  Об'єкт atTheOldToad має наступні властивості:
// potions — масив об'єктів зілль
// getPotions() — метод, який повертає значення властивості potions
// updatePotionName() — метод, який приймає два параметра рядків oldName і newName
// Доповни метод updatePotionName(oldName, newName) таким чином,
// щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//   },
// };

// Після першого виклику методу atTheOldToad.updatePotionName("Stone skin", "Invisibility"),
// у властивості potions буде масив[{ name: "Speed potion", price: 460 }, { name: "Invisibility", price: 520 }]
// Після другого виклику методу atTheOldToad.updatePotionName("Speed potion", "Polymorth"),
// у властивості potions буде масив[{ name: "Polymorth", price: 460 }, { name: "Invisibility", price: 520 }]
//?============================================================================================================================