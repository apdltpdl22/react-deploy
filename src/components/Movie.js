import propTypes from 'prop-types';
import PopTypes from 'prop-types';
import { Link } from 'react-router-dom'
import styles from "./Movie.module.css";

function Movie({coverImg, title, summary, genres, id, year}) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img}/>
      <h2 className={styles.movie__title}>
        <Link to ={`/movie/${id}`}>{title}</Link>
      </h2>
      <h3 className={styles.movie__year}>{year}</h3>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...`: summary}</p>
      <ul className={styles.movie__genres}>
        {genres.length > 1 ?
        (genres.map((g) => (
          <li key={g}>{g}</li>
          ))) :
        <li>{genres}</li>
        }        
      </ul>
      </div>
    )
  }

  Movie.propTypes = {
    id: propTypes.number.isRequired,
    coverImg : propTypes.string.isRequired,
    title : propTypes.string.isRequired,
    summary : propTypes.string.isRequired,
    // genres: propTypes.arrayOf(PopTypes.string).isRequired
  };
export default Movie;