import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iconUrl from "../src/img/bi_x-octagon.png";
import { createGallery } from "./js/render-functions";
import { fetchPhotos } from "./js/pixabay-api";

const iconError = iconUrl;

const searchForm = document.querySelector('.form');
const button = document.querySelector('.btn')
const loading = document.querySelector('.loader')
const galleryListEl = document.querySelector('.gallery')

const onSearchImg = event => {
  event.preventDefault();
  
  const searchedValue = searchForm.elements.search_img.value;
   
  loading.classList.add('visible');

  fetchPhotos(searchedValue).then(data => {
    const array = data.hits;
    if (array.length === 0) {
      iziToast.show({
        iconUrl: `${iconError}`,
        message: 'Sorry, there are no images matching your search query. Please try again!',
        messageColor: 'white',
        position: 'topRight',
        color: '#ef4040',
        maxWidth: '350px'
      })

      loading.classList.remove('visible');
      galleryListEl.innerHTML = '';
      searchForm.reset();
    }
      const gallaryCardsTemplate = data.hits.map(photoDetals => createGallery(photoDetals)).join('');

      galleryListEl.innerHTML = gallaryCardsTemplate;
    
    const simpleBox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
      overlayOpacity: 0.8,
    });
    simpleBox.refresh();
      
    loading.classList.remove('visible');
    searchForm.reset();
  }).catch(err => {
    console.log(err);
   })
};

searchForm.addEventListener('submit', onSearchImg);