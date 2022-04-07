import React from 'react';
import { detailStore } from '../../../stores.js';
import './SizeSelector.scss';

function SizeSelector() {
  const selectedStyle = detailStore((state) => state.selectedStyle);
  const setSelectedSize = detailStore((state) => state.setSelectedSize);

  if (Object.keys(selectedStyle).length === 0) {
    return <span>Loading styles...</span>;
  }

  // Make checks for OUT OF STOCK items
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

  // Set selected dropdown option as selectedSize in store
  const handleChange = (e) => {
    setSelectedSize(e.target.value);
  };

  return (
    <select key="pd-size-selector" className="pd-size-selector" onChange={(e) => { handleChange(e); }}>
      <option key="pd-select-size" value="">Select Size</option>
      {/* Map through all skus */}
      {Object.keys(selectedStyle.skus).map((sku) => {
        const obj = selectedStyle.skus[sku];
        return (
          obj.quantity > 0 && <option key={sku} value={sku}>{obj.size}</option>
        );
      })}
    </select>
  );
}

export default SizeSelector;
