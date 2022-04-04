import React from 'react';
import { RightDetails, ImageGallery, DetailsFooter } from '../components/ProductDetail/index.js';
import { detailStore } from '../stores.js';

function ProductDetail() {
  const pdStore = detailStore.getState();
  const { counter, apiResults } = pdStore;

  console.log('counter:', counter);
  console.log('apiResults:', apiResults);

  return (
    <>
      <h1 className="temp-title">ProductDetail</h1>
      <div id="product-detail-widget">
        <div className="pd-top-row-container">
          <ImageGallery />
          <RightDetails />
        </div>
        <DetailsFooter />
      </div>
    </>
  );
}

export default ProductDetail;
