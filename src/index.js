import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import './css/styles.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import fetchImages from './js/fetchImages';
import createMarkup from './js/createMarkup';


const formEl = document.querySelector("#search-form");
const galleryEl = document.querySelector(".gallery");
const loadMoreBtn = document.querySelector(".load-more");

let page = 1;
let searchImage = "";

formEl.addEventListener("submit", onSubmitBtnClick);
loadMoreBtn.addEventListener("click", onLoadMoreBtnClick);

async function onSubmitBtnClick (event) {
    event.preventDefault();
    if (event.currentTarget.searchQuery.value.trim() === "") {
        Notify.failure("Sorry, there are no images matching your search query. Please try again.");
    }   
      searchImage = event.currentTarget.searchQuery.value;
      try {
          const images = await fetchImages (searchImage, page);
          if (images.length === 0) {
              Notify.failure("Sorry, there are no images matching your search query. Please try again.");
          }
              galleryEl.innerHTML = "";
              galleryEl.insertAdjacentHTML("beforeend", createMarkup(images));
              page = 1;
              loadMoreBtn.classList.remove("is-hidden");
              checkEndOfImages(images);
      }   
          catch (error) {
             Notify.failure(error.message);
      }
};

async function onLoadMoreBtnClick () {
    loadMoreBtn.classList.add("is-hidden");
    page += 1;
    try {
        const images = await fetchImages (searchImage, page);
        galleryEl.insertAdjacentHTML("beforeend", createMarkup(images));
        loadMoreBtn.classList.remove("is-hidden");
        checkEndOfImages(images);
    }   
        catch (error) {
        Notify.failure(error.message);
    }
};

function checkEndOfImages (images) {
    if (images.totalHits / 40 < page) {
        Notify.warning("We're sorry, but you've reached the end of search results.");
        loadMoreBtn.classList.add("is-hidden");
    }
};

const gallery = new SimpleLightbox(".gallery a");



