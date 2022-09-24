import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);

let images = galleryItems;
let instance = {};
const gallery = document.querySelector(".gallery");

const markup = images.reduce(
  (acc, { preview, original, description } = item) =>
    acc +
    `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`,
  ""
);

gallery.insertAdjacentHTML("beforeend", markup);
gallery.addEventListener("click", handleItemClick);

function handleItemClick(evt) {
  evt.preventDefault();

  if (evt.target === evt.currentTarget) {
    return;
  }

  const img = evt.target;

  instance = basicLightbox.create(`
    <div class="modal">
    <img
    class="gallery__image"
    src="${img.dataset.source}"
  />
    </div>
`);
  instance.show();

  const modal = document.querySelector(".modal");
  modal.addEventListener("click", closeModal);
  function closeModal() {
    instance.close();
  }

  document.addEventListener("keyup", closeModalEsc);
  function closeModalEsc(evt) {
    console.log(evt);
    if (evt.code === "Escape") {
      closeModal();
    }
  }
}
