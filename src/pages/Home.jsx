import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';
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
