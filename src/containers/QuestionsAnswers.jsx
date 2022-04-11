import React from 'react';
import { Title, SearchBar, QuestionList } from '../components/QuestionsAnswers/index.js';

function QuestionsAnswers() {
  return (
    <div>
      <Title />
      <SearchBar />
      <QuestionList />
    </div>
  );
}

export default QuestionsAnswers;
