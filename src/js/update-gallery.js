import galleryTpl from '../hbs/img-template.hbs';
import { gallery } from './refs';

function updateGallery(hits) {
  const markup = galleryTpl(hits);

  gallery.insertAdjacentHTML('beforeend', markup);
}

export default updateGallery;
