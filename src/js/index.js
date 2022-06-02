import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { form, input, loadMore, gallery } from './refs';
import { fetchImgParams, searchImage } from './searchApi';
import imgTemplate from '../hbs/img-template.hbs';

const lightbox = new SimpleLightbox('.photo-link', {
  docClose: false,
  captionsData: 'alt',
  captionDelay: 250,
});

function clearData() {
  gallery.innerHTML = '';
}

async function searchImages(e) {
  clearData;
  e.preventDefault();
  fetchImgParams.q = e.target.elements.searchQuery.value;
  if (fetchImgParams.q === '') {
       Notiflix.Notify.failure(
      'Please enter something in search field'
    );
    return;
  }  
}

form.addEventListener('submit', searchImages);

function fetchPhotosHandler(data) {
      gallery.insertAdjacentHTML('beforeend', imgTemplate);
  if (fetchImgParams.page * fetchImgParams.per_page < data.totalHits) {
    lightbox.refresh();
    Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
    loadMore.style.display = 'block';
  } else {
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
}

// function loadMoreHandler() {
//   curruntPage++;
//   loadMore.style.display = 'none';
//   fetchPhotos(input.value, curruntPage, LIMIT).then(data =>
//     fetchPhotosHandler(data)
//   );
// }



// loadMore.addEventListener('click', loadMoreHandler);
