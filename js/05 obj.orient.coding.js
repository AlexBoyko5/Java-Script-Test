//!====================   Об'єктно-орієнтоване програмування  ================================================================

//^====================   Контекст виконання ф-ції ===========================================================================

// Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this в місцях звернення до властивостей і методів об'єкта.
// Метод checkPizza об'єкта pizzaPalace використовує this
// Метод order об'єкта pizzaPalace використовує this
// Виклик pizzaPalace.order("Smoked") повертає рядок "Order accepted, preparing «Smoked» pizza"
// Виклик pizzaPalace.order("Four meats") повертає рядок "Order accepted, preparing «Four meats» pizza"
// Виклик pizzaPalace.order("Big Mike") повертає рядок "Sorry, there is no pizza named «Big Mike»"
// Виклик pizzaPalace.order("Viennese") повертає рядок "Sorry, there is no pizza named «Viennese»"
//^=== умова
// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };
//^=== рішення

// const pizzaPalace = {
//     pizzas: ["Supercheese", "Smoked", "Four meats"],

//     // Метод checkPizza использует this для доступа к свойству pizzas
//     checkPizza(pizzaName) {
//         return this.pizzas.includes(pizzaName);
//     },

//     // Метод order также использует this для вызова checkPizza и обращения к свойству pizzas
//     order(pizzaName) {
//         const isPizzaAvailable = this.checkPizza(pizzaName);

//         // Если пицца недоступна, возвращаем соответствующее сообщение
//         if (!isPizzaAvailable) {
//             return `Sorry, there is no pizza named «${pizzaName}»`;
//         }

//         // В противном случае подтверждаем заказ с названием выбранной пиццы
//         return `Order accepted, preparing «${pizzaName}» pizza`;
//     },
// };
// const user = {
//     username: "Victor",
//     showName() {
//         // ✅ Віктор біжить швидко, тому що він (this) намагається зловити поїзд.
//         console.log(this.username);
//     },
// };
// user.showName();

// Теперь ответим на ваши вопросы:

// Почему не используется this в параметре pizzaName в методе checkPizza ?

//   this в параметре не используется потому, что pizzaName - это просто локальная переменная,
//  которая принимает значение, переданное при вызове метода.
// Значение pizzaName передается методу в виде аргумента при вызове, и this не нужно для его использования в данном контексте.
// return this.pizzas.includes(pizzaName);
// Здесь this.pizzas обращается к свойству pizzas объекта pizzaPalace,
// а pizzaName - это аргумент метода, который используется для проверки вхождения в массив pizzas.

// Почему не используется this в параметре pizzaName в строке const isPizzaAvailable = this.checkPizza(pizzaName);?
// Также, как и в первом случае, this не нужно в параметре pizzaName,
// потому что pizzaName - это просто локальная переменная,
// которая получает значение при вызове метода.this используется для обращения
// к свойствам и методам объекта, а не для передачи аргументов в метод.
// const isPizzaAvailable = this.checkPizza(pizzaName);
// Здесь this.checkPizza(pizzaName) вызывает метод checkPizza объекта pizzaPalace,
// и this внутри этого метода будет ссылаться на сам объект.

//^=============================================================================================================================