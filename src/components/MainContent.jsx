import React, { useEffect, useState } from "react";
import axios from "axios";

const MainContent = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [whatchItAgainMovies, setWhatchItAgainMovies] = useState([]);
  const [newReleasesMovies, setNewReleasesMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchMovies = async (apiURL, setter) => {
      try {
        const response = await axios.get(apiURL);
        setter(response.data.Search || []);
      } catch (error) {
        console.error("Errore durante la richiesta API:", error);
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

  const openModal = async (movie) => {
    setSelectedMovie(movie);
    await fetchComments(movie.imdbID);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  const fetchComments = async (movieId) => {
    try {
      const response = await axios.get(
        `https://striveschool-api.herokuapp.com/api/comments/${movieId}`,
        {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0NDZhODJjNmEwZDAwMTg0OTU5YjMiLCJpYXQiOjE3MDMxNjE5MjksImV4cCI6MTcwNDM3MTUyOX0.gL7TeofYi7vcnjsGmGcaS7WPEIubZO-qPZUXk4AqW9Y',
          },
        }
      );
      setComments(response.data);
    } catch (error) {
      console.error('Errore durante il recupero dei commenti:', error);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        'https://striveschool-api.herokuapp.com/api/comments/',
        {
          comment: newComment,
          elementId: selectedMovie?.imdbID || '',
        },
        {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0NDZhODJjNmEwZDAwMTg0OTU5YjMiLCJpYXQiOjE3MDMxNjE5MjksImV4cCI6MTcwNDM3MTUyOX0.gL7TeofYi7vcnjsGmGcaS7WPEIubZO-qPZUXk4AqW9Y',
          },
        }
      );

      fetchComments(selectedMovie?.imdbID || '');
      setNewComment('');
    } catch (error) {
      console.error('Errore durante l\'invio del commento:', error);
    }
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
            onClick={() => openModal(movie)}
          >
            <img
              src={movie.Poster}
              className="card-img-top img-fluid"
              alt={movie.Title}
              style={{ maxHeight: "300px", width: "100%" }}
            />
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
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{selectedMovie.Title}</h5>
              <button type="button" className="close" onClick={closeModal}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img
                src={selectedMovie.Poster}
                alt={selectedMovie.Title}
                style={{ width: "100%" }}
              />
              <ul className="list-group mt-3">
                <li className="list-group-item">Commenti:</li>
                {comments.map((comment) => (
                  <li className="list-group-item" key={comment._id}>
                    {comment.comment}
                  </li>
                ))}
              </ul>
              <form className="mt-3" onSubmit={handleCommentSubmit}>
                <div className="form-group">
                  <label htmlFor="comment">Aggiungi un commento:</label>
                  <textarea
                    className="form-control"
                    id="comment"
                    rows="3"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Aggiungi Commento
                </button>
              </form>
            </div>
          </div>
        </div>
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
