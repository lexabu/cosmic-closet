import React, { useState } from 'react';
import { Cart } from 'react-bootstrap-icons';
import { useQuery } from 'react-query';
import {
  Drawer,
  Table,
  ActionIcon,
  Loader,
} from '@mantine/core';
import './CartButton.scss';

import { getCart } from '../../../utils/productInfoApi.js';

function CartButton() {
  const {
    data: cart,
    isError,
    isLoading,
    error,
  } = useQuery('cart', getCart);

  const [cartOpened, setCartOpened] = useState(false);

  if (isLoading) {
    return <Loader className="cart-icon" />;
  }

  if (isError) {
    return (
      <h1>
        Error:
        {error.message}
      </h1>
    );
  }

  const cartArr = cart.data.map((element) => (
    <tr key={element.sku_id}>
      <td>{element.sku_id}</td>
      <td>{element.count}</td>
    </tr>
  ));

  return (
    <>
      <ActionIcon
        aria-label="cart button"
        className="cart-icon"
        onClick={() => {
          setCartOpened(true);
        }}
      >
        {cart.isLoading ? <Loader /> : <Cart />}
      </ActionIcon>
      <Drawer
        className="cart-table-container"
        opened={cartOpened}
        onClose={() => setCartOpened(false)}
        position="right"
        size="xl"
        zIndex={999}
      >
        <Table
          striped
          highlightOnHover
          verticalSpacing="md"
          fontSize="md"
        >
          <thead>
            <tr>
              <th>Sku</th>
              <th>Qty</th>
            </tr>
          </thead>
          <tbody>
            {cartArr}
          </tbody>
        </Table>
      </Drawer>
    </>
  );
}

export default CartButton;
