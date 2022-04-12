import React from 'react';
import { Title, SearchBar, QuestionList } from '../components/QuestionsAnswers/index.js';

function QuestionsAnswers() {
  return (
    <div id="questions-answers" className="widget">
      <Title />
      <SearchBar />
      <QuestionList />
    </div>
  );
}

export default QuestionsAnswers;
