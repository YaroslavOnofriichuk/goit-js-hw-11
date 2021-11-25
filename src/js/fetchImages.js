import axios from 'axios';

export default async function fetchImages (image, page) {
    const BASE_URL = "https://pixabay.com/api/";
    const key = "24505023-aa89cf58f0072335e9d83656d";
    const imageType = "photo";
    const orientation = "horizontal";
    const safesearch = "true";
    const perPage = 40;
    
    const response = await axios.get(`${BASE_URL}?key=${key}&q=${image}&image_type=${imageType}&orientation=${orientation}&safesearch=${safesearch}&page=${page}&per_page=${perPage}`);
    const images = await response.data;

    console.log(response.data.totalHits);
    return images;
};