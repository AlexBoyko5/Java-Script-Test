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

//~==============Ось основні етапи "створення розмітки елемента галереї" в вашому коді:=======================

// Створення елементів:
// listItem: <li> - елемент списку, який представляє одне зображення у галереї.
// imageLink: <a> - посилання, яке оточує зображення та вказує на велике зображення.
// imageView:(<img>) - тег зображення, яке відображає маленьку версію зображення.

// Додавання класів та атрибутів: 

// Додається клас gallery-item для <li>.
// Додається клас gallery-link для <a>.
// Встановлюється атрибут href для <a>, що вказує на велике зображення.
//  Додається клас gallery-image для <img>.
//  Встановлюється атрибут src для <img>, що вказує на маленьку версію зображення.
//  Встановлюється атрибут alt для <img>, що використовує опис зображення.
//   Встановлюється data - атрибут data - source для < img >, що зберігає посилання на велике зображення.

//Збирання всіх елементів разом:

// <img> додається в <a>.
// <a> додається в <li>.

// Завершена <li> додається до галереї (<ul class="gallery">).
// Отже, кожен цей елемент галереї готовий для відображення в HTML-структурі сторінки. */}
// Цей процес виконується для кожного об'єкта у масиві images, створюючи повний список зображень у галереї.

////&======= Вариант 1 =====================================================================
// Цей підхід використовує власну функцію createGalleryItem для створення розмітки кожного елемента галереї.
//  Це може бути корисним, якщо ви хочете відокремити створення розмітки від основної логіки програми,
// зробити код більш читабельним та підтримуваним.

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

////&======= Вариант 2 ======Етапи створ розмітки ===============================================================

// Безпосередньо створюємо розмітку кожного елемента галереї у циклі forEach

images.forEach((image) => {
    const listItem = document.createElement('li'); //елемент списку, який представляє одне зображення у галереї.
    listItem.classList.add('gallery-item'); //Додається клас gallery-item для <li>.

    const imageLink = document.createElement('a'); //посилання <a>, яке оточує зображення та вказує на велике зображення.
    imageLink.classList.add('gallery-link'); //Додається клас gallery-link для <a>.
    imageLink.href = image.original; //Встановлюється атрибут href для <a>, що вказує на велике зображення.

    const imageView = document.createElement('img'); // тег зображення, яке відображає маленьку версію зображення.
    imageView.classList.add('gallery-image'); //Додається клас gallery-image для <img>.
    imageView.src = image.preview; //Встановлюється атрибут src для <img>, що вказує на маленьку версію зображення.
    imageView.alt = image.description; //Встановлюється атрибут alt для <img>, що використовує опис зображення.
    imageView.setAttribute('data-source', image.original); //Встановлюється data-атрибут data-source для <img>,
    // що зберігає посилання на велике зображення

    imageLink.appendChild(imageView); //<img> додається в <a>.
    listItem.appendChild(imageLink); //<a> додається в <li>.

    gallery.appendChild(listItem);  //Завершена <li> додається до галереї (<ul class="gallery">).
});

//!======= мінімальна стилізація 
/* styles.css */

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

// У цьому коді:

// Знаходимо елемент галереї < ul > за його класом.gallery.
// Ітеруємося по масиву images та створюємо HTML - розмітку для кожного елемента галереї.
// Додаємо обробник подій для галереї, який слухає кліки.
//     Перевіряємо, чи клікнуто саме на зображення(тег < img >).
// Якщо так, отримуємо посилання на велике зображення з атрибуту data - source та виводимо його у консоль.

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
gallery.addEventListener('click', (event) => {//Додаємо обробник подій для галереї, який слухає кліки.
    event.preventDefault();

    const target = event.target;  // Отримуємо елемент, на який клікнули

    if (target.nodeName === 'IMG') {// Перевіряємо, чи клікнули саме на зображення
        const largeImageUrl = target.getAttribute('data-source');// Отримуємо посилання на велике зображення
        console.log('Посилання на велике зображення:', largeImageUrl);
    }// Якщо так, отримуємо посилання на велике зображення з атрибуту data - source та виводимо його у консоль.

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
