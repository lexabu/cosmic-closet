import React from 'react';
import { questionsStore } from '../../../stores.js';

function MoreQuestions() {
  const allQuestionsLength = questionsStore((state) => state.questions.length);
  const maxQuestions = questionsStore((state) => state.maxQuestions);
  const setMaxQuestions = questionsStore((state) => state.setMaxQuestions);

  // if max is less than the questions array length, render button
  if (maxQuestions < allQuestionsLength) {
    return (
      <button onClick={setMaxQuestions} type="button">More Answered Questions</button>
    );
  }
}

export default MoreQuestions;
