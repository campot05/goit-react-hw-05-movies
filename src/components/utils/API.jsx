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

export async function getMovieData(id) {
  try {
    const response = await axios.get(
      `/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getCastList(id) {
  try {
    const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getReviews(id) {
  try {
    const response = await axios.get(
      `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getByQuery(query) {
  try {
    const response = await axios.get(
      `/search/movie?api_key=${API_KEY}&query=${query}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
