import React, { useEffect } from 'react';
import { RightDetails, ImageGallery, DetailsFooter } from '../components/ProductDetail/index.js';
import { detailStore } from '../stores.js';

function ProductDetail() {
  // This is a way to get all data, but is messy with re-rendering.
  // In other words, this way is more concise but will trigger a re-render
  // if anything in the store changes, whether or not it's being assigned to a const.00

  // const pdStore = detailStore();
  // const { counter, apiResults, setApiResults } = pdStore;

  // This way is less concise but much more clean. It's a bit easier
  // to read and understand, and will only trigger re-rendering when necessary
  const counter = detailStore((state) => state.counter);
  const apiResults = detailStore((state) => state.apiResults);
  const setApiResults = detailStore((state) => state.setApiResults);

  useEffect(() => {
    setApiResults([5, 5, 5, 5, 5]);
  }, []);

  console.log('counter:', counter);
  console.log('apiResults:', apiResults);

  return (
    <div id="product-detail-widget">
      <div className="pd-top-row-container">
        <ImageGallery />
        <RightDetails />
      </div>
      <DetailsFooter />
    </div>
  );
}

export default ProductDetail;
