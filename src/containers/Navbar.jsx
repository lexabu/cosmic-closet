import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Cart, Github } from 'react-bootstrap-icons';
import {
  Drawer,
  Table,
  ActionIcon,
  Space,
  Popover,
} from '@mantine/core';
import { detailStore } from '../stores.js';
import './Navbar.scss';

function Navbar() {
  const headers = {
    Authorization: process.env.GITHUB_API_KEY,
  };

  const allProducts = detailStore((state) => state.allProducts);
  const setAllProducts = detailStore((state) => state.setAllProducts);
  const [cartContents, setCartContents] = useState([]);

  const cartArr = cartContents.map((element) => (
    <tr key={element.sku_id}>
      <td>{element.sku_id}</td>
      <td>{element.count}</td>
    </tr>
  ));

  useEffect(() => {
    axios.get(`${process.env.URL}cart`, { headers })
      .then((response) => {
        setCartContents(response.data);
      })
      .catch((err) => {
        throw err;
      });

    axios.get(`${process.env.URL}products`, { headers })
      .then((response) => {
        setAllProducts(response.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const [cartOpened, setCartOpened] = useState(false);
  const [productsOpened, setProductsOpened] = useState(false);

  return (
    <>
      {/* NAVBAR */}
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
            // width={260}
            position="bottom"
            withArrow
          >
            <div className="nav-product-link-container">
              {allProducts.map((product) => (
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
        <ActionIcon className="cart-icon" onClick={() => { setCartOpened(true); }}>
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
    </>
  );
}

export default Navbar;
