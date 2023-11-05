import { galleryItems } from "./gallery-items.js";
const galleryUl = document.querySelector(".gallery");

// create gallery
const galleryMaker = galleryItems
  .map(({ preview, original, description }) => {
    return `
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

galleryUl.insertAdjacentHTML("afterbegin", galleryMaker);

galleryUl.addEventListener("click", handlerClick);

function handlerClick(event) {
  event.preventDefault();
  const target = event.target;
  if (target.classList.contains("gallery__image")) {
    const mainImg = target.dataset.source;
    const modal = basicLightbox.create(`
        <img src="${mainImg}"
          width="800"
          height="600">
      `);
    modal.show();
  }
}
console.log(galleryItems);
