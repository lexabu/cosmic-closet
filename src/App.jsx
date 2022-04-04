import React from 'react';
// Import containers and components
// import { detailStore, ratingStore } from './stores.js';
import ProductDetail from './containers/ProductDetail.jsx';
import RatingsReviews from './containers/RatingsReviews.jsx';

function App() {
  return (
    <div>
      <ProductDetail />
      <RatingsReviews />
    </div>
  );
}

export default App;
