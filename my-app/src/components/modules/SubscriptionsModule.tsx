import { Routes, Route, Link } from 'react-router-dom';

const SubscriptionsModule = () => {
  return (
    <div>
      <h1>Subscriptions</h1>
      <ul>
        <li>
          <Link to="subscription1"> subscription1`</Link>{' '}
        </li>
      </ul>

      <Routes>
        <Route path="subscription1" element={<p>subscription1</p>} />
        <Route path="subscription2" element={<p>subscription2</p>} />
      </Routes>
    </div>
  );
};

export { SubscriptionsModule };
