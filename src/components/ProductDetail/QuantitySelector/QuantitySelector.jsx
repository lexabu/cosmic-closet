import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { detailStore } from '../../../stores.js';
import './QuantitySelector.scss';

function QuantitySelector() {
  const selectedStyle = detailStore((state) => state.selectedStyle);
  const selectedSizeSku = detailStore((state) => state.selectedSize);
  const setSelectedQuantity = detailStore((state) => state.setSelectedQuantity);
  const showQuantitySelector = detailStore((state) => state.showQuantitySelector);
  const toggleShowQuantitySelector = detailStore((state) => state.toggleShowQuantitySelector);

  const [shownQuantity, setShownQuantity] = useState(1);

  if (selectedSizeSku === '') {
    return (
      <div className="pd-quantity-selector-container">
        <button className="pd-quantity-button hidden" type="button" disabled>-</button>
      </div>
    );
  }

  const availableQuantity = selectedStyle.skus[selectedSizeSku].quantity;
  const quantityArr = [];

  for (let i = 1; i < availableQuantity; i += 1) {
    if (i > 15) {
      break;
    }
    quantityArr.push(
      <button
        className={`pd-dd-quantity-${showQuantitySelector}`}
        type="button"
        key={i}
        onClick={() => {
          setShownQuantity(i);
          setSelectedQuantity(i);
          toggleShowQuantitySelector(false);
        }}
      >
        {i}
      </button>,
    );
  }

  return (
    <div className="pd-quantity-selector-container">
      <button
        className="pd-quantity-button"
        type="button"
        onClick={() => {
          toggleShowQuantitySelector();
        }}
      >
        <div className="pd-inner-button-container">
          <h4>{shownQuantity}</h4>
          <AiFillCaretDown />
        </div>
      </button>
      <div className={`pd-quantity-selector-options-container-${showQuantitySelector}`}>
        {quantityArr}
      </div>
    </div>
  );
}

export default QuantitySelector;
