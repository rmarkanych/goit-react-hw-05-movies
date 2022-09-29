import axios from 'axios';

const API_KEY = '3fda262e4e265cf3e0f035e612dee2c1';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendMovie = async page => {
  try {
    const { data } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`, {
      params: {
        page: page,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchedQuery = async (query, page) => {
  try {
    const { data } = await axios.get(
      `/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
      {
        params: {
          query: query,
          page: page,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchedDetails = async movieId => {
  try {
    const { data } = await axios.get(
      `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieCast = async movieId => {
  try {
    const { data } = await axios.get(
      `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieReview = async movieId => {
  try {
    const { data } = await axios.get(
      `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
