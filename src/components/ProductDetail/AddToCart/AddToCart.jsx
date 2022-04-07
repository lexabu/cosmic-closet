import React from 'react';
import axios from 'axios';
import Toast from '../../Toast/Toast.jsx';
import { detailStore } from '../../../stores.js';
import './AddToCart.scss';

function AddToCart() {
  // const selectedStyle = detailStore((state) => state.selectedStyle);
  const selectedSizeSku = detailStore((state) => state.selectedSize);
  const toggleShowSizeSelector = detailStore((state) => state.toggleShowSizeSelector);
  const selectedQuantity = detailStore((state) => state.selectedQuantity);
  const toggleToastShown = detailStore((state) => state.toggleToastShown);

  const handleClick = () => {
    if (selectedSizeSku === '') {
      toggleShowSizeSelector(true);
      toggleToastShown();
    } else {
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

      console.log('promises', promises);

      Promise.all(promises)
        .then((response) => {
          console.log('Successful POST to /cart!');
          console.log(response);
        })
        .catch((err) => {
          throw err;
        });
    }
  };

  return (
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
