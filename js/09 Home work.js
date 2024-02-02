ЗАДАНИЕ №1 вариант 1

// Сonnect the CSS code of the SimpleLightbox library to our code.
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const gallery = document.querySelector('.gallery')

const images = [
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
        description: "Hokkaido Flower",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
        description: "Container Haulage Freight",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
        description: "Aerial Beach View",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
        description: "Flower Blooms",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
        description: "Alpine Mountains",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
        description: "Mountain Lake Sailing",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
        description: "Alpine Spring Meadows",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
        description: "Nature Landscape",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
        description: "Lighthouse Coast Sea",
    },
];


images.forEach((image) => {
    const listItem = document.createElement('li');
    listItem.classList.add('gallery-item');

    const imageLink = document.createElement('a');
    imageLink.classList.add('gallery-link');
    imageLink.href = image.original;

    const imageView = document.createElement('img');
    imageView.classList.add('gallery-image');
    imageView.src = image.preview;
    imageView.alt = image.description;

    imageLink.appendChild(imageView);
    listItem.appendChild(imageLink);
    gallery.appendChild(listItem);
});

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    captionPosition: 'bottom',
    captionType: 'attr',
    captionData: 'alt',
});

ЗАДАНИЕ №1 вариант 2

const images = [{},] массив изображений а далее:

    const markup = images.map((image) => `
  <li class="gallery-item">
    <a class="gallery-link" href="${image.original}">
      <img class="gallery-image" src="${image.preview}" alt="${image.description}" />
    </a>
  </li>
`).join('');
gallery.innerHTML = markup;
const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    captionPosition: 'bottom',
    captionType: 'attr',
    captionData: 'alt',
});
//^================ Вариант Саши ==================

const markup = images
    .map(
        image => `<li class="gallery-item">
    <a class="gallery-link" href="${image.original}">
        <img 
            class="gallery-image" 
            src="${image.preview}" 
            alt="${image.description}" 
            />
    </a>
</li>`
    )
    .join('');

gallery.innerHTML = markup;

const options = {
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    animation: 250,
};

const lightbox = new SimpleLightbox('.gallery a', options);
lightbox.on('show.simplelightbox');

//~=========================================================

ЗАДАНИЕ №2 вариант 1

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const emailInput = document.querySelector('input[name="email"]');
    const messageInput = document.querySelector('textarea[name="message"]');

    // Завдання 2: Використовуючи делегування, відстежуємо подію input
    form.addEventListener('input', function (event) {
        if (event.target === emailInput || event.target === messageInput) {
            // Зберігаємо значення полів у локальне сховище
            const feedbackState = {
                email: emailInput.value,
                message: messageInput.value
            };
            localStorage.setItem('feedback-form-state', JSON.stringify(feedbackState));
        }
    });

    // Завдання 3: Перевіряємо стан сховища при завантаженні сторінки
    const storedState = localStorage.getItem('feedback-form-state');
    if (storedState) {
        const parsedState = JSON.parse(storedState);
        emailInput.value = parsedState.email;
        messageInput.value = parsedState.message;
    }

    // Завдання 4: Під час сабміту форми очищаємо сховище та поля форми
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const feedbackState = {
            email: emailInput.value,
            message: messageInput.value
        };

        // Очищаємо сховище
        localStorage.removeItem('feedback-form-state');

        // Очищаємо поля форми
        emailInput.value = '';
        messageInput.value = '';

        // Виводимо у консоль об'єкт з полями email, message та їхніми поточними значеннями
        console.log('Feedback form submitted:', feedbackState);
    });
});

//~=========================================================

ЗАДАНИЕ №2 вариант 2
// Збереження значень полів у локальне сховище при вводі
// Ваші поля вводу
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Збереження значень у локальному сховищі при вводі
emailInput.addEventListener('input', () => {
    localStorage.setItem('feedback-form-state', JSON.stringify({
        email: emailInput.value,
        message: messageInput.value,
    }));
});

messageInput.addEventListener('input', () => {
    localStorage.setItem('feedback-form-state', JSON.stringify({
        email: emailInput.value,
        message: messageInput.value,
    }));
});
//Заповнення полів форми зі збережених даних при завантаженні сторінки
// Перевірка наявності збережених даних
const savedState = localStorage.getItem('feedback-form-state');
if (savedState) {
    const { email, message } = JSON.parse(savedState);
    emailInput.value = email;
    messageInput.value = message;
}
//Очищення сховища та полів форми при сабміті:
// Сабміт форми
const form = document.getElementById('feedback-form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Заборонити перезавантаження сторінки

    // Очистити локальне сховище
    localStorage.removeItem('feedback-form-state');

    // Очистити поля форми
    emailInput.value = '';
    messageInput.value = '';

    // Вивести об'єкт з полями email та message у консоль
    console.log({
        email: emailInput.value,
        message: messageInput.value,
    });
});
//~========= backup HTML=========================================

// < !DOCTYPE html >
//     <html lang="en">

//         <head>
//             <meta charset="UTF-8" />
//             <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
//             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//             <title>Vanilla App Template</title>
//             <link rel="stylesheet" href="./css/styles.css" />
//             <link rel="stylesheet" href="./css/1-gallery.css" />
//             <link rel="stylesheet" href="./css/2-form.css" />

//         </head>

//         <body>
//             <object type=" text/html" data="./1-gallery.html" width="100%"></object> 
//             <object type="text/html" data="./2-form.html" width="100%"></object>

//             <iframe src="./1-gallery.html"></iframe>
//             <iframe src="./2-form.html"></iframe>

//             <load src="./1-gallery.html"></load>
//             <load src="./2-form.html"></load>


//             <ul class="gallery"></ul>


//             <script type="module" src="./js/1-gallery.js"></script>
//             <script type="module" src="./js/2-form.js"></script>
//         </body>

//     </html>
//~=============================

{/* <form class="feedback-form" autocomplete="off">
    <label>
        Email
        <input type="email" name="email" autofocus />
    </label>
    <label>
        Message
        <textarea name="message" rows="8"></textarea>
    </label>
    <button type="submit">Submit</button>
</form> */}

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    captionPosition: 'bottom',
    captionsData: 'data-caption',
});