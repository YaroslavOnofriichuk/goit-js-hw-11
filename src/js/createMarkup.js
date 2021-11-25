

export default function createMarkup (data) {
    const images = data.hits;
    return images.map(image => {
        return `
        <div class="photo-card">
        <a href=${image.largeImageURL} class="gallery-link">
        <img src=${image.webformatURL} alt=${image.tags} loading="lazy" class="gallery-image" />
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes ${image.likes}</b>
          </p>
          <p class="info-item">
            <b>Views ${image.views}</b>
          </p>
          <p class="info-item">
            <b>Comments ${image.comments}</b>
          </p>
          <p class="info-item">
            <b>Downloads ${image.downloads}</b>
          </p>
          
        </div>
      </div>`
      }).join("");
};