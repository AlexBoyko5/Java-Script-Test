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

//~ ======================== //~ ======================== //~ ========================
//^ ==== Добавляем/убираем элем в .classList =================
// const list1 = document.querySelector(".text")
// const heading3 = document.createElement("h3");
// heading3.classList.add("title");
// heading3.textContent = "This is a heading";
// list1.before(heading3);
// console.log(list1);

// const title = document.querySelector(".title")
// title.remove();

//^ ==== Добавляем/изменяем картинки =================
// Изменяем изображение(https://picsum.photos/id/11/320/240) на
//   (https://kartinki.pics/uploads/posts/2022-12/thumbs/1672128931_kartinkin-net-p-fenek-kartinki-krasivo-1.jpg')
//     а потом на (https://kartinki.pics/uploads/posts/2022-12/1672128631_kartinkin-net-p-kartinka-palitra-s-kraskami-instagram-1.jpg)

// Отримати елемент з класом "image"
// const imageElement = document.querySelector('.image');

// Змінити атрибут src
// imageElement.src = 'https://kartinki.pics/uploads/posts/2022-12/thumbs/1672128931_kartinkin-net-p-fenek-kartinki-krasivo-1.jpg';

// Змінити атрибут alt
// imageElement.alt = 'Fox';

// imageElement.setAttribute('src', 'https://kartinki.pics/uploads/posts/2022-12/1672128631_kartinkin-net-p-kartinka-palitra-s-kraskami-instagram-1.jpg');
// imageElement.setAttribute('alt', 'Palitra');
// console.log(imageElement);
// console.log(imageElement.getAttribute('alt'));


//^ ==== Добавляем разметку =================
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

//~ ======================== //~ ======================== //~ ========================


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

//? ===================================================================================
// const gallery = document.querySelector('.gallery');// Отримуємо посилання на елемент ul.gallery/отрим.елемент ul з класом "gallery"
// const images = [ // Масив об'єктів із зображеннями, об'єкти з url та alt для кожного зображення
//     {
//         url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//         alt: 'White and Black Long Fur Cat',
//     },
//     {
//         url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//         alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//     },
//     {
//         url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//         alt: 'Group of Horses Running',
//     },
//     {
//         url:
//             'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//         alt: 'Elephant Beside on Baby Elephant',
//     },
//     {
//         url:
//             'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//         alt: 'Blue Geeen and Orange Parrot',
//     },
//     {
//         url:
//             'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//         alt: 'Zebras on Zebra',
//     },
// ];


// images.forEach(imageData => { // Цикл по кожному об'єкту в масиві images
//     const listItem = document.createElement('li'); // Створюємо новий елемент li
//     const imageElement = document.createElement('img'); // Створюємо новий елемент img
//     imageElement.src = imageData.url;// Додаємо атрибути src та alt до зображення з даних об'єкта
//     imageElement.alt = imageData.alt;// Додаємо атрибути src та alt до зображення з даних об'єкта
//     imageElement.classList.add('gallery-image'); // Додаємо клас 'gallery-image' до зображення
//     listItem.appendChild(imageElement); // Додаємо зображення в елемент li
//     gallery.appendChild(listItem); // Додаємо зображення в елемент ul
// });

// gallery.style.listStyle = 'none';
// gallery.style.display = 'flex';
// gallery.style.justifyContent = 'center';
// gallery.style.alignItems = 'center';
// gallery.style.flexWrap = 'wrap';
// gallery.style.gap = '10px';

// const galleryImages = document.querySelectorAll('.gallery-image'); // Отримати всі елементи li з класом "gallery-image"
// galleryImages.forEach(image => {// Налаштувати стилі для кожного елемента
//     image.style.width = '300px';
//     image.style.height = '200px';
//     image.style.border = '2px solid black';
//     image.style.borderRadius = '10px';
// });
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
//&===================== Мой вариант===========================
const inputElem = document.querySelector('#name-input');// Отримуємо елементи input та span
const spanElem = document.querySelector('#name-output');
inputElem.addEventListener("input", onInputFill);// Додаємо обробник події input до inputElem
function onInputFill() { // Створюємо функцію, яка буде викликатися при зміні значення інпуту
    const inputValue = inputElem.value.trim();// Отримуємо значення інпуту,без пробе в нач и конце-trim()
    if (inputValue === "") { // Якщо інпут порожній або містить лише пробіли, то виводимо "Anonymous"
        spanElem.textContent = 'Anonymous';
    } else {
        spanElem.textContent = inputValue;// Інакше виводимо значення інпуту
    }
};
//&===================== Variannt 1===========================
// // Отримуємо елементи input та span
// const nameInput = document.getElementById('name-input');
// const nameOutput = document.getElementById('name-output');

// // Додаємо обробник події input до input#name-input
// nameInput.addEventListener('input', function () {
//     // Отримуємо поточне значення ім'я (очищене від пробілів)
//     const nameValue = nameInput.value.trim();

//     // Перевіряємо, чи ім'я не порожнє або не містить лише пробіли
//     // Якщо так, встановлюємо значення "Anonymous", інакше встановлюємо поточне ім'я
//     nameOutput.textContent = nameValue === '' ? 'Anonymous' : nameValue;
// });
// Отримуємо елементи: Ми отримуємо елементи input та span за допомогою їх ідентифікаторів.

// Додаємо обробник події input: Ми додаємо обробник події input до input#name - input, який викликається кожен раз, коли користувач вводить текст.

// Отримуємо поточне значення ім'я: Ми отримуємо поточне значення з інпуту та очищаємо його від пробілів по краях за допомогою методу trim().

// Перевіряємо умову і встановлюємо значення: Ми перевіряємо, чи ім'я не порожнє або не містить лише пробіли. Якщо умова виконується, ми встановлюємо значення "Anonymous", інакше ми встановлюємо поточне ім'я.

//&===================== Variannt 2===========================

// // Отримуємо доступ до елементів DOM
// const input = document.querySelector('#name-input');
// const output = document.querySelector('#name-output');

// // Створюємо функцію, яка буде викликатися при зміні значення інпуту
// function handleInputChange(event) {
//     // Отримуємо значення інпуту
//     const inputValue = event.target.value.trim();

//     // Якщо інпут порожній або містить лише пробіли, то виводимо "Anonymous"
//     if (inputValue === '') {
//         output.textContent = 'Anonymous';
//     } else {
//         // Інакше виводимо значення інпуту
//         output.textContent = inputValue;
//     }
// }

// // Додаємо обробник події input на інпут
// input.addEventListener('input', handleInputChange);

// Цей код отримує доступ до елементів input#name - input та span#name - output за допомогою методу document.querySelector().Далі створюється функція handleInputChange, яка буде викликатися при зміні значення інпуту.В цій функції отримується значення інпуту за допомогою властивості event.target.value, після чого воно очищається від пробілів по краях за допомогою методу trim().Якщо інпут порожній або містить лише пробіли, то виводимо “Anonymous”, інакше виводимо значення інпуту.

//  Нарешті, за допомогою методу addEventListener() додаємо обробник події input на інпут, який буде викликати функцію handleInputChange при зміні значення інпуту.




//!====================== TASK#4 =============================
//&===================== Мой вариант===========================
// const logForm = document.querySelector(".login-form"); // Отримуємо форму за класом .login-form
// logForm.addEventListener("submit", event => {// Додаємо обробник події submit до форми
//     event.preventDefault(); // Забороняємо стандартну поведінку форми (перезавантаження сторінки)

//     const emailInput = logForm.elements.email; // Отримуємо значення полів форми за допомогою властивості elements
//     const passwordInput = logForm.elements.password;

//     const emailValue = emailInput.value.trim(); // Отримуємо значення полів та очищаємо їх від пробілів по краях
//     const passwordValue = passwordInput.value.trim();


//     if (emailValue === "" || passwordValue === "") { // Перевіряємо, чи всі поля заповнені
//         alert("All form fields must be filled in!");// Виводимо повідомлення, якщо є незаповнені поля
//     }
//     else {
//         const logFormData = {// Інакше зберігаємо значення полів у змінну formData
//             email: emailValue,
//             password: passwordValue,
//         };
//         console.log(logFormData);// Виводимо formData в консоль
//     }
//     logForm.reset();// Очищаємо значення полів та форми
// });
//&===================== Variannt 1===========================
// Отримуємо посилання на форму та її елементи
// const loginForm = document.querySelector('.login-form');
// const emailInput = loginForm.elements['email'];
// const passwordInput = loginForm.elements['password'];

// Додаємо слухач події submit на формі
// loginForm.addEventListener('submit', function (event) {
// Забороняємо стандартну поведінку форми (перезавантаження сторінки)
// event.preventDefault();

// Отримуємо значення полів та очищаємо їх від пробілів по краях
// const emailValue = emailInput.value.trim();
// const passwordValue = passwordInput.value.trim();

// Перевіряємо, чи усі поля заповнені
// if (emailValue === '' || passwordValue === '') {
// Виводимо повідомлення, якщо є незаповнені поля
// alert('All form fields must be filled in');
// } else {
// Створюємо об'єкт із введеними даними
// const formData = {
//     email: emailValue,
//     password: passwordValue
// };

// Виводимо об'єкт у консоль
// console.log(formData);

// Очищаємо значення полів та форми
//         loginForm.reset();
//     }
// });
// Основна ідея: Спочатку отримуємо посилання на форму та її елементи.
// Додаємо слухач події submit на формі, який перехоплює відправку форми.
// Забороняємо стандартну поведінку форми для того, щоб сторінка не перезавантажувалася
// Перевіряємо, чи всі поля заповнені.Якщо ні, виводимо повідомлення; якщо так,
//     створюємо об'єкт із введеними даними, виводимо його у консоль 
// та очищаємо значення полів та саму форму.

//&===================== Variannt 2===========================
// Отримуємо форму за класом .login-form
// const loginForm = document.querySelector('.login-form');

// Додаємо обробник події submit до форми
// loginForm.addEventListener('submit', (event) => {
// Запобігаємо перезавантаженню сторінки
// event.preventDefault();

// Отримуємо значення полів форми за допомогою властивості elements
// const emailInput = loginForm.elements.email;
// const passwordInput = loginForm.elements.password;

// Перевіряємо, чи всі поля заповнені
// if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
// Якщо якесь поле порожнє, виводимо повідомлення про помилку за допомогою alert()
//     alert('All form fields must be filled in');
// } else {
// Інакше зберігаємо значення полів у змінну formData
// const formData = {
//     email: emailInput.value.trim(),
//     password: passwordInput.value.trim(),
// };
// Виводимо formData в консоль
// console.log(formData);
// Очищаємо поля форми методом reset()
// loginForm.reset();
//     }
// });


//!====================== TASK#5 =============================
// Отримуємо посилання на елементи DOM
const bodyElement = document.body;
const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

// Функція для генерації випадкового кольору в hex-форматі
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
}

// Додаємо слухач події click на кнопку
changeColorButton.addEventListener('click', function () {
    // Генеруємо випадковий колір
    const randomColor = getRandomHexColor();

    // Змінюємо фон body на випадковий кольор
    bodyElement.style.backgroundColor = randomColor;

    // Встановлюємо текстовий вміст для span.color
    colorSpan.textContent = randomColor;

    // Додатково можна вивести кольор у консоль
    console.log('Selected color:', randomColor);
});

Отримання елементів DOM: Отримуємо посилання на елементи body, span.color і button.change - color.
Функція getRandomHexColor(): Ця функція генерує випадковий колір у форматі hex.
Слухач події click: Додаємо слухач події click на кнопку "Change color".
Зміна кольору: При кожному кліку на кнопку генеруємо випадковий колір, змінюємо фон body та встановлюємо цей колір як текстовий вміст для span.color.
Додаткова інформація: Звертаємо увагу на те, що зміна фону на body відбувається тільки після кліку на кнопку.

//&===================== Variannt 2===========================
// Отримуємо кнопку з класом .change-color
const changeColorButton = document.querySelector('.change-color');

// Додаємо обробник події click до кнопки
changeColorButton.addEventListener('click', () => {
    // Генеруємо випадковий колір
    const randomColor = getRandomHexColor();

    // Задаємо випадковий колір як фоновий колір елемента <body>
    document.body.style.backgroundColor = randomColor;

    // Змінюємо текстовий вміст елемента з класом .color на значення згенерованого кольору
    const colorSpan = document.querySelector('.color');
    colorSpan.textContent = randomColor;
});

// Функція для генерації випадкового кольору у hex-форматі
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}



//!====================== TASK#6 =============================


// Отримуємо посилання на елементи DOM
const inputElement = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesDiv = document.getElementById('boxes');

// Додаємо слухач подій на кнопку "Create"
createButton.addEventListener('click', createBoxes);

// Додаємо слухач подій на кнопку "Destroy"
destroyButton.addEventListener('click', destroyBoxes);

// Функція для створення блоків
function createBoxes() {
    // Отримуємо кількість блоків, яку ввів користувач
    const numberOfBoxes = inputElement.value;

    // Провіряємо, чи кількість в межах діапазону 1-100
    if (numberOfBoxes < 1 || numberOfBoxes > 100) {
        alert('Please enter a number between 1 and 100.');
        return;
    }

    // Очищаємо div#boxes перед створенням нових блоків
    destroyBoxes();

    // Створюємо масив блоків та додаємо їх до div#boxes
    const boxesArray = createBoxesArray(numberOfBoxes);
    boxesDiv.append(...boxesArray);

    // Очищаємо значення в input
    inputElement.value = '';
}

// Функція для створення масиву блоків
function createBoxesArray(numberOfBoxes) {
    const boxesArray = [];

    // Створюємо блоки та додаємо їх до масиву
    let size = 30;
    for (let i = 0; i < numberOfBoxes; i++) {
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        size += 10;

        boxesArray.push(box);
    }

    return boxesArray;
}

// Функція для очищення div#boxes
function destroyBoxes() {
    boxesDiv.innerHTML = '';
}

// Функція для отримання випадкового кольору
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
}


//&===================== Variannt 2===========================
// Отримуємо елементи з DOM
const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

// Додаємо обробник події click до кнопки Create
createButton.addEventListener('click', () => {
    // Провалідовуємо значення в input
    const amount = Number(input.value);
    if (amount >= 1 && amount <= 100) {
        // Викликаємо функцію createBoxes() з вказаною кількістю елементів для рендеру
        createBoxes(amount);
        // Очищаємо значення в input
        input.value = '';
    }
});

// Додаємо обробник події click до кнопки Destroy
destroyButton.addEventListener('click', () => {
    // Очищаємо всі елементи в div#boxes
    destroyBoxes();
});

// Функція для рендеру елементів на сторінці
function createBoxes(amount) {
    // Розміри першого <div> елемента
    let size = 30;

    for (let i = 0; i < amount; i++) {
        // Створюємо новий <div> елемент
        const box = document.createElement('div');
        // Задаємо розміри та випадковий колір фону
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        // Додаємо елемент у DOM дочірніми елементами для div#boxes
        boxesContainer.appendChild(box);
        // Збільшуємо розміри для наступного елемента
        size += 10;
    }
}

// Функція для очищення всіх елементів в div#boxes
function destroyBoxes() {
    boxesContainer.innerHTML = '';
}

// Функція для генерації випадкового кольору у hex-форматі
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}


//^=====================================================================================================
