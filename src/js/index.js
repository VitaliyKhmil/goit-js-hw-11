import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
<<<<<<< Updated upstream
import { form, loadMore, gallery } from './refs';
=======
import { form, input, loadMore, gallery } from './refs';
>>>>>>> Stashed changes
import { searchImage } from './searchApi';
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
<<<<<<< Updated upstream
  e.preventDefault();  
  const { elements: {searchQuery} } = e.target;  
  const queryValue = searchQuery.value.trim();
  
  if (queryValue === '') {
    return Notiflix.Notify.failure(
      'Please enter something in search field'
    );
  }
  
  searchImage(queryValue)
    .then(res => console.log(res))
      .catch((err) => console.error(err))
  clearData()
}



form.addEventListener('submit', searchImages);

=======
  e.preventDefault();
  const { elements: { searchQuery } } = e.target;
  const queryValue = searchQuery.value.trim();
  if (queryValue === '') {
    return Notiflix.Notify.failure('Please enter something in search field');
  }
  searchImage(queryValue)
    .then(res => console.log(res))
    .catch((err) => console.log(err))
  clearData();
  
    
//   try {
//     const result = await searchImage();

//     resetMarkup();
//     rewrightMarkup(result);

//     searchImage(result.data.totalHits);
//     lightbox.refresh();
//     Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);

//   } catch (error) {
//     Notiflix.Notify.failure(
//       'Sorry, there are no images matching your search query. Please try again.',
//     );
//   }
// };

// function rewrightMarkup(markup) {
//   refs.gallery.insertAdjacentHTML('beforeend', imgTemplate(markup));
// }

// form.addEventListener('submit', searchImages);





// function fetchPhotosHandler(data) {
//       gallery.insertAdjacentHTML('beforeend', imgTemplate);
//   if (fetchImgParams.page * fetchImgParams.per_page < data.totalHits) {
//     lightbox.refresh();
//     Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
//     loadMore.style.display = 'block';
//   } else {
//     Notiflix.Notify.failure(
//       'Sorry, there are no images matching your search query. Please try again.'
//     );
//   }
// }
>>>>>>> Stashed changes






// function fetchPhotosHandler(data) {
//       gallery.insertAdjacentHTML('beforeend', imgTemplate);
//   if (fetchImgParams.page * fetchImgParams.per_page < data.totalHits) {
//     lightbox.refresh();
//     Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
//     loadMore.style.display = 'block';
//   } else {
//     Notiflix.Notify.failure(
//       'Sorry, there are no images matching your search query. Please try again.'
//     );
//   }
// }


