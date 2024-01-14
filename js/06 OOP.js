// Значення атрибутів можна змінювати, перевизначивши їм нове значення
//  прямо з JavaScript коду, і під час виконання скрипта значення в HTML,
//     тобто в DOM - дереві, зміниться.

// const link = document.querySelector(".link");
// console.log(link.href);
// link.href = "[<https://neo.goit.global>](<https://neo.goit.global/>)";
// console.log(link.href);


//У живому прикладі ми працюємо із зображенням і змінюємо значення
//його атрибутів src і alt, щоб зі скрипта підмінити картинку та її опис.
// замена картинки A laptop на "River bank".


// const image = document.querySelector(".image");
// console.log(image.src); // https://picsum.photos/id/9/320/240
// console.log(image.alt); // A laptop

// image.src = "https://picsum.photos/id/13/640/480";
// image.alt = "River bank";

//^===============================================================================

// Для отримання текстового контенту елемента, як завжди,
// отримуємо посилання на елемент і звертаємося до властивості через крапку.

// const el = document.querySelector(".text")
// const nested = document.querySelector(".sub-text")

// console.log(el.textContent); // "Username: Mango"
// console.log(nested.textContent); // "Mango"

//^===============================================================================

// Властивість textContent можна як читати, так і змінювати.
// Неважливо, що буде передано в textContent, дані завжди будуть записані як текст.

// const el = document.querySelector(".text")
// console.log(el.textContent); // "Username: Mango"
// el.textContent = "Username: Poly";
// console.log(el.textContent); // "Username: Poly"
//^===============================================================================
