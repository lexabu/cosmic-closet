import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { detailStore } from '../stores.js';
import { RightDetails, ImageGallery, DetailsFooter } from '../components/ProductDetail/index.js';

function ProductDetail() {
  const { id } = useParams();

  // optional const just to keep it DRY
  const authHeaders = {
    headers: {
      Authorization: process.env.GITHUB_API_KEY,
    },
  };

  // zustand pulling in the specified functions
  const setDetailsFromApiCall = detailStore((state) => state.setProductDetails);
  const setStyles = detailStore((state) => state.setStyles);
  const setSelectedStyle = detailStore((state) => state.setSelectedStyle);
  const imageZoomed = detailStore((state) => state.imageZoomed);

  // const handleAnalytics = detailStore((state) => state.handleAnalytics);

  useEffect(() => {
    // Get product info and add to state
    axios.get(`${process.env.URL}products/${id}`, authHeaders)
      .then((results) => {
        setDetailsFromApiCall(results.data);
      })
      .catch((err) => {
        throw err;
      });

    // Get styles and add to state
    axios.get(`${process.env.URL}products/${id}/styles`, authHeaders)
      .then((results) => {
        setStyles(results.data.results);
        setSelectedStyle(results.data.results[0]);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  // useEffect(() => {
  //   window.addEventListener('click', handleAnalytics);
  // }, []);

  return (
    <div id="product-detail" className="widget">
      <div className={`pd-top-row-container${imageZoomed ? ' zoomed' : ''}`}>
        <ImageGallery />
        <RightDetails />
      </div>
      <DetailsFooter />
    </div>
  );
}

export default ProductDetail;
