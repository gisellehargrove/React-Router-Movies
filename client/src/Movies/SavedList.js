import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
        <span key={movie.id} className="saved-movie">
          <Link to={`/movies/${movie.id}`}>
            {movie.title}
          </Link>
        </span>
    ))}
    <NavLink to="/">
      <div className="home-button">Home</div>
    </NavLink>
  </div>
);

export default SavedList;
