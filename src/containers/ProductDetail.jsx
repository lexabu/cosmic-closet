import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { detailStore } from '../stores.js';
import { RightDetails, ImageGallery, DetailsFooter } from '../components/ProductDetail/index.js';

function ProductDetail() {
  const { id } = useParams();

  const authHeaders = {
    headers: {
      Authorization: process.env.GITHUB_API_KEY,
    },
  };

  const setDetails = detailStore((state) => state.setDetails);
  const setStyles = detailStore((state) => state.setStyles);

  useEffect(() => {
    // Get product info and add to state
    axios.get(`${process.env.URL}products/${id}`, authHeaders)
      .then((results) => {
        setDetails(results.data);
      })
      .catch((err) => {
        throw err;
      });

    // Get styles and add to state
    axios.get(`${process.env.URL}products/${id}/styles`, authHeaders)
      .then((results) => {
        setStyles(results.data.results);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <div id="product-detail-widget">
      <div className="pd-top-row-container">
        <ImageGallery />
        <RightDetails />
      </div>
      <DetailsFooter />
    </div>
  );
}

export default ProductDetail;
