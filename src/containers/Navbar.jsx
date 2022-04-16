import React, { useState } from 'react';
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';
import { Github } from 'react-bootstrap-icons';
import { useQuery } from 'react-query';
import { Space, Popover, Loader } from '@mantine/core';
import { getAllProducts } from '../utils/productInfoApi.js';
import CartButton from '../components/ProductDetail/CartButton/CartButton.jsx';
import './Navbar.scss';

function Navbar() {
  const {
    data: allProducts,
    isLoading,
    isError,
    error,
  } = useQuery('allProducts', getAllProducts);

  const [productsOpened, setProductsOpened] = useState(false);

  if (isError) {
    return (
      <h1>
        Error:
        {error.message}
      </h1>
    );
  }

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
            {isLoading ? <Loader /> : allProducts.data.map((product) => (
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
      <CartButton />
    </div>
  );
}

export default Navbar;
