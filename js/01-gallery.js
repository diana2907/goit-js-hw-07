import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

let images = galleryItems;
let instance = {};
const gallery = document.querySelector('.gallery');

const markup = images.reduce((acc, item) => acc + `<div class="gallery__item">
<a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
</div>`, "");

gallery.insertAdjacentHTML('beforeend', markup);
gallery.addEventListener('click', handleItemClick)

function handleItemClick(evt) {
    evt.preventDefault();

    if(evt.target === evt.currentTarget) {return};

    const img = evt.target;

   instance = basicLightbox.create(`
    <div class="modal">
    <img
    class="gallery__image"
    src="${img.dataset.source}"
  />
    </div>
`)
instance.show()


const modal = document.querySelector('.modal');
modal.addEventListener('click', closeModal);
function closeModal() {
    instance.close()
}


document.addEventListener("keyup", closeModalEsc);
function closeModalEsc(evt) {
    if (evt.code === 'Escape') {
        closeModal()
    }
}
}

