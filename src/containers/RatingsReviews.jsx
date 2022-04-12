import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { reviewStore } from '../stores.js';
import { LeftColumn, RightColumn } from '../components/RatingsReviews/index.js';

function RatingsReviews() {
  const { id } = useParams();
  const setHelpfulReviews = reviewStore((state) => state.setHelpfulReviews);
  const setNewestReviews = reviewStore((state) => state.setNewestReviews);
  const setRatings = reviewStore((state) => state.setRatings);
  const setRelevantReviews = reviewStore((state) => state.setRelevantReviews);
  const setReviews = reviewStore((state) => state.setReviews);

  const ratingsURL = new URL(`${process.env.URL}reviews/meta`);

  const helpfulReviewsURL = new URL(`${process.env.URL}reviews/`);
  helpfulReviewsURL.searchParams.set('sort', 'helpful');

  const newestReviewsURL = new URL(`${process.env.URL}reviews/`);
  newestReviewsURL.searchParams.set('sort', 'newest');

  const relevantReviewsURL = new URL(`${process.env.URL}reviews/`);
  relevantReviewsURL.searchParams.set('sort', 'relevant');

  const authHeaders = {
    headers: {
      Authorization: process.env.GITHUB_API_KEY,
    },
    params: {
      product_id: id,
      count: '50',
    },
  };

  useEffect(() => {
    axios.get(ratingsURL.toString(), authHeaders)
      .then((results) => {
        // console.log('ratings: ', ratingsURL.toString(), results.data);
        setRatings(results.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  useEffect(() => {
    axios.get(helpfulReviewsURL.toString(), authHeaders)
      .then((results) => {
        // console.log('helpfulReviewsURL : ', helpfulReviewsURL.toString(), results.data);
        setHelpfulReviews(results.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  useEffect(() => {
    axios.get(newestReviewsURL.toString(), authHeaders)
      .then((results) => {
        // console.log('newestReviewsURL : ', newestReviewsURL.toString(), results.data);
        setNewestReviews(results.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  useEffect(() => {
    axios.get(relevantReviewsURL.toString(), authHeaders)
      .then((results) => {
        // console.log('relevantReviewsURL : ', relevantReviewsURL.toString(), results.data);
        setRelevantReviews(results.data);
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
