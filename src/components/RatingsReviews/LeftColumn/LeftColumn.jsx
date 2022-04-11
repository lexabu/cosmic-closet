import React from 'react';
import {
  Title, RatingSummary, RatingBreakdown, SizeScale,
  ComfortScale, FitScale, LengthScale, QualityScale,
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
      <FitScale />
      <LengthScale />
      <QualityScale />
    </div>
  );
}

export default LeftColumn;
