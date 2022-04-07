import React from 'react';
import { detailStore } from '../../../stores.js';
import './QuantitySelector.scss';

function QuantitySelector() {
  const selectedStyle = detailStore((state) => state.selectedStyle);
  const selectedSizeSku = detailStore((state) => state.selectedSize);
  const selectedQuantity = detailStore((state) => state.selectedQuantity);
  const setSelectedQuantity = detailStore((state) => state.setSelectedQuantity);

  // Set selected dropdown option as selectedQuantity in store
  const handleChange = (e) => {
    setSelectedQuantity(e.target.value);
  };

  if (selectedSizeSku === '') {
    return (
      <select disabled>
        <option>-</option>
      </select>
    );
  }

  const availableQuantity = selectedStyle.skus[selectedSizeSku].quantity;
  const quantityArr = [];

  for (let i = 1; i < availableQuantity; i += 1) {
    if (i > 15) {
      break;
    }
    quantityArr.push(
      <option key={i}>{i}</option>,
    );
  }

  console.log('quantityArr', quantityArr);

  return (
    <select key="pd-quantity-selector" className="pd-quantity-selector" onChange={(e) => { handleChange(e); }}>
      {selectedQuantity === '' && <option key="pd-select-quantity" value="">Select Quantity</option>}
      {quantityArr}
    </select>
  );
}

export default QuantitySelector;
