import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryUl = document.querySelector(".gallery");

const galleryMaker = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <li>
        <a href="${original}">
            <img src="${preview}" alt="${description}">
        </a>
    </li>`;
  })
  .join("");

galleryUl.insertAdjacentHTML("afterbegin", galleryMaker);
    
console.log(galleryItems);
