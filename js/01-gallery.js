import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryUl = document.querySelector(".gallery");

function galleryMaker(arr) {
  return arr
    .map(({ preview, original, description }) => {
      `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
      `;
    })
    .join("");
}

galleryUl.insertAdjacentHTML("afterbegin", galleryMaker(galleryItems));

galleryUl.addEventListener("click", handlerClick);

function handlerClick(event) {
  event.preventDefault();
  const target = event.target;
  if (target.classList.contains(".gallery__image")) {
    const mainImg = target.dataset.sourse;
    const modal = basicLigthbox.create(
      `<img scr='${mainImg}' 
        width='800' 
        height='600'>`
    );
    modal.show();
  }
}
console.log(galleryItems);

console.log(basicLigthbox);