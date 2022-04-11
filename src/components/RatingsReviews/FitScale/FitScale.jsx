import React from 'react';
import { reviewStore } from '../../../stores.js';
import './FitScale.scss';

function FitScale() {
  const metaRatings = reviewStore((state) => state.ratings);
  const { characteristics } = metaRatings;
  if (characteristics) {
    if (characteristics.Fit) {
      const { Fit } = characteristics;
      if (Fit.value) {
        return (
          <div className="rr-fit-scale">
            <div className="rr-fs-title">
              Fit
            </div>
            <progress className="rr-fs-progress progress" max={5} value={Fit.value} />
            <div className="rr-fs-labels">
              <span> Short </span>
              <span> Perfect </span>
              <span> Long </span>
            </div>
          </div>
        );
      }
    }
  }
}

export default FitScale;
