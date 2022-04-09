import React from 'react';
import { questionsStore } from '../../../stores.js';

function MoreAnswers({ allAnswers }) {
  const maxAnswers = questionsStore((state) => state.maxAnswers);
  const setMaxAnswers = questionsStore((state) => state.setMaxAnswers);
  const allAnswersLength = Object.values(allAnswers).length
  console.log('maxAnswers before func call', maxAnswers);

  function addAnsweredQuestions() {
    setMaxAnswers();
    console.log('maxAnswers AFTER', maxAnswers);
    console.log('allAnswersArr length', Object.values(allAnswers).length);
  }

  // if max answers is less than answers length
  if (maxAnswers < allAnswersLength) {
    return (
      <button onClick={addAnsweredQuestions} type="button">See More Answers</button>
    );
  }
}

export default MoreAnswers;
