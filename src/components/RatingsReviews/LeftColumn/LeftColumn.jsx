import React from 'react';
import {
  Title, RatingSummary, RatingBreakdown, SizeScale, ComfortScale,
} from '../index.js';
import './LeftColumn.scss';

function LeftColumn() {
  return (
    <div className="rr-left-column">
      <Title />
      <RatingSummary />
      <RatingBreakdown />
      <SizeScale />
      <ComfortScale />
    </div>
  );
}

export default LeftColumn;
