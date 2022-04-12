/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { reviewStore } from '../../../stores.js';
import './Sort.scss';

let sortOption;

function Sort() {
  // const updateSortType = (sortOption) => {
  //   // Uncaught Error: Invalid hook call.
  //   // Hooks can only be called inside of the body of a function component.
  //   // attempted adding this fn to onChange, to the body of Sort
  //   const setSortOption = reviewStore((state) => state.setSortOption);
  //   const setReviews = reviewStore((state) => state.setReviews);
  //   const { helpfulReviews, newestReviews, relevantReviews } = reviewStore;
  //   // if the sort option is newest, set reviews to newestReviews
  //   if (sortOption === 'newest') {
  //     // console.log(sortOption);
  //     setSortOption(sortOption);
  //     setReviews(newestReviews);
  //   }
  //   if (sortOption === 'helpful') {
  //     setSortOption(sortOption);
  //     setReviews(helpfulReviews);
  //   }
  //   if (sortOption === 'relevance') {
  //     setSortOption(sortOption);
  //     setReviews(relevantReviews);
  //   }
  // };
  // let [sortOption] = useState(0);
  // useEffect(() => {
  //   // Update the zustandStore when sortOption is
  //   updateSortType(sortOption);
  // });
  const reviews = reviewStore((state) => state.reviews);
  if (reviews) {
    const { results } = reviews;
    if (results) {
      const numberOfReviews = results.length;

      return (
        <span className="rr-sort">
          <span className="rr-sort-reviews">
            {numberOfReviews}
          </span>
          &nbsp;
          <span className="rr-sort-text">
            reviews, sorted by
          </span>
          &nbsp;
          <u className="rr-sort-sort-type">
            <select
              name="sort-options"
              defaultValue="relevance"
              onChange={(event) => {
                sortOption = event.target.value;
              }}
              value={sortOption}
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
