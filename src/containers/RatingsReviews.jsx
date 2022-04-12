import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { reviewStore } from '../stores.js';
import { LeftColumn, RightColumn } from '../components/RatingsReviews/index.js';

function RatingsReviews() {
  const { id } = useParams();

  const ratingsURL = new URL(`${process.env.URL}reviews/meta`);
  const setRatings = reviewStore((state) => state.setRatings);
  // console.log('ratingsURL: ', ratingsURL.toString());

  const helpfulReviewsURL = new URL(`${process.env.URL}reviews`);
  helpfulReviewsURL.searchParams.set('sort', 'helpful');
  helpfulReviewsURL.searchParams.set('count', '50');
  // helpfulReviewsURL.searchParams.set('product_id', id);
  // console.log('helpfulReviewsURL: ', helpfulReviewsURL.toString());

  const newestReviewsURL = new URL(`${process.env.URL}reviews`);
  newestReviewsURL.searchParams.set('sort', 'newest');
  newestReviewsURL.searchParams.set('count', '50');
  // newestReviewsURL.searchParams.set('product_id', id);
  console.log('newestReviewsURL: ', newestReviewsURL.toString());

  const relevantReviewsURL = new URL(`${process.env.URL}reviews`);
  relevantReviewsURL.searchParams.set('sort', 'relevant');
  relevantReviewsURL.searchParams.set('count', '50');
  // relevantReviewsURL.searchParams.set('product_id', id);
  // console.log(' relevantReviewsURL: ', relevantReviewsURL.toString());

  const reviewsURL = new URL(`${process.env.URL}reviews`);
  // console.log('reviewsURL: ', reviewsURL.toString());

  const setHelpfulReviews = reviewStore((state) => state.setHelpfulReviews);
  const setNewestReviews = reviewStore((state) => state.setNewestReviews);
  const setRelevantReviews = reviewStore((state) => state.setRelevantReviews);
  const setReviews = reviewStore((state) => state.setReviews);

  const authHeaders = {
    headers: {
      Authorization: process.env.GITHUB_API_KEY,
    },
    params: {
      product_id: id,
    },
  };

  useEffect(() => {
    axios.get(ratingsURL.toString(), authHeaders)
      .then((results) => {
        setRatings(results.data);
      })
      .catch((err) => {
        console.log('ratingsURL error: ', err);
        throw err;
      });
  }, []);

  useEffect(() => {
    axios.get(helpfulReviewsURL.toString(), authHeaders)
      .then((results) => {
        setHelpfulReviews(results.data);
      })
      .catch((err) => {
        console.log('helpfulReviewsURL error: ', err);
        throw err;
      });
  }, []);

  useEffect(() => {
    axios.get(newestReviewsURL.toString(), authHeaders)
      .then((results) => {
        setNewestReviews(results.data);
      })
      .catch((err) => {
        console.log('newestReviewsURL error: ', err);
        throw err;
      });
  }, []);

  useEffect(() => {
    axios.get(relevantReviewsURL.toString(), authHeaders)
      .then((results) => {
        setRelevantReviews(results.data);
      })
      .catch((err) => {
        console.log('relevantReviewsURL error: ', err);
        throw err;
      });
  }, []);

  useEffect(() => {
    axios.get(reviewsURL.toString(), authHeaders)
      .then((results) => {
        setReviews(results.data);
      })
      .catch((err) => {
        console.log('reviewsURL error: ', err);
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
