//~ ========================  Д/З БЛОК#7 =========================================================================================

//!======================  Initial HTML

// < !DOCTYPE html >
//     <html lang="en">
//         <head>
//             <meta charset="UTF-8" />
//             <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//             <title>Homework 7</title>
//             <link rel="stylesheet" href="css/common.css" />
//         </head>
//         <body>
//             <ul>
//                 <li><a href="task-1.html">Task 1</a></li>
//                 <li><a href="task-2.html">Task 2</a></li>
//                 <li><a href="task-3.html">Task 3</a></li>
//                 <li><a href="task-4.html">Task 4</a></li>
//                 <li><a href="task-5.html">Task 5</a></li>
//                 <li><a href="task-6.html">Task 6</a></li>
//             </ul>
//         </body>
//     </html>

//!====================== TASK#1 =============================

// З використанням властивостей і методів DOM - елементів, напиши скрипт, який:
// Порахує й виведе в консоль кількість категорій в ul#categories,
// тобто елементів li.item.Для кожного елемента li.item у списку 
// ul#categories знайде й виведе в консоль текст
// заголовка елемента(тегу < h2 >) і кількість елементів у
// категорії(усіх < li >, вкладених у нього).

//  <!DOCTYPE html >
//     <html lang="en">

//         <head>
//             <meta charset="UTF-8" />
//             <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//             <title>Homework 7</title>
//             <link rel="stylesheet" href="css/common.css" />
//         </head>

//         <body>
//             <ul>
//                 <li><a href="task-1.html">Task 1</a></li>
//                 <li><a href="task-2.html">Task 2</a></li>
//                 <li><a href="task-3.html">Task 3</a></li>
//                 <li><a href="task-4.html">Task 4</a></li>
//                 <li><a href="task-5.html">Task 5</a></li>
//                 <li><a href="task-6.html">Task 6</a></li>
//             </ul>
//         </body>

//     </html> 

// Отримую список всіх елементів ul#categories
const categories = document.querySelector('#categories');

// Отримую список всіх елементів li.item у списку ul#categories
const items = categories.querySelectorAll('.item');

// Виводжу кількість категорій в консоль
console.log(`Количество категорий: ${items.length}`);

// Для кожного елемента li.item у списку ul#categories
items.forEach(item => {
    // Знаходжу текст заголовка елемента (тегу <h2>)
    const title = item.querySelector('h2').textContent;

    // Знаходжу кількість елементів у категорії (усіх <li>, вкладених у нього)
    const count = item.querySelectorAll('li').length;

    // Виводжу текст заголовка та кількість елементів у категорії в консоль
    console.log(`${title}: ${count}`);
});
//!====================== TASK#2 =============================

// Напиши скрипт для створення галереї зображень на основі масиву даних.
// HTML містить список ul.gallery.

// < !DOCTYPE html >
//     <html lang="en">
//         <head>
//             <meta charset="UTF-8" />
//             <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//             <title>Task 2</title>
//             <link rel="stylesheet" href="css/common.css" />
//         </head>
//         <body>
//             <p><a href="index.html">Go back</a></p>

//             <ul class="gallery"></ul>

//             <script src="./js/task-2.js" type="module"></script>
//         </body>
//     </html>


// Отримую посилання на елемент ul.gallery
// const gallery = document.querySelector('.gallery');

// Створюю функцію для створення елемента галереї
// const createGalleryItem = ({ url, alt }) => {
//     // Створюю елемент img
//     const img = document.createElement('img');
//     img.src = url;
//     img.alt = alt;

// Створюю елемент li та додаю до нього елемент img
//     const li = document.createElement('li');
//     li.appendChild(img);

//     return li;
// };

// Створюю функцію для додавання елементів галереї до DOM
// const appendGalleryItems = items => {
// Створюю фрагмент документу
//     const fragment = document.createDocumentFragment();

// Додаю кожен елемент галереї до фрагменту
//     items.forEach(item => {
//         const galleryItem = createGalleryItem(item);
//         fragment.appendChild(galleryItem);
//     });

// Додаю фрагмент з усіма елементами галереї до DOM
//     gallery.appendChild(fragment);
// };

// Викликаю функцію для додавання елементів галереї до DOM
// appendGalleryItems(images);

// Щоб додати мінімальне оформлення галереї флексбоксами через CSS класи,
// .gallery {
//     display: flex;
//     flex - wrap: wrap;
//     gap: 16px;
// }

// .gallery li {
//     flex - basis: calc(33.33 % - 16px);
// }





