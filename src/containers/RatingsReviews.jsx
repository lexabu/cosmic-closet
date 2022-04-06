import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { reviewMetaStore } from '../stores.js';
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

  // zustand pulling in the specified functions
  const setReviewMetaFromApiCall = reviewMetaStore((state) => state.setRatings);
  console.log(setReviewMetaFromApiCall);
  useEffect(() => {
    // Get ratings via reviewMeta and add to state
    axios.get(`${process.env.URL}reviews/meta`, authHeaders)
      .then((results) => {
        // console.log(results.data);
        setReviewMetaFromApiCall(results.data);
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
