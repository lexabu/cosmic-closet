import React from 'react';
// Import containers and components
import { detailStore, ratingStore } from './stores.js';
import ProductDetail from './containers/ProductDetail.jsx';

function App() {
  const currentCount = detailStore((state) => state.counter);
  const goUpBoi = detailStore((state) => state.increaseCounter);
  const goDownBoi = detailStore((state) => state.decreaseCounter);
  const dogs = ratingStore((state) => state.dogs);
  const decreaseDogs = ratingStore((state) => state.decreaseDogs);

  return (
    <>
      <h1>Hello World</h1>
      <h2>{`Count: ${currentCount}`}</h2>
      <button type="submit" onClick={goDownBoi}>go DOWN boi</button>
      <button type="submit" onClick={goUpBoi}>go UP boi</button>
      <h2>{`Dogs: ${dogs}`}</h2>
      <button type="submit" onClick={decreaseDogs}>- dogs</button>
      <button type="submit" onClick={ratingStore((state) => state.increaseDogs)}>+ dogs</button>
      <ProductDetail />
    </>
  );
}

export default App;
