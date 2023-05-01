import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

for (const image of galleryItems) {
  const listEl = `<li class="gallery__item">
        <a class="gallery__link" href="${image.original}">
          <img
            class="gallery__image"
            src=${image.preview}
            data-source=${image.original}
            alt=${image.description}
          />
        </a>
      </li>`;

  galleryEl.insertAdjacentHTML('beforeend', listEl);
  galleryEl.addEventListener('click', e => e.preventDefault());
}

let lightbox = new SimpleLightbox('.gallery li a', {
  captionsData: 'alt',
  captionDelay: 250,
});
