import React from 'react';
import axios from 'axios';
import $ from 'jquery';
// import { toast } from 'react-toastify';
import { Button } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { BsFillCartCheckFill, BsRulers } from 'react-icons/bs';
import { detailStore } from '../../../stores.js';
import './AddToCart.scss';

function AddToCart() {
  const selectedSizeSku = detailStore((state) => state.selectedSize);
  const selectedQuantity = detailStore((state) => state.selectedQuantity);

  const handleClick = () => {
    // Show size dropdown if no size selected
    if (selectedSizeSku === '') {
      console.log('no selected size');
      $('#pd-size-selector').trigger('click');

      showNotification({
        title: 'Please select size',
        message: 'You want it to fit, don\'t you? 👀',
        color: 'cyan',
        icon: <BsRulers />,
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
        showNotification({
          title: `${response.length} item${response.length > 1 ? 's' : ''} added to cart!`,
          message: 'You\'re gonna look 🔥🔥',
          color: 'cyan',
          icon: <BsFillCartCheckFill />,
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
