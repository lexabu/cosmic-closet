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
  const ratingsUrl = new URL(`${process.env.URL}reviews/meta`);
  useEffect(() => {
    axios.get(ratingsUrl.toString(), authHeaders)
      .then((results) => {
        setRatings(results.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const setReviews = reviewStore((state) => state.setReviews);
  const reviewsUrl = new URL(`${process.env.URL}reviews`);
  useEffect(() => {
    axios.get(reviewsUrl.toString(), authHeaders)
      .then((results) => {
        // console.log('setReviews data: ', results.data);
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
