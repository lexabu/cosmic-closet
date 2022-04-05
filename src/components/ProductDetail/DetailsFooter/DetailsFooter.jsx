import React from 'react';
import './DetailsFooter.scss';
import { detailStore } from '../../../stores.js';

function DetailsFooter() {
  const description = detailStore((state) => state.productDetails.description);

  return (
    <div className="details-footer">
      {description}
    </div>
  );
}

export default DetailsFooter;
