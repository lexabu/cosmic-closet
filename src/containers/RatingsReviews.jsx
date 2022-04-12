import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { reviewStore } from '../stores.js';
import { LeftColumn, RightColumn } from '../components/RatingsReviews/index.js';

function RatingsReviews() {
  const { id } = useParams();

  const ratingsURL = new URL(`${process.env.URL}reviews/meta`);
  const setRatings = reviewStore((state) => state.setRatings);

  // todo: refactor to use reviewsURL for new URL(`${process.env.URL}reviews`)

  const reviewsURL = new URL(`${process.env.URL}reviews`);
  const helpfulReviewsURL = reviewsURL;
  helpfulReviewsURL.searchParams.set('sort', 'helpful');
  const setHelpfulReviews = reviewStore((state) => state.setHelpfulReviews);

  const newestReviewsURL = reviewsURL;
  newestReviewsURL.searchParams.set('sort', 'newest');
  const setNewestReviews = reviewStore((state) => state.setNewestReviews);

  const relevantReviewsURL = reviewsURL;
  relevantReviewsURL.searchParams.set('sort', 'relevant');
  const setRelevantReviews = reviewStore((state) => state.setRelevantReviews);
  const setReviews = reviewStore((state) => state.setReviews);

  const authHeaders = {
    headers: {
      Authorization: process.env.GITHUB_API_KEY,
    },
    params: {
      product_id: id,
      count: 50,
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
        setReviews(results.data);
      })
      .catch((err) => {
        console.log('relevantReviewsURL error: ', err);
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
