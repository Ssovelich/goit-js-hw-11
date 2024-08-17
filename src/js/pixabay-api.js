const BASE_URL = 'https://pixabay.com/api/'

export const fetchPhotos = searchedQuery => { 
const searchParams = new URLSearchParams({
    key: '45417636-6e508772373129b2f08d1fd3e',
    q: searchedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true'
  });
  const url = `${BASE_URL}?${searchParams}`;

   return fetch(url)
  .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

    return response.json();
    
    })
}; 