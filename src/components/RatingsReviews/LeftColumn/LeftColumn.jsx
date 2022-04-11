import React from 'react';
import {
  ComfortScale, FitScale, LengthScale, QualityScale, WidthScale,
  Title, RatingSummary, RatingBreakdown, SizeScale,
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
      <WidthScale />
    </div>
  );
}

export default LeftColumn;
