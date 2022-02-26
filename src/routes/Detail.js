import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"

function Detail(props) {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const {id} = useParams()
  const getMovie = async() => {
    const json = await (
      await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setMovie(json.data.movie)
      setLoading()
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ?
      (<h1>Loading...</h1>) :
      (<div>
        <h1>{movie.title}</h1>
        <img src = {movie.medium_cover_image}/>
        <p>{movie.year}</p>
        <ul>{movie.genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
        </ul>
        <p>{movie.description_full}</p>
        <p>{movie.runtime}분</p>
        <p>{movie.rating}</p>
      </div>) 
      }
    </div>
  );
}

export default Detail;