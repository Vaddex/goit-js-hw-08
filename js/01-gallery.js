import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryUl = document.querySelector(".gallery");

const galleryMaker = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img src="${preview}" 
            alt="${description}"
            class="gallery__image"
            data-source="large-image.jpg">
        </a>
    </li>`;
  })
  .join("");

galleryUl.insertAdjacentHTML("afterbegin", galleryMaker);
galleryUl.addEventListener("click", handlerClick);

function handlerClick(event) {
  event.preventDefault();
  const target = event.target;
  if (target.classList.contains(".gallery__image")) {
    const mainImg = target.dataset.sourse;
    modal = basicLigthbox.create(
      `<img scr='${mainImg}' width='800' height='600'>`
    );
    modal.show();
    modalsOpen = true;
  }
}
    
console.log(galleryItems);
