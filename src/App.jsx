import React from 'react';
import ProductDetail from './containers/ProductDetail.jsx';
import QuestionsAnswers from './containers/QuestionsAnswers.jsx';
import RatingsReviews from './containers/RatingsReviews.jsx';
import './App.scss';

function App() {
  return (
    // Uses main instead of div to take advantage of the CSS reset template,
    // which puts everything in a padded container.
    <main>
      <ProductDetail />
      <QuestionsAnswers />
      <RatingsReviews />
    </main>
  );
}

export default App;
