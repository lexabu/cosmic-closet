/* eslint-disable camelcase */
import React from 'react';
import './IndividualReviewTile.scss';
import { StarRating } from '../index.js';

function IndividualReviewTile({ review }) {
  const {
    rating,
    summary,
    recommend,
    response,
    body,
    date,
    reviewer_name,
    helpfulness,
    photos,
  } = review;

  const localDate = new Date(date).toLocaleDateString();
  return (
    <div className="rr-individual-review-tile">
      <span className="rr-idr-header">
        <span className="rr-idr-star-rating">
          <StarRating
            rating={rating}
          />
        </span>
        <span className="rr-idr-username-date">
          ✓
          &nbsp;
          {reviewer_name}
          &nbsp;
          {localDate}
        </span>
        &nbsp;
      </span>

      <div className="rr-idr-summary">
        {summary}
      </div>
      <div className="rr-idr-body">
        {body}
      </div>
      {((recommend) ? (<span className="rr-idr-recommend"> ✓ I recommend this product </span>) : '')}
      {((response) ? (
        <div className="rr-idr-response">
          <div> Response: </div>
          <div>
            {' '}
            {response}
            {' '}
          </div>
        </div>
      )
        : '')}
      <span className="rr-idr-helpfulness">
        Helpful?
        {' '}
        <u>Yes</u>
        {' '}
        (
        {helpfulness}
        ) |
        <u> Report </u>
      </span>
      <hr />
    </div>
  );
}

export default IndividualReviewTile;
