import React from 'react';
import './DetailsFooter.scss';
import { detailStore } from '../../../stores.js';

function DetailsFooter() {
  const description = detailStore((state) => state.productDetails.description);

  return (
    <div className="details-footer">
      <div className="dp-social">
        adsf
      </div>
      <div className="dp-description">
        {description}
      </div>
    </div>
  );
}

export default DetailsFooter;
