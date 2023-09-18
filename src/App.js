import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import PopularPage from "./components/PopularPage";
import Upcoming from "./components/Upcoming";
import SeriesPage from "./components/SeriesPage";
import Footer from "./components/Footer";
import { getMoviePopular, getMovieUpcoming, getPopularSeries, searchMovie } from "./connections/api";
import { useEffect, useState, useRef } from "react";

function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const baseImgUrl = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    getMovieUpcoming().then((result) => {
      setUpcomingMovies(result);
    });
    getMoviePopular().then((result) => {
      setPopularMovies(result);
    });
    getPopularSeries().then((result) => {
      setPopularSeries(result);
    });
  }, []);

  const ListOfContent = (property) => {
    return property.map((movie, i) => {
      let name = undefined;
      let date = undefined;
      if (movie.title) {
        name = movie.title;
        date = movie.release_date;
      } else if (movie.name) {
        name = movie.name;
        date = movie.first_air_date;
      }
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">
            <p>{name}</p>
          </div>
          <img src={`${baseImgUrl}${movie.poster_path}`} className="Movie-image" />
          <div className="Movie-date">{date}</div>
          <div className="Movie-rating">{movie.vote_average}</div>
        </div>
      );
    });
  };

  // const linkRef = useRef(null);
  // const goTo = (ref) => {
  //   window.scrollTo({
  //     top: ref.offsetBottom,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <div>
      <div className="myBg">
        <NavigationBar />
        <Intro />
      </div>
      <div className="contents">
        <PopularPage getPopular={ListOfContent} getPopularList={popularMovies} />
        <Upcoming getUpcoming={ListOfContent} getUpcomingList={upcomingMovies} />
        <SeriesPage getSeries={ListOfContent} getSeriesList={popularSeries} />
      </div>
      <div className="myFooter">
        <Footer />
      </div>
    </div>
  );
}

export default App;
