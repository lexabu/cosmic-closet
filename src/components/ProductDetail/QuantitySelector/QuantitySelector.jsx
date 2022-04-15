import React from 'react';
import { Select } from '@mantine/core';
import { detailStore } from '../../../stores.js';
import './QuantitySelector.scss';

function QuantitySelector() {
  const selectedStyle = detailStore((state) => state.selectedStyle);
  const selectedSizeSku = detailStore((state) => state.selectedSize);
  const selectedQuantity = detailStore((state) => state.selectedQuantity);
  const setSelectedQuantity = detailStore((state) => state.setSelectedQuantity);

  if (selectedSizeSku === '') {
    return (
      <div className="pd-quantity-selector-container">
        <Select
          disabled
          placeholder="-"
          data={[]}
          size="lg"
        />
      </div>
    );
  }

  const availableQuantity = selectedStyle.skus[selectedSizeSku].quantity;
  const quantityArr = [];

  for (let i = 1; i < availableQuantity + 1; i += 1) {
    if (i > 15) {
      break;
    }
    quantityArr.push(
      {
        value: i.toString(),
        label: i.toString(),
      },
    );
  }

  return (
    <div className="pd-quantity-selector-container">
      <Select
        value={selectedQuantity}
        onChange={setSelectedQuantity}
        data={quantityArr}
        size="lg"
      />
    </div>
  );
}

export default QuantitySelector;
