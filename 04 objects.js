
=============================================================================================================================
//~Обчислювальні (computed) властивості в JavaScript дозволяють вам динамічно визначати імена властивостей об'єкта під час його створення.
//~ Це корисно, коли ви хочете використовувати змінні або обчислювальні вирази для визначення імен властивостей.
//~Синтаксис обчислювальних властивостей виглядає так:

// Синтаксис обчислювальних властивостей
const obj = {
  [вираз]: значення,
  // або
  [вираз_для_імені_властивості](): {
    // ...
  }
};

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

=============================================================================================================================
//^Перебір об'єкта, Цикл for...in, Метод Object.keys()

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