import React from 'react';

import { RightDetails, ImageGallery, DetailsFooter } from '../components/ProductDetail';

function ProductDetail() {
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
