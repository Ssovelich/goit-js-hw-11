import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iconUrl from "../src/img/bi_x-octagon.png";

const iconError = iconUrl;

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const button = document.querySelector('.btn')
const loading = document.querySelector('.loader')
const galleryListEl = document.querySelector('.gallery')

form.addEventListener('submit', onSearchImg);

function onSearchImg(event) {
    event.preventDefault();
    const form = event.target;
    const searchString = input.value;
    if (searchString === '') {
        return;
    }

    const searchParams = new URLSearchParams({
      key: '45417636-6e508772373129b2f08d1fd3e',
      q: searchString,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true'
});

const url = `https://pixabay.com/api/?${searchParams}`;

const options = {
	method: "GET"
};

loading.classList.add('visible');
    
fetch(url, options)
  .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
        return response.json();   
  })
    .then((photos) => {
        const array = photos.hits;
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
        } else {
            const markup = array.map((photo) => {
                return `
            <li class='gallery-item'>
              <a class='gallery-link' href='${photo.largeImageURL}'>
                <img
                class='gallery-image'
                src='${photo.webformatURL}'
                alt='${photo.tags}'
                width=360
                height=152/>
              </a>
              <ul class='photo-info-list'>
                <li class='photo-info-list-item'><h2>Likes</h2><p>${photo.likes}</p></li>
                <li class='photo-info-list-item'><h2>Views</h2><p>${photo.views}</p></li>
                <li class='photo-info-list-item'><h2>Comments</h2><p>${photo.comments}</p></li>
                <li class='photo-info-list-item'><h2>Downloads</h2><p>${photo.downloads}</p></li>
              </ul>
            </li>`;
            })
                .join("");

            galleryListEl.innerHTML = markup;
            const simpleBox = new SimpleLightbox('.gallery a', {
                captionsData: 'alt',
                captionDelay: 250,
                overlayOpacity: 0.8,
            });
            simpleBox.refresh();
            loading.classList.remove('visible');   
        }
    })
    .catch((error) => {
        console.log(error)
    });
    
    input.value = '';
    
};


