import React from 'react';
import {
  Sort, ReviewsList, IndividualReviewTile, Buttons,
} from '../index.js';
import './RightColumn.scss';

function RightColumn() {
  return (
    <div className="rr-right-column">
      <Sort />
      <ReviewsList />
      <IndividualReviewTile />
      <Buttons />
    </div>
  );
}

export default RightColumn;
