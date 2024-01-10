import React, { useEffect, useState } from "react";
import axios from "axios";

const MovieDetails = ({ movieId }) => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchMovieInfo = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?apikey=a023eb19&i=${movieId}`
        );
        setMovieInfo(response.data);
      } catch (error) {
        console.error("Errore durante la richiesta API:", error);
      }
    };

    fetchMovieInfo();
  }, [movieId]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `https://striveschool-api.herokuapp.com/api/comments/${movieId}`,
          {
            headers: {
              Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTllOTIzZDZlYmM0YjAwMTg1MGYxODYiLCJpYXQiOjE3MDQ4OTA5NDEsImV4cCI6MTcwNjEwMDU0MX0.hd_2Bq0aOTw_t5F88YNNLoldE8FgZ5jsxOgnOLzGQFM",
            },
          }
        );
        setComments(response.data);
      } catch (error) {
        console.error('Errore durante il recupero dei commenti:', error);
      }
    };

    fetchComments();
  }, [movieId]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        'https://striveschool-api.herokuapp.com/api/comments/',
        {
          rate: 1,
          comment: newComment,
          elementId: movieId,
        },
        {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTllOTIzZDZlYmM0YjAwMTg1MGYxODYiLCJpYXQiOjE3MDQ4OTA5NDEsImV4cCI6MTcwNjEwMDU0MX0.hd_2Bq0aOTw_t5F88YNNLoldE8FgZ5jsxOgnOLzGQFM",
          },
        }
      );
      
      setNewComment('');
    } catch (error) {
      console.error('Errore durante l\'invio del commento:', error);
    }
  };

  return (
    <div className="container">
      {movieInfo && (
        <div>
          <h2>{movieInfo.Title}</h2>
          <img src={movieInfo.Poster} alt={movieInfo.Title} />
        </div>
      )}

      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment._id}>
            {comment.comment}
          </li>
        ))}
      </ul>

      <form onSubmit={handleCommentSubmit}>
        <div className="form-group">
          <label htmlFor="comment">Add Comment:</label>
          <textarea
            className="form-control"
            id="comment"
            rows="3"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default MovieDetails;
