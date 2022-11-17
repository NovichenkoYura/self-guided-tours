import { Link } from 'react-router-dom';

const NotFoundpage = () => {
  return (
    <div>
      <h1>
        Page not found. Go <Link to="/">Home</Link>
      </h1>
    </div>
  );
};

export { NotFoundpage };
