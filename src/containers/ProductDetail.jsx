import React from 'react';
import { useParams } from 'react-router-dom';
import { RightDetails, ImageGallery, DetailsFooter } from '../components/ProductDetail';

function ProductDetail() {
  const { id } = useParams();
  return (
    <>
      <h1 className="temp-title">{id}</h1>
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
