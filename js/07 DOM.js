//~ ========================  Створення елементів ================================================================================
//^ ==== Створення заголовку =================
// const heading = document.createElement("h3");
// heading.classList.add("title");
// heading.textContent = "This is a heading";
// console.log(heading);
//^ ==== Створення картинки =================
// const image = document.createElement("img");
// image.src = "<https://picsum.photos/id/11/320/240>";
// image.alt = "Nature";
// console.log(image); // <img src="<https://picsum.photos/id/11/320/240>" alt="Nature" />

// const list1 = document.querySelector(".text")
// const heading3 = document.createElement("h3");
// heading3.classList.add("title");
// heading3.textContent = "This is a heading";
// list1.before(heading3);
// console.log(list1);

// const title = document.querySelector(".title")
// title.remove();

// const image = document.createElement("img");
// image.src = "<https://picsum.photos/id/11/320/240>";
// image.alt = "Nature";
// console.log(image); //<img src="<https://picsum.photos/id/11/320/240>" alt="Nature" />
//? =====================================================================
// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;

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
// const categories = document.querySelector('#categories');

// Отримую список всіх елементів li.item у списку ul#categories
// const items = categories.querySelectorAll('.item');

// Виводжу кількість категорій в консоль
// console.log(`Количество категорий: ${items.length}`);

// Для кожного елемента li.item у списку ul#categories
// items.forEach(item => {
// Знаходжу текст заголовка елемента (тегу <h2>)
// const title = item.querySelector('h2').textContent;

// Знаходжу кількість елементів у категорії (усіх <li>, вкладених у нього)
// const count = item.querySelectorAll('li').length;

// Виводжу текст заголовка та кількість елементів у категорії в консоль
//console.log(`Category: ${title}`);
//console.log(`Number of categories: ${count}`)
// });
//?==== Variant#2 =================================================

// const categoriesList = document.getElementById('categories');

// const categoryItems = categoriesList.querySelectorAll('li.item');

// console.log('Кількість категорій:', categoryItems.length);

//categoryItems.forEach(category => {
// Отримуємо текст заголовка (h2) поточної категорії
// const categoryName = category.querySelector('h2').textContent;

// Отримуємо всі елементи li в поточній категорії
// const categoryElements = category.querySelectorAll('ul > li');

// Виводимо в консоль інформацію про категорію (заголовок та кількість елементів)
// console.log(`Категорія: ${categoryName}`);
// console.log(`Кількість елементів у категорії ${categoryName}: ${categoryElements.length}`);
// console.log('---'); // Роздільна лінія між категоріями для зручності
// });

// Отримання елементів: Ми використовуємо document.getElementById('categories'), щоб отримати доступ
// до списку категорій(ul#categories).
// Підрахунок категорій: Ми використовуємо querySelectorAll('li.item'), щоб знайти всі елементи
// списку з класом "item", тобто всі категорії.Потім виводимо кількість цих категорій у консоль.
// Обробка кожної категорії: Ми використовуємо цикл forEach, щоб пройтися по кожній категорії.
// Отримання тексту заголовка: Ми використовуємо querySelector('h2').textContent,
// щоб отримати текст заголовка кожної категорії.
// Підрахунок елементів у категорії: Ми використовуємо querySelectorAll('ul > li'),
// щоб знайти всі елементи списку(li) в поточній категорії.Потім виводимо кількість цих елементів у консоль.
// Виведення результатів: Ми виводимо у консоль інформацію про кожну категорію,
// таку як заголовок та кількість елементів у кожній категорії.

// Давайте подробніше розглянемо конструкцію categoryItems.forEach(category => {:

// categoryItems: Це змінна, яку ми створили раніше, використовуючи
// const categoryItems = categoriesList.querySelectorAll('li.item');.
//  Вона містить усі елементи з класом "item" зі списку категорій.
// forEach: Це метод JavaScript, який викликає задану функцію один раз для
// кожного елемента в масиві(в нашому випадку - для кожної категорії).
// category => {: Це стрілкова функція, яка приймає один аргумент, який представляє
//  елемент масиву(у нашому випадку - категорію).Така стрілкова функція є скороченим
//  варіантом написання функції, і вона дозволяє лаконічно визначити функцію з одним виразом.

// Тепер розглянемо тіло стрілкової функції:
// const categoryName = category.querySelector('h2').textContent;:
// Тут ми використовуємо метод querySelector, щоб знайти перший елемент з тегом "h2"
// всередині поточної категорії.Потім витягуємо текст цього елемента, використовуючи.textContent,
// і призначаємо його змінній categoryName.Це дає нам текст заголовка поточної категорії.
// const categoryElements = category.querySelectorAll('ul > li');:
// Тут ми використовуємо querySelectorAll, щоб знайти всі елементи списку(li),
// які знаходяться безпосередньо в середині поточної категорії.Результатом є NodeList(псевдомасив)
// всіх таких елементів, і ми призначаємо його змінній categoryElements.
// Виведення інформації в консоль: В останніх двох рядках виводимо в консоль інформацію
// про поточну категорію, таку як ім'я категорії та кількість елементів у ній.


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


// const galleryContainer = document.querySelector('.gallery');// Отримуємо посилання на елемент ul.gallery

// const images = [ // Масив об'єктів із зображеннями
//     // об'єкти з url та alt для кожного зображення
//     // ...
// ];

// images.forEach(imageData => { // Цикл по кожному об'єкту в масиві images
//     const listItem = document.createElement('li'); // Створюємо новий елемент li
//     const imageElement = document.createElement('img'); // Створюємо новий елемент img
//     imageElement.src = imageData.url; // Додаємо атрибути src та alt до зображення з даних об'єкта
//     imageElement.alt = imageData.alt; // Додаємо атрибути src та alt до зображення з даних об'єкта
//     imageElement.classList.add('gallery-image'); // Додаємо клас 'gallery-image' до зображення
//     listItem.appendChild(imageElement); // Додаємо зображення в елемент li
//     galleryContainer.appendChild(listItem); // Додавання напряму до контейнера
// });

// Щоб додати мінімальне оформлення галереї флексбоксами через CSS класи,
// .gallery {
//     display: flex;
//     flex - wrap: wrap;
//     gap: 16px;
// }

// .gallery li {
//     flex - basis: calc(33.33 % - 16px);
// }
//? ===================================================================================
// // Отримуємо посилання на список ul.gallery
// const gallery = document.querySelector('.gallery');

// // Створюємо порожній рядок, в якому будемо збирати HTML-код для галереї
// let galleryHTML = '';

// // Проходимо по кожному об'єкту в масиві images за допомогою циклу for...of
// for (const image of images) {
//     // Для кожного об'єкта витягуємо його властивості url і alt
//     const { url, alt } = image;

//     // Створюємо HTML-код для елемента <img> з атрибутами src і alt, використовуючи шаблонні рядки
//     const imgHTML = `<img src="${url}" alt="${alt}">`;

//     // Створюємо HTML-код для елемента <li>, в який вкладаємо елемент <img>
//     const liHTML = `<li>${imgHTML}</li>`;

//     // Додаємо HTML-код для елемента <li> до рядка galleryHTML
//     galleryHTML += liHTML;
// }

// // Вставляємо HTML-код для галереї в список ul.gallery за допомогою методу insertAdjacentHTML
// gallery.insertAdjacentHTML('beforeend', galleryHTML);

// // Додаємо CSS-класи для оформлення галереї флексбоксами
// gallery.classList.add('flex-gallery');

// /* Створюємо CSS-клас flex-gallery, який задає властивості для галереї */
// .flex - gallery {
//     /* Встановлюємо тип відображення елемента як флексбокс */
//     display: flex;

//     /* Вирівнюємо елементи галереї по горизонталі */
//     justify - content: center;

//     /* Вирівнюємо елементи галереї по вертикалі */
//     align - items: center;

//     /* Дозволяємо елементам галереї переноситися на новий рядок, якщо не вміщуються */
//     flex - wrap: wrap;

//     /* Задаємо відступи між елементами галереї */
//     gap: 10px;
// }

// /* Задаємо стилі для елементів <img> в галереї */
// .flex - gallery img {
//     /* Встановлюємо ширину зображення */
//     width: 300px;

//     /* Встановлюємо висоту зображення */
//     height: 200px;

//     /* Задаємо рамку для зображення */
//     border: 2px solid black;

//     /* Задаємо радіус для рамки */
//     border - radius: 10px;
// }

//  пояснення виконання завдання:

// Ти хочеш створити галерею зображень, яка буде виглядати як рядок картинок, які можуть
// переноситися на новий рядок, якщо не поміщаються на екрані.
// У тебе є список ul.gallery, в який ти хочеш додати картинки.У тебе також є масив
// об’єктів images, в якому зберігаються дані про картинки, такі як їх адреси і описи.
// Ти можеш використовувати мову програмування JavaScript, щоб написати скрипт,
//     який буде створювати і додавати картинки в список.
// Скрипт складається з кількох кроків:
// Отримати посилання на список ul.gallery, щоб можна було з ним працювати.
// Створити порожній рядок, в якому будемо збирати HTML - код для галереї.
//     HTML - код - це спосіб описати, як мають виглядати елементи на сторінці.
// Пройтися по кожному об’єкту в масиві images, щоб отримати дані про картинку.
// Для кожного об’єкта витягнути його властивості url і alt, які містять адресу
// і опис картинки.
// Створити HTML - код для елемента < img >, який буде показувати картинку на сторінці.
// Для цього використати шаблонні рядки, які дозволяють вставляти змінні в рядки.
// Створити HTML - код для елемента < li >, який буде обгортати елемент < img >.
//     Елемент < li > - це пункт списку, який має бути вкладений в елемент < ul >.
// Додати HTML - код для елемента < li > до рядка galleryHTML,
//     щоб збирати HTML - код для всієї галереї.
// Вставити HTML - код для галереї в список ul.gallery, щоб показати його на сторінці.
// Для цього використати метод insertAdjacentHTML,
//     який дозволяє додавати HTML - код до елемента в певному місці.
// Додати CSS - класи для оформлення галереї флексбоксами.
//     CSS - класи - це спосіб задати стилі для елементів, такі як колір, розмір,
//     відступи і т.д.Флексбокси - це спосіб розташувати елементи в рядок або стовпчик,
//         який автоматично пристосовується до розміру екрана.

//!====================== TASK#3 =============================
//!====================== TASK#4 =============================
//!====================== TASK#5 =============================
//!====================== TASK#6 =============================

