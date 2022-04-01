import React from 'react';
// Import containers and components
import { detailStore } from './stores.js';
import ProductDetail from './containers/ProductDetail.jsx';

function App() {
  const currentCount = detailStore((state) => state.counter);
  const goUpBoi = detailStore((state) => state.increaseCounter);
  const goDownBoi = detailStore((state) => state.decreaseCounter);

  return (
    <>
      <h1>Hello World</h1>
      <h2>{`Count: ${currentCount}`}</h2>
      <button type="submit" onClick={goDownBoi}>go DOWN boi</button>
      <button type="submit" onClick={goUpBoi}>go UP boi</button>
      <ProductDetail />
    </>
  );
}

export default App;
