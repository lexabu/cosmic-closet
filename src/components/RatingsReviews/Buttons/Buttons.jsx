import React from 'react';
import { Button } from '@mantine/core';
import './Buttons.scss';

function Buttons() {
  return (
    <div className="rr-buttons">
      <Button
        color="cyan"
        className="rr-buttons-more-reviews"
      >
        More Reviews
      </Button>

      <Button
        color="cyan"
        className="rr-buttons-add-review"
      >
        Add a Review
      </Button>
    </div>
  );
}

export default Buttons;
