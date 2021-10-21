import { galleryItems } from './gallery-items.js';

//import gallery from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const createGalleryMarkup = array =>
  array.map(({ preview, original, description }, i) =>
        `<a class="gallery__item" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}" />
         </a>`,
    ).join('');

const markupGallery = createGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', markupGallery);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});