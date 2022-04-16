import React from 'react';
import axios from 'axios';
import { Button } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { CartCheckFill, Rulers } from 'react-bootstrap-icons';
import { detailStore } from '../../../stores.js';
import './AddToCart.scss';

function AddToCart() {
  const selectedSizeSku = detailStore((state) => state.selectedSize);
  const selectedQuantity = detailStore((state) => state.selectedQuantity);

  const handleClick = () => {
    // Show size dropdown if no size selected
    if (selectedSizeSku === '') {
      document.getElementById('pd-size-selector').click();

      showNotification({
        title: 'Please select size',
        message: 'You want it to fit, don\'t you? 👀',
        icon: <Rulers />,
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
          icon: <CartCheckFill />,
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
    >
      Add to Cart
    </Button>
  );
}

export default AddToCart;
