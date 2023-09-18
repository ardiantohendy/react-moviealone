import axios from "axios";

const baseUrl = "https://api.themoviedb.org";
const apiKey = "5648e7528631713eb23947dc0c8bbbc7";

export const getMoviePopular = async () => {
  const movie = await axios.get(`${baseUrl}/3/movie/popular?api_key=${apiKey}`);
  return movie.data.results;
};

export const getMovieUpcoming = async () => {
  const movie = await axios.get(`${baseUrl}/3/movie/upcoming?api_key=${apiKey}`);
  return movie.data.results;
};

export const getPopularSeries = async () => {
  const series = await axios.get(`${baseUrl}/3/tv/popular?api_key=${apiKey}`);
  return series.data.results;
};

export const searchMovie = async (query) => {
  const search = await axios.get(`${baseUrl}/3/search/movie?query=${query}&api_key=${apiKey}`);
  return search.data;
};
