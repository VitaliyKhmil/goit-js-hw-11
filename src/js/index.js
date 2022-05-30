import fetchPhotos from './searchAPI';
import renderPhotoCard from './renderPhotoCard';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.photo-link', {
  docClose: false,
  captionsData: 'alt',
  captionDelay: 250,
});

const form = document.getElementById('search-form');
const input = document.querySelector('#search-form input');
const loadMore = document.querySelector('.load-more');
const gallery = document.querySelector('.gallery');
const LIMIT = 40;
let curruntPage;

form.addEventListener('submit', searchPhotos);
loadMore.addEventListener('click', loadMoreHandler);

function clearData() {
  gallery.innerHTML = '';
}

function fetchPhotosHandler(data) {
  
  const photos = data.hits.map(photo => renderPhotoCard(photo));
  // const totalPhoto = data.totalHits;
  gallery.insertAdjacentHTML('beforeend', photos.join(' '));
  if (curruntPage * LIMIT < data.totalHits) {     
    lightbox.refresh();
    Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
    loadMore.style.display = 'block';
  } else {
      Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    )
    ;
  }
}

function loadMoreHandler() {
  curruntPage++;
  loadMore.style.display = 'none';
  fetchPhotos(input.value, curruntPage, LIMIT).then(data =>
    fetchPhotosHandler(data)
  );
}

function searchPhotos(e) {
  e.preventDefault();
  curruntPage = 1;
  loadMore.style.display = 'none';
  const inputValue = input.value.trim();
  clearData();
  if (inputValue !== '') {
    fetchPhotos(input.value, curruntPage, LIMIT).then(data =>
      fetchPhotosHandler(data)
    );
  } else {
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
}
