//~ ========================  Д/З БЛОК#8 =========================================================================================
//!======================  Initial HTML
html:  < !DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="./css/styles.css" />
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css"
            />
            <title>Document</title>
        </head>
        <body>
            <ul class="gallery"></ul>

            <script type="module" src="./js/main.js" defer></script>
            <script src="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js"></script>
        </body>
    </html>

//!======================  Initial JS
//preview — посилання на маленьку версію зображення для картки галереї
// original — посилання на велику версію зображення для модального вікна
// description — текстовий опис зображення, для атрибута alt малого зображення та підпису великого зображення в модалці.

// Знаходимо елемент <ul> галереї у HTML
const gallery = document.querySelector('.gallery');

// Масив об'єктів зображень
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
// Ітеруємося по масиву та створюємо елементи <li> зображень
// main.js

// Знаходимо елемент <ul> галереї у HTML
const gallery = document.querySelector('.gallery');

// Масив об'єктів зображень
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
    // ... (додайте інші об'єкти за потребою)
];

// Ітеруємося по масиву та створюємо елементи <li> зображень

images.forEach((image) => {
    // Створюємо елемент <li> для зображення
    const listItem = document.createElement('li');
    listItem.classList.add('gallery-item');

    // Створюємо посилання <a> для зображення
    const imageLink = document.createElement('a');
    imageLink.classList.add('gallery-link');
    imageLink.href = image.original;

    // Створюємо зображення <img> та налаштовуємо його атрибути
    const imageView = document.createElement('img');
    imageView.classList.add('gallery-image');
    imageView.src = image.preview;
    imageView.alt = image.description;
    imageView.setAttribute('data-source', image.original);

    // Додаємо зображення до посилання, а посилання до елемента <li>
    imageLink.appendChild(imageView);
    listItem.appendChild(imageLink);
    gallery.appendChild(listItem);
});

// Додаємо обробник подій для відкриття модального вікна
gallery.addEventListener('click', (event) => {
    event.preventDefault();

    // Перевіряємо, чи клікнуто на зображення
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    // Отримуємо посилання на велике зображення
    const largeImageUrl = event.target.getAttribute('data-source');

    // Створюємо екземпляр модального вікна та виводимо велике зображення
    const instance = basicLightbox.create(`
    <img src="${largeImageUrl}" alt="${event.target.alt}" width="800" height="600">
  `);

    // Відображаємо модальне вікно
    instance.show();
});

//!======= Використовуй масив об’єктів imagesі цей HTML шаблон елемента галереї
//!======= та створи в JavaScript коді розмітку елементів, після чого додай усю розмітку всередину ul.gallery.

// main.js

const gallery = document.querySelector('.gallery');

const images = [
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
        description: "Hokkaido Flower",
    },
    // Додайте інші об'єкти за потребою
];

// Функція для створення розмітки елемента галереї
function createGalleryItem({ preview, original, description }) {
    const listItem = document.createElement('li');
    listItem.classList.add('gallery-item');

    const imageLink = document.createElement('a');
    imageLink.classList.add('gallery-link');
    imageLink.href = original;
    // imageLink.setAttribute('target', '_blank');
    // imageLink.setAttribute('rel', 'noopener noreferrer');

    const imageView = document.createElement('img');
    imageView.classList.add('gallery-image');
    imageView.src = preview;
    imageView.alt = description;
    imageView.setAttribute('data-source', original);

    imageLink.appendChild(imageView);
    listItem.appendChild(imageLink);

    return listItem;
}

// Створюємо елементи галереї та додаємо їх до ul.gallery
images.forEach((image) => {
    const galleryItem = createGalleryItem(image);
    gallery.appendChild(galleryItem);
});

//!======= мінімальна стилізація 
body {
    margin: 0;
    font - family: Arial, sans - serif;
}

.gallery {
    list - style: none;
    padding: 0;
    display: flex;
    flex - wrap: wrap;
}

.gallery - item {
    margin: 5px;
}

.gallery - link {
    text - decoration: none;
}

.gallery - image {
    width: 100 %;
    height: auto;
    border: 2px solid #fff;
    border - radius: 5px;
    transition: transform 0.2s ease -in -out;
}

.gallery - image:hover {
    transform: scale(1.1);
}

//!======= додай функціонал прослуховування кліка по елементах галереї та отримання посилання на велике зображення при кліку.

// Функція для створення розмітки елемента галереї
function createGalleryItem({ preview, original, description }) {
    const listItem = document.createElement('li');
    listItem.classList.add('gallery-item');

    const imageLink = document.createElement('a');
    imageLink.classList.add('gallery-link');
    imageLink.href = original;
    imageLink.setAttribute('target', '_blank');
    imageLink.setAttribute('rel', 'noopener noreferrer');

    const imageView = document.createElement('img');
    imageView.classList.add('gallery-image');
    imageView.src = preview;
    imageView.alt = description;
    imageView.setAttribute('data-source', original);

    imageLink.appendChild(imageView);
    listItem.appendChild(imageLink);

    return listItem;
}

// Створюємо елементи галереї та додаємо їх до ul.gallery
images.forEach((image) => {
    const galleryItem = createGalleryItem(image);
    gallery.appendChild(galleryItem);
});

// Додаємо обробник подій для відкриття модального вікна при кліку
gallery.addEventListener('click', (event) => {
    event.preventDefault();

    const target = event.target;

    if (target.nodeName === 'IMG') {
        const largeImageUrl = target.getAttribute('data-source');
        console.log('Посилання на велике зображення:', largeImageUrl);
    }
});

//!======= підключити бібліотеку basicLightbox

< !DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="./css/styles.css" />
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css"
            />
            <title>Document</title>
        </head>
        <body>
            <ul class="gallery"></ul>

            <script type="module" src="./js/main.js" defer></script>
            <script src="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js"></script>
        </body>
    </html>

//!======= при кліку по елементу галереї відкривалось модальне вікно підключеної бібліотеки

// Функція для створення розмітки елемента галереї
function createGalleryItem({ preview, original, description }) {
    const listItem = document.createElement('li');
    listItem.classList.add('gallery-item');

    const imageLink = document.createElement('a');
    imageLink.classList.add('gallery-link');
    imageLink.href = original;
    imageLink.setAttribute('target', '_blank');
    imageLink.setAttribute('rel', 'noopener noreferrer');

    const imageView = document.createElement('img');
    imageView.classList.add('gallery-image');
    imageView.src = preview;
    imageView.alt = description;
    imageView.setAttribute('data-source', original);

    imageLink.appendChild(imageView);
    listItem.appendChild(imageLink);

    return listItem;
}

// Створюємо елементи галереї та додаємо їх до ul.gallery
images.forEach((image) => {
    const galleryItem = createGalleryItem(image);
    gallery.appendChild(galleryItem);
});

// Додаємо обробник подій для відкриття модального вікна при кліку
gallery.addEventListener('click', (event) => {
    event.preventDefault();

    const target = event.target;

    if (target.nodeName === 'IMG') {
        const largeImageUrl = target.getAttribute('data-source');

        // Відкриваємо модальне вікно з великим зображенням
        const instance = basicLightbox.create(`
      <img src="${largeImageUrl}" alt="${target.alt}" width="800" height="600">
    `);

        instance.show();
    }
});

//!======= Для відображення великого зображення в модальному вікні та закриття його після натискання клавіші "Escape", використаємо бібліотеку basicLightbox.


// Функція для створення розмітки елемента галереї
function createGalleryItem({ preview, original, description }) {
    const listItem = document.createElement('li');
    listItem.classList.add('gallery-item');

    const imageLink = document.createElement('a');
    imageLink.classList.add('gallery-link');
    imageLink.href = original;
    imageLink.setAttribute('target', '_blank');
    imageLink.setAttribute('rel', 'noopener noreferrer');

    const imageView = document.createElement('img');
    imageView.classList.add('gallery-image');
    imageView.src = preview;
    imageView.alt = description;
    imageView.setAttribute('data-source', original);

    imageLink.appendChild(imageView);
    listItem.appendChild(imageLink);

    return listItem;
}

// Створюємо елементи галереї та додаємо їх до ul.gallery
images.forEach((image) => {
    const galleryItem = createGalleryItem(image);
    gallery.appendChild(galleryItem);
});

// Додаємо обробник подій для відкриття та закриття модального вікна
gallery.addEventListener('click', (event) => {
    event.preventDefault();

    const target = event.target;

    if (target.nodeName === 'IMG') {
        const largeImageUrl = target.getAttribute('data-source');

        // Відкриваємо модальне вікно з великим зображенням та обробником закриття
        const instance = basicLightbox.create(`
      <img src="${largeImageUrl}" alt="${target.alt}" width="800" height="600">
    `, {
            onShow: (instance) => {
                // Додаємо обробник подій для закриття по клавіші "Escape"
                const closeLightbox = (event) => {
                    if (event.code === 'Escape') {
                        instance.close();
                        window.removeEventListener('keydown', closeLightbox);
                    }
                };
                window.addEventListener('keydown', closeLightbox);
            },
            onClose: () => {
                // Видаляємо обробник подій після закриття модального вікна
                window.removeEventListener('keydown', closeLightbox);
            },
        });

        instance.show();
    }
});
