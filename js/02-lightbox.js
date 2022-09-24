import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);
let images = galleryItems;

const gallery = document.querySelector(".gallery");

const markup = images.reduce(
  (acc, { preview, original, description } = item) =>
    acc +
    `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`,
  ""
);
gallery.insertAdjacentHTML("beforeend", markup);

const ligthbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
