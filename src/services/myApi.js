import axios from 'axios';

const API_KEY = '3fda262e4e265cf3e0f035e612dee2c1';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const getTrendMovie = async () => {
  try {
    const { data } = await axios.get('/trending/movie/day', {
      params: {
        apiKey: API_KEY,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default getTrendMovie;
