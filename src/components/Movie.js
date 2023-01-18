import PropTypes from "prop-types";

function Movie({coverImg, title, summary, genres}) { // movies 컴포넌트가 중괄호 안의 정보들을 부모 컴포넌트로부터 받아오는 것을 의미
    return <div>
    <img src = {coverImg} alt={title}/>
    <h2>{title}</h2>
    <p>{summary}</p>
    <ul>
      {genres.map(g => (
        <li key={g}>{g}</li>
      ))}
    </ul>
    <hr />
  </div>
}

Movie.propTypes = {
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;