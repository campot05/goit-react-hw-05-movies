import axios from 'axios';

const API_KEY = 'be93eef600e8fe429646a6ef82601194';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchPopular() {
  try {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
