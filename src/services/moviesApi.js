import axios from 'axios';

const API_KEY = 'e84a2dc7e130243e2513aaa2cdb72d34';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetch = page => {
  return axios(`/trending/movie/day`, {
    params: {
      api_key: API_KEY,
      page,
    },
  });
};

export const fetchSearchMovie = (query, page) => {
  return axios(`/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
      page,
    },
  });
};

export const fetchMovieById = movieId => {
  return axios(`/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const fetchMovieCredits = id => {
  return axios(`/movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const fetchMovieReviews = id => {
  return axios(`/movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
};
