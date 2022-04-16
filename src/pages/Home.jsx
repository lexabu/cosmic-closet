import React from 'react';
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';
import { Loader } from '@mantine/core';
import './Home.scss';
import { useQuery } from 'react-query';
// import 'regenerator-runtime/runtime';
import Navbar from '../containers/Navbar.jsx';
// import { detailStore } from '../stores.js';
import { getAllProducts } from '../utils/productInfoApi.js';

function Home() {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery('allProducts', getAllProducts);

  if (isLoading) {
    return <Loader className="all-products-container" />;
  }

  if (isError) {
    return (
      <h1>
        Error:
        {error.message}
      </h1>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <div className="all-products-container">
          {products.data.map((product) => (
            <Link key={uuid()} className="home-product" to={`/${product.id}`}>
              <div className="home-product-title">
                <h2>{product.name}</h2>
                <em>{product.slogan}</em>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
