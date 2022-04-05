import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { detailStore } from '../stores.js';
import { RightDetails, ImageGallery, DetailsFooter } from '../components/ProductDetail';

function ProductDetail() {
  const { id } = useParams();

  const setApiResults = detailStore((state) => state.setDetailsApiResults);
  const res = detailStore((state) => state.detailsApiResults);

  console.log('res', res);

  useEffect(() => {
    console.log('useEffect() running...');
    axios.get(`${process.env.URL}products/${id}`, {
      headers: {
        Authorization: process.env.GITHUB_API_KEY,
      },
    })
      .then((results) => {
        setApiResults(results.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  // console.log(process.env.URL);

  return (
    <>
      <h1 className="temp-title">{id}</h1>
      <div id="product-detail-widget">
        <div className="pd-top-row-container">
          <ImageGallery />
          <RightDetails />
        </div>
        <DetailsFooter />
      </div>
    </>
  );
}

export default ProductDetail;
