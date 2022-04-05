import React from 'react';
import ProductDetail from './containers/ProductDetail.jsx';
import QuestionsAnswers from './containers/QuestionsAnswers.jsx';
import RatingsReviews from './containers/RatingsReviews.jsx';
import './App.scss';

function App() {
  const url = window.location.href.split('/');
  const productId = url[url.length - 1];
  console.log('productId', productId);
  console.log('window.location.pathname', window.location.pathname);

  return (
    <div>
      <ProductDetail />
      <QuestionsAnswers />
      <RatingsReviews />
    </div>
  );
}

export default App;
