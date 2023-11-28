//^  Оголоси змінну fruits. Надай змінній fruits наступне значення: масив фруктів - рядків "apple", "plum", "pear" і "orange". 
//^ Оголошена змінна fruits 
//^ Значення змінної fruits - це масив ["apple", "plum", "pear", "orange"]

const fruits = ["apple", "plum", "pear", "orange",];
==============================================================================================================================
//*Оголоси три змінні і надай кожній змінній відповідне значення, використовуючи нотацію квадратних дужок.
//^ Ім'я змінної	Значення змінної
//^firstElement-перший елемент масиву
//^ secondElement-другий елемент масиву
//^ lastElement-останній елемент масиву
//^  Значення змінної firstElement - це рядок "apple"
//^  Значення змінної secondElement - це рядок "plum"
//^  Значення змінної lastElement - це рядок "orange"

const fruits = ["apple", "plum", "pear", "orange"];
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];
===============================================================================================================================
//*Виконай перевизначення значення елементів з індексами 1 і 3. Заміни "plum" на "peach", а "orange" на "banana".
//^Оголошена змінна fruits
//^Значення змінної fruits - це масив ["apple", "peach", "pear", "banana"]

const fruits = ["apple", "plum", "pear", "orange"];
fruits[1] = "peach";
fruits[3] = "banana";
======================================================================================================================================
//*Функція getOrderQuantity(order) приймає один параметр order - масив рядків, які описують продукти в замовленні клієнта.
//*Доповни код функції таким чином, щоб вона повертала число, що дорівнює кількості елементів масиву.
//^Виклик getOrderQuantity(["apple", "peach", "pear", "banana"]) повертає 4
//^Виклик getOrderQuantity(["apple", "banana"]) повертає 2
//^Виклик getOrderQuantity(["apple", "banana", "pear"]) повертає 3
//^Виклик getOrderQuantity([]) повертає 0

function getOrderQuantity(order) {
    return order.length;
  }
 ===============================================================================================================================
//*Функція getLastElementMeta(array) приймає один параметр array - масив довільних значень.
//*Доповни код функції таким чином, щоб вона повертала новий масив з двох елементів:
//*перший елемент - це індекс останнього елементу у масиві array
//*другий елемент - це значення останнього елементу у масиві array
//^Виклик getLastElementMeta(["apple", "peach", "pear", "banana"]) повертає [3, "banana"]
//^Виклик getLastElementMeta(["apple", "peach", "pear"]) повертає [2, "pear"]
//^Виклик getLastElementMeta(["apple", "peach"]) повертає [1, "peach"]
//^Виклик getLastElementMeta(["apple"]) повертає [0, "apple"]

function getLastElementMeta(array) {
    // Отримуємо індекс останнього елементу
    const lastElementIndex = array.length - 1;
    // Отримуємо значення останнього елементу у масиві array
     const lastElementItem = array[lastElementIndex];
     // Повертаємо результат
    return [lastElementIndex, lastElementItem];
  }
================================================================================================================================
//*Функція getExtremeElements(array) приймає один параметр array - масив елементів довільної довжини. 
//*Доповни код функції таким чином, щоб вона повертала масив з двох елементів - першого і останнього елементів параметра array.
//^Виклик getExtremeElements([1, 2, 3, 4, 5]) повертає [1, 5]
//^Виклик getExtremeElements(["Earth", "Mars", "Venus"]) повертає ["Earth", "Venus"]
//^Виклик getExtremeElements(["apple", "peach", "pear", "banana"]) повертає ["apple", "banana"]

function getExtremeElements(array) {
    const firstElement = array[0];
    const lastElement = array[array.length - 1];
    return [firstElement, lastElement];
  }
=============================================================================================================================
//~Примітиви це - рядки, числа, буль, null і undefined
=============================================================================================================================
//*
//^