import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { reviewStore } from '../stores.js';
import { LeftColumn, RightColumn } from '../components/RatingsReviews/index.js';

function RatingsReviews() {
  const { id } = useParams();

  const authHeaders = {
    headers: {
      Authorization: process.env.GITHUB_API_KEY,
    },
    params: {
      product_id: id,
    },
  };

  const setRatings = reviewStore((state) => state.setRatings);
  useEffect(() => {
    axios.get(`${process.env.URL}reviews/meta`, authHeaders)
      .then((results) => {
        setRatings(results.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const setReviews = reviewStore((state) => state.setReviews);
  useEffect(() => {
    axios.get(`${process.env.URL}reviews`, authHeaders)
      .then((results) => {
        setReviews(results.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <div id="ratings-reviews" className="ratings-reviews">
      <LeftColumn />
      <RightColumn />
    </div>
  );
}

export default RatingsReviews;
