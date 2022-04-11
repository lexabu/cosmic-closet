import React from 'react';
import './Buttons.scss';

function Buttons() {
  return (
    <div className="rr-buttons">
      <button type="button" className="rr-buttons-more-reviews"> More Reviews </button>
      <button type="button" className="rr-buttons-add-review"> Add a Review + </button>
    </div>
  );
}

export default Buttons;
