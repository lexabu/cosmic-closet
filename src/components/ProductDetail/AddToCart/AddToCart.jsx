import React from 'react';
import { detailStore } from '../../../stores.js';
import './AddToCart.scss';

function AddToCart() {
  // const selectedStyle = detailStore((state) => state.selectedStyle);
  const selectedSizeSku = detailStore((state) => state.selectedSize);
  const toggleShowSizeSelector = detailStore((state) => state.toggleShowSizeSelector);
  // const selectedQuantity = detailStore((state) => state.selectedQuantity);

  return (
    <button
      type="button"
      onClick={() => {
        if (selectedSizeSku === '') {
          // $('#pd-size-selector').click();
          toggleShowSizeSelector(true);
        }
      }}
    >
      Add to Cart
    </button>
  );
}

export default AddToCart;
