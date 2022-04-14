import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import { Center, Anchor } from '@mantine/core';
import axios from 'axios';
import './Home.scss';
import Navbar from '../containers/Navbar.jsx';

const headers = {
  Authorization: process.env.GITHUB_API_KEY,
};

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.URL}products`, { headers })
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <div className="all-products-container">
          {products.map((product) => (
            <Anchor key={uuid()} className="home-product" href={product.id} color="cyan">
              <Center className="home-product-title">
                {product.name}
              </Center>
            </Anchor>
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
