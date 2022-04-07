import React, { useState } from 'react';
import { detailStore } from '../../stores.js';
import './Toast.scss';

function Toast(props) {
  const toastShown = detailStore((state) => state.toastShown);

  return (
    <div className={`toast-container-${toastShown}`}>
      <h2 className="toast-title">{props.title}</h2>
    </div>
  );
}

export default Toast;
