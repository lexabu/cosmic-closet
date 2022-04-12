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
      count: 50,
    },
  };

  const ratingsURL = new URL(`${process.env.URL}reviews/meta`);
  const { helpfulReviewsURL, newestReviewsURL, relevantReviewsURL } = new URL(`${process.env.URL}reviews`);

  helpfulReviewsURL.searchParams.set('sort', 'helpful');
  newestReviewsURL.searchParams.set('sort', 'newest');
  relevantReviewsURL.searchParams.set('sort', 'relevant');

  const setHelpfulReviews = reviewStore((state) => state.setHelpfulReviews);
  const setNewestReviews = reviewStore((state) => state.setNewestReviews);
  const setRatings = reviewStore((state) => state.setRatings);
  const setRelevantReviews = reviewStore((state) => state.setRelevantReviews);
  const setReviews = reviewStore((state) => state.setReviews);

  useEffect(() => {
    axios.get(ratingsURL.toString(), authHeaders)
      .then((results) => {
        setRatings(results.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  useEffect(() => {
    axios.get(helpfulReviewsURL.toString(), authHeaders)
      .then((results) => {
        setHelpfulReviews(results.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  useEffect(() => {
    axios.get(newestReviewsURL.toString(), authHeaders)
      .then((results) => {
        setNewestReviews(results.data);
      })
      .catch((err) => {
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
