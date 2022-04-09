import React from 'react';
import { questionsStore } from '../../../stores.js';

function MoreQuestions() {
  const maxQuestions = questionsStore((state) => state.maxQuestions);
  console.log('MAX :', maxQuestions);
  const setMax = questionsStore((state) => state.setMaxQuestions);

  return (
    <button onClick={setMax} type="button">More Answered Questions</button>
  );
}

export default MoreQuestions;
