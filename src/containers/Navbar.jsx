import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Drawer, Table, ActionIcon } from '@mantine/core';
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {
  const headers = {
    Authorization: process.env.GITHUB_API_KEY,
  };

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
      });
  }, []);

  const [cartOpened, setCartOpened] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <div className="top-banner">
        <ul className="nav-list">
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
        </ul>
        <ActionIcon className="cart-icon" onClick={() => { setCartOpened(true); }}>
          <AiOutlineShoppingCart />
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
