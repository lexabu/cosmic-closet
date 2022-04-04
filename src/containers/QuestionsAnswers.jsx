import React from 'react';
import { SearchBar, QuestionList, Question } from '../components/QuestionsAnswers/index.js';

function QuestionsAnswers() {
  return (
    <div>
      <SearchBar />
      <QuestionList />
      <Question />
    </div>
  );
}

export default QuestionsAnswers;
