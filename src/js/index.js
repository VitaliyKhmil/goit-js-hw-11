import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { form, loadMore, gallery } from './refs';
import { searchImage, fetchImgParams } from './searchAPI';
import imgTemplate from '../hbs/img-template.hbs';

const lightbox = new SimpleLightbox('.photo-link', {
  docClose: false,
  captionsData: 'alt',
  captionDelay: 250,
});

function searchButtonHandler(e) {
  e.preventDefault();
  clearData();
  const {
    elements: { searchQuery },
  } = e.target;
  fetchImgParams.q = searchQuery.value.trim();
  fetchImgParams.page = 1;

  if (fetchImgParams.q === '') {
    return Notiflix.Notify.failure('Please enter something in search field');
  }
  searchImage(fetchImgParams).then(data => searchImagesHandler(data));
}

function loadMoreButtonHandler() {
  fetchImgParams.page++;
  loadMore.style.display = 'none';
  searchImage(fetchImgParams).then(data => searchImagesHandler(data));
}

function clearData() {
  gallery.innerHTML = '';
}

function searchImagesHandler(data) {
  const { page, per_page } = fetchImgParams;
  if (page * per_page < data.totalHits) {
    Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
    gallery.insertAdjacentHTML('beforeend', imgTemplate(data));
    loadMore.style.display = 'block';
    lightbox.refresh();
  } else {
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
}

form.addEventListener('submit', searchButtonHandler);
loadMore.addEventListener('click', loadMoreButtonHandler);
