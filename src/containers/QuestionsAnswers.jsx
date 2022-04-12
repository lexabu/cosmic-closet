import React from 'react';
import { Title, SearchBar, QuestionList, AddQuestionModal } from '../components/QuestionsAnswers/index.js';

function QuestionsAnswers() {
  return (
    <div id="questions-answers" className="widget">
      <Title />
      <SearchBar />
      <QuestionList />
      <AddQuestionModal />
    </div>
  );
}

export default QuestionsAnswers;
