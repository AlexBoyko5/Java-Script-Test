// const bookShelf = {
//     books: ["The Last Kingdom", "The Mist"],
//     getBooks() {
//         return this.books;
//     }
// };
// console.log(bookShelf.getBooks());
//!============================================/
// const atTheOldToad = {
//     potions: ["Speed potion", "Stone skin"],
//     getPotions() {
//         return "List of all available potions";
//     },
// };
// console.log(atTheOldToad.getPotions())
//!============================================/
// const bookShelf = {
//     books: ["The Last Kingdom"],
// };
// bookShelf.books.push("The Mist");
// console.log(bookShelf.books);
//!============================================/

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
//     //^Он содержит СВОЙСТВА(в данном случае books) и
//     //^МЕТОДЫ (в данном случае getBooks и addBook).
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

// function foo(...args) {
//     console.log(args);
// }
// foo("a", "b");
// console.log(foo);