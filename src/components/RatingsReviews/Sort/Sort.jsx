import React, { useState, useEffect } from 'react';
import { reviewStore } from '../../../stores.js';
import './Sort.scss';

function Sort() {
  const [sortOption, setSortOption] = useState('relevance');
  const helpfulReviews = reviewStore((state) => state.helpfulReviews);
  const newestReviews = reviewStore((state) => state.newestReviews);
  const relevantReviews = reviewStore((state) => state.relevantReviews);
  const reviews = reviewStore((state) => state.reviews);
  const setReviews = reviewStore((state) => state.setReviews);

  const updateSortType = () => {
    console.log(sortOption);
    if (sortOption === 'newest') {
      console.log('newestReviews: ', newestReviews);
      setReviews(newestReviews);
    }
    if (sortOption === 'helpful') {
      console.log('helpfulReviews: ', helpfulReviews);
      setReviews(helpfulReviews);
    }
    if (sortOption === 'relevance') {
      console.log('relevantReviews: ', relevantReviews);
      setReviews(relevantReviews);
    }
  };

  useEffect(() => {
    updateSortType();
  });

  if (reviews) {
    const { results } = reviews;
    if (results) {
      const numberOfReviews = results.length;
      return (
        <span className="rr-sort">
          <span className="rr-sort-reviews">
            {numberOfReviews}
            &nbsp;
          </span>
          <span className="rr-sort-text">
            reviews, sorted by
            &nbsp;
          </span>
          <u className="rr-sort-sort-type">
            <select
              name="sort-options"
              defaultValue="relevance"
              onChange={(event) => {
                setSortOption(event.target.value);
              }}
            >
              <option value="newest">newest</option>
              <option value="helpful">helpful</option>
              <option value="relevance">relevance</option>
            </select>
          </u>
        </span>
      );
    }
  }
  return <div className="loading"> Loading...</div>;
}

export default Sort;
