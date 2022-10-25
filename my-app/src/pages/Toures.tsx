const Toures = () => {
  return (
    <ul>
      <li className="movies__item">
        <a href="" className="movies__link modal__open">
          {/* <img src='./images/movie.jpg' className="movie__image" alt="Movie"> */}
          <div className="movie__text-part">
            <h2 className="movie__title">MONSTER HUNTER</h2>
            <p className="movie__genre">
              Drama, Action <span className="stick">|</span>
              <span className="movie__year"></span> 2020
            </p>
          </div>
        </a>
      </li>
    </ul>
  );
};

export { Toures };
