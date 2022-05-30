function renderPhotoCard(photo) {
  return `
    <a class="photo-link" href="${photo.largeImageURL}">
  <div class="image-card">
      <div class="img-thumb">
        <img src="${photo.webformatURL}" alt="${photo.tags}" loading="lazy" />
       </div>
      <div class="info">
        <p class="info-item">
          <b>Likes</b> ${photo.likes}
        </p>
        <p class="info-item">
         <b>Views</b> ${photo.views}
        </p>
        <p class="info-item">
         <b>Comments</b>  ${photo.comments}
        </p>
        <p class="info-item">
         <b>Downloads</b>  ${photo.downloads}
        </p>
     </div>
 </div>
</a>`;
}

export default renderPhotoCard;