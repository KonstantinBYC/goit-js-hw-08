// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line
const listElements = document.querySelector('.gallery');
listElements.style.listStyle = 'none';

const markUp = createGallItemsMarkup(galleryItems);
function createGallItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image"
        src="${preview}"
        alt="${description}" width="800" height="600"/>
        </a> </li>`;
    })
    .join(``);
}
listElements.insertAdjacentHTML(`afterbegin`, markUp);

let lightbox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});

listElements.addEventListener('click', event => {
  event.preventDefault();
  lightbox.open();
});

listElements.addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();

  if (e.target.classList.contains('gallery')) return;
  const source = e.target.dataset.source;
  const instance = simpleLightbox.create(
    `<img src="${source}" width="800" height="600">`
  );
  instance.show();
}

console.log(galleryItems);
