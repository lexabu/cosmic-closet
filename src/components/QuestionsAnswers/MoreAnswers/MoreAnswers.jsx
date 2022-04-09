import React from 'react';
import { questionsStore } from '../../../stores.js';

function MoreAnswers({ allAnswers }) {
  const maxAnswers = questionsStore((state) => state.maxAnswers);
  const setMaxAnswers = questionsStore((state) => state.setMaxAnswers);
  const allAnswersLength = Object.values(allAnswers).length;

  function addAnsweredQuestions() {
    setMaxAnswers();
  }

  // if max answers is less than answers length
  if (maxAnswers < allAnswersLength) {
    return (
      <button onClick={addAnsweredQuestions} type="button">See More Answers</button>
    );
  }
}

export default MoreAnswers;
