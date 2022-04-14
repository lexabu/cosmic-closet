import React from 'react';
// import { AiFillCaretDown } from 'react-icons/ai';
import { Select } from '@mantine/core';
import { detailStore } from '../../../stores.js';
import './SizeSelector.scss';

function SizeSelector() {
  const selectedStyle = detailStore((state) => state.selectedStyle);
  const selectedSize = detailStore((state) => state.selectedSize);
  const setSelectedSize = detailStore((state) => state.setSelectedSize);

  if (Object.keys(selectedStyle).length === 0) {
    return <span>Loading styles...</span>;
  }

  // Make checks for OUT OF STOCK items
  // TODO: separate this into a utility function to be used again
  // in the CartActions component
  const vals = Object.values(selectedStyle.skus);
  let qtySum = 0;

  vals.forEach((sku) => {
    qtySum += sku.quantity;
  });

  if ((vals.length === 1 && vals[0].quantity == null) || qtySum === 0) {
    return (
      <select disabled>
        <option>OUT OF STOCK</option>
      </select>
    );
  }

  const stylesArr = Object.keys(selectedStyle.skus).map((sku) => {
    const obj = selectedStyle.skus[sku];
    return (
      obj.quantity > 0 && { value: sku, label: obj.size }
    );
  });

  // console.log('stylesArr', stylesArr);

  return (
    <div className="pd-size-selector-container">
      <Select
        key="pd-size-selector"
        id="pd-size-selector"
        value={selectedSize}
        placeholder="Select Size"
        size="lg"
        onChange={setSelectedSize}
        data={stylesArr}
      />
    </div>
  );
}

export default SizeSelector;
