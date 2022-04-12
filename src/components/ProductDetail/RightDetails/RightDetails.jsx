import React from 'react';
import { detailStore, reviewStore } from '../../../stores.js';
import Styles from '../Styles/Styles.jsx';
import CartActions from '../CartActions/CartActions.jsx';
import './RightDetails.scss';
import { StarRating } from '../../RatingsReviews/index.js';

function RightDetails() {
  const title = detailStore((state) => state.productDetails.name);
  const category = detailStore((state) => state.productDetails.category);
  const selectedStyle = detailStore((state) => state.selectedStyle);
  const imageZoomed = detailStore((state) => state.imageZoomed);
  const averageRating = reviewStore((state) => state.averageRating);
  const reviews = reviewStore((state) => state.reviews);
  const reviewsCount = reviews.results ? reviews.results.length : 'uhhh';

  const originalPrice = selectedStyle.original_price;
  const salePrice = selectedStyle.sale_price;

  let onSale = false;

  if (salePrice) {
    onSale = true;
  }

  return (
    <div className={`pd-right-details-container${imageZoomed ? ' hidden' : ''}`}>
      <div className="pd-stars-container">
        <StarRating rating={averageRating} />
        <span className="pd-read-all-reviews">{`Read all ${reviewsCount} reviews`}</span>
      </div>
      <div className="pd-info">
        <h4 className="pd-category">{category}</h4>
        <h1 className="pd-title">{title}</h1>
        <div className="pd-price-container">
          <span className={`pd-price${onSale ? ' strike' : ''}`}>{` $${originalPrice} `}</span>
          {onSale && <span className={`pd-price${onSale ? ' sale' : ''}`}>{`$${salePrice}`}</span>}
        </div>
      </div>
      <Styles />
      <CartActions />
    </div>
  );
}

export default RightDetails;
