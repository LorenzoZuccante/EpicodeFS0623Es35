import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieDetails from "./MovieDetails";

const MainContent = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [whatchItAgainMovies, setWhatchItAgainMovies] = useState([]);
  const [newReleasesMovies, setNewReleasesMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async (apiURL, setter) => {
      try {
        const response = await axios.get(apiURL);
        setter(response.data.Search || []);
      } catch (error) {
        console.error("Error fetching API:", error);
      }
    };

    fetchMovies(
      "http://www.omdbapi.com/?apikey=a023eb19&s=Alien",
      setTrendingMovies
    );
    fetchMovies(
      "http://www.omdbapi.com/?apikey=a023eb19&s=Harry%20Potter",
      setWhatchItAgainMovies
    );
    fetchMovies(
      "http://www.omdbapi.com/?apikey=a023eb19&s=The%20Walking%20Dead",
      setNewReleasesMovies
    );
  }, []);

  const openDetails = (movieId) => {
    setSelectedMovie(movieId);
  };

  const renderMovies = (movies, title) => (
    <div>
      <h2 className="text-light">{title}</h2>
      <div className="d-flex overflow-auto">
        {movies.map((movie) => (
          <div
            className="card mx-2"
            key={movie.imdbID}
            style={{ width: "200px", cursor: "pointer" }}
          >
            <img
              src={movie.Poster}
              className="card-img-top img-fluid"
              alt={movie.Title}
              style={{ maxHeight: "300px", width: "100%" }}
            />
            <div className="card-body">
              <button
                className="btn btn-primary"
                onClick={() => openDetails(movie.imdbID)}
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderModal = () => {
    if (!selectedMovie) {
      return null;
    }

    return (
      <div
        className="modal"
        style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <MovieDetails movieId={selectedMovie} />
      </div>
    );
  };

  return (
    <div className="bg-dark pb-3">
      {renderMovies(trendingMovies, "Trending Now")}
      {renderMovies(whatchItAgainMovies, "Whatch It Again")}
      {renderMovies(newReleasesMovies, "New Releases")}
      {renderModal()}
    </div>
  );
};

export default MainContent;
