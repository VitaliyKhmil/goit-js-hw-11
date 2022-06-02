import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { form, loadMore, gallery } from './refs';
import { searchImage } from './searchApi';
import imgTemplate from '../hbs/img-template.hbs';

const lightbox = new SimpleLightbox('.photo-link', {
  docClose: false,
  captionsData: 'alt',
  captionDelay: 250,
});

const LIMIT = 40;
let currentPage;

function clearData() {
  gallery.innerHTML = '';
}

async function searchImages(e) {
  e.preventDefault();
  clearData();
  currentPage = 1;
  const {
    elements: { searchQuery },
  } = e.target;
  const queryValue = searchQuery.value.trim();

  if (queryValue === '') {
    return Notiflix.Notify.failure('Please enter something in search field');
  }
  searchImage(queryValue)
    .then(data => {
      if (currentPage * LIMIT < data.totalHits) {
        Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
        gallery.insertAdjacentHTML('beforeend', imgTemplate(data));
        loadMore.style.display = 'block';
        lightbox.refresh();
      } else {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
    })
    .catch(err => console.error(err));
}

function loadMoreHandler() {
  currentPage++;
  loadMore.style.display = 'none';
  // searchImage(queryValue, currentPage, LIMIT).then(data => searchImages(data));
}


form.addEventListener('submit', searchImages);
loadMore.addEventListener('click', loadMoreHandler);