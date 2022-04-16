import React, { useState } from 'react';
import uuid from 'react-uuid';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { Cart, Github } from 'react-bootstrap-icons';
import { useQueryClient, useQuery } from 'react-query';
import {
  Drawer,
  Table,
  ActionIcon,
  Space,
  Popover,
} from '@mantine/core';
// import { detailStore } from '../stores.js';
import './Navbar.scss';

import { getAllProducts, getCart } from '../utils/productInfoApi.js';

function Navbar() {
  // Access the client
  // const queryClient = useQueryClient();
  // console.log(queryClient);

  // const cachedData = queryClient.getQueryData('allProducts');
  // console.log('🚀 ~ Navbar ~ allProducts', cachedData);

  // Queries
  const allProducts = useQuery('allProducts', getAllProducts);
  const cart = useQuery('cart', getCart);

  const [cartOpened, setCartOpened] = useState(false);
  const [productsOpened, setProductsOpened] = useState(false);

  if (allProducts.isLoading || cart.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (allProducts.isError || cart.isError) {
    return <h1>Error...</h1>;
  }

  const cartArr = cart.data.data.map((element) => (
    <tr key={element.sku_id}>
      <td>{element.sku_id}</td>
      <td>{element.count}</td>
    </tr>
  ));

  return (
    <div className="top-banner">
      <ul className="nav-list">
        <Link
          className={`nav-item${window.location.pathname === '/' ? ' active' : ''}`}
          to="/"
        >
          Home
        </Link>
        <Popover
          opened={productsOpened}
          onClose={() => { setProductsOpened(false); }}
          target={(
            <span
              tabIndex={0}
              role="button"
              className={`nav-item${window.location.pathname !== '/' ? ' active' : ''}`}
              onClick={() => { setProductsOpened(!productsOpened); }}
              onKeyDown={(e) => {
                if (e.code === 'Enter') {
                  setProductsOpened(true);
                }
              }}
            >
              Products
            </span>
          )}
          position="bottom"
          withArrow
        >
          <div className="nav-product-link-container">
            {allProducts.data.data.map((product) => (
              <a
                href={`/${product.id}`}
                className={`product-popdown-item${window.location.pathname === `/${product.id}` ? ' active' : ''}`}
                key={uuid()}
              >
                {product.name}
              </a>
            ))}
          </div>
        </Popover>
        <a
          className="nav-item"
          href="https://github.com/Team-1-Mercury/retro#readme"
          target="_blank"
          rel="noreferrer"
        >
          About
          <Space w="md" />
          <Github />
        </a>
      </ul>
      <ActionIcon
        aria-label="cart button"
        className="cart-icon"
        onClick={() => {
          setCartOpened(true);
        }}
      >
        <Cart />
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
          <tbody>{cartArr}</tbody>
        </Table>
      </Drawer>
    </div>
  );
}

export default Navbar;
