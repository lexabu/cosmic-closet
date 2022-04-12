import React from 'react';
import {
  ComfortScale, FitScale, LengthScale, QualityScale, WidthScale,
  Title, RatingSummary, RatingBreakdown, SizeScale,
} from '../index.js';
import { reviewStore } from '../../../stores.js';
import './LeftColumn.scss';

function LeftColumn() {
  const metaRatings = reviewStore((state) => state.ratings);
  const { characteristics } = metaRatings;
  if (characteristics) {
    return (
      <div className="rr-left-column" id="reviews">
        <Title />
        <RatingSummary />
        <RatingBreakdown />
        {characteristics.Size && <SizeScale />}
        {characteristics.Comfort && <ComfortScale />}
        {characteristics.Fit && <FitScale />}
        {characteristics.Length && <LengthScale />}
        {characteristics.Quality && <QualityScale />}
        {characteristics.Width && <WidthScale />}
      </div>
    );
  }
}

export default LeftColumn;
