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
const user = {
    username: "Victor",
    showName() {
        // ✅ Віктор біжить швидко, тому що він (this) намагається зловити поїзд.
        console.log(this.username);
    },
};
user.showName();
