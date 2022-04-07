import React from 'react';
import Toast from '../../Toast/Toast.jsx';
import { detailStore } from '../../../stores.js';
import './AddToCart.scss';

function AddToCart() {
  // const selectedStyle = detailStore((state) => state.selectedStyle);
  const selectedSizeSku = detailStore((state) => state.selectedSize);
  const toggleShowSizeSelector = detailStore((state) => state.toggleShowSizeSelector);
  // const selectedQuantity = detailStore((state) => state.selectedQuantity);
  const toggleToastShown = detailStore((state) => state.toggleToastShown);

  return (
    <>
      <button
        className="add-to-cart-button"
        type="button"
        onClick={() => {
          if (selectedSizeSku === '') {
            toggleShowSizeSelector(true);
            toggleToastShown();
          }
        }}
      >
        Add to Cart
      </button>
      <Toast
        title="Please select a size!"
      />
    </>
  );
}

export default AddToCart;
