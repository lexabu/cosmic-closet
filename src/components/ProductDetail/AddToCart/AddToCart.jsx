import React from 'react';
import axios from 'axios';
import Toast from '../../Toast/Toast.jsx';
import { detailStore } from '../../../stores.js';
import './AddToCart.scss';

function AddToCart() {
  const selectedSizeSku = detailStore((state) => state.selectedSize);
  const selectedQuantity = detailStore((state) => state.selectedQuantity);
  const toggleShowSizeSelector = detailStore((state) => state.toggleShowSizeSelector);
  const toggleToastShown = detailStore((state) => state.toggleToastShown);

  const handleClick = () => {
    // Show size dropdown if no size selected
    if (selectedSizeSku === '') {
      toggleShowSizeSelector(true);
      toggleToastShown();
      return;
    }

    // Create new promise array to later invoke Promise.all()
    const promises = [];

    for (let i = 0; i < selectedQuantity; i += 1) {
      promises.push(
        new Promise((resolve, reject) => {
          axios.post(`${process.env.URL}cart`, {
            sku_id: selectedSizeSku,
          }, {
            headers: {
              Authorization: process.env.GITHUB_API_KEY,
            },
          })
            .then((response) => {
              resolve(response);
            })
            .catch((err) => {
              reject(err);
            });
        }),
      );
    }

    Promise.all(promises)
      // .then will be removed once out of the dev phase (keeping for debugging)
      .then((response) => {
        console.log('Successful POST to /cart!');
        console.log(response);
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    // This is an empty wrapper since I can't return both button and Toast component
    <>
      <button
        className="add-to-cart-button"
        type="button"
        onClick={handleClick}
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
