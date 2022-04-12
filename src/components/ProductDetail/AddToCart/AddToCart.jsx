import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import { toast } from 'react-toastify';
import { Button } from '@mantine/core';
import { detailStore } from '../../../stores.js';
import './AddToCart.scss';

function AddToCart() {
  const selectedSizeSku = detailStore((state) => state.selectedSize);
  const selectedQuantity = detailStore((state) => state.selectedQuantity);

  const handleClick = () => {
    // Show size dropdown if no size selected
    if (selectedSizeSku === '') {
      $('#pd-size-selector').trigger('click');

      toast.warn('Please select size', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
      .then((response) => {
        toast.success(`${response.length} item${response.length > 1 ? 's' : ''} added to cart!`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <Button
      className="add-to-cart-button"
      type="button"
      onClick={handleClick}
      size="lg"
      uppercase
      color="cyan"
    >
      Add to Cart
    </Button>
  );
}

export default AddToCart;
