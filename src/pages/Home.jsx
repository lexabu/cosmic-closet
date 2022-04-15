import React from 'react';
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';
import './Home.scss';
import Navbar from '../containers/Navbar.jsx';
import { detailStore } from '../stores.js';

function Home() {
  const products = detailStore((state) => state.allProducts);

  return (
    <>
      <Navbar />
      <main>
        <div className="all-products-container">
          {products.map((product) => (
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
