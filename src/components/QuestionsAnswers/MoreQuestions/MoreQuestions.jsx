import React from 'react';
import { questionsStore } from '../../../stores.js';

function MoreQuestions() {
  const max = questionsStore((state) => state.max);
  // console.log('MAX :', max);
  const setMax = questionsStore((state) => state.setMax);

  return (
    <button onClick={setMax} type="button">MORE Qs</button>
  );
}

export default MoreQuestions;
