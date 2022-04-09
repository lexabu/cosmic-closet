import React from 'react';
import { questionsStore } from '../../../stores.js';

function MoreAnswers() {
  // const max = questionsStore((state) => state.max);
  // console.log('MAX :', max);
  const setMax = questionsStore((state) => state.setMax);

  return (
    <button onClick={setMax} type="button">See More Answers</button>
  );
}

export default MoreAnswers;
