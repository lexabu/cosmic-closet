import React from 'react';
import { Button } from '@mantine/core';
import { questionsStore } from '../../../stores.js';
import './MoreQuestionsButton.scss';

function MoreQuestionsButton() {
  const allQuestionsLength = questionsStore((state) => state.questions.length);
  const maxQuestions = questionsStore((state) => state.maxQuestions);
  const setMaxQuestions = questionsStore((state) => state.setMaxQuestions);

  // Only if max is less than the questions array length, render button
  if (maxQuestions < allQuestionsLength) {
    return (
      <Button className="add-more-answers" onClick={setMaxQuestions} type="button">More Answered Questions</Button>
    );
  }
}

export default MoreQuestionsButton;
