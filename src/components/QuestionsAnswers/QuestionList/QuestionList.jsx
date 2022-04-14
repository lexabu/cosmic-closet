import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

import { questionsStore } from '../../../stores.js';
import { Question, MoreQuestionsButton } from '../index.js';
import './QuestionList.scss';

function QuestionList() {
  const setQuestions = questionsStore((state) => state.setQuestions);
  const { id } = useParams();

  // API call to access all questions associated with the current product
  function getAllQuestions() {
    axios({
      url: `${process.env.URL}qa/questions`,
      method: 'GET',
      headers: {
        Authorization: process.env.GITHUB_API_KEY,
      },
      params: {
        product_id: id,
        count: 100,
      },
    })
      .then((data) => {
        // store all questions in state management store
        setQuestions(data.data.results);
      })
      .catch((err) => {
        throw err;
      });
  }

  useEffect(() => {
    getAllQuestions();
  }, []);

  const maxQuestions = questionsStore((state) => state.maxQuestions);

  function mapQuestions(questionsArr) {
    const questionsListLength = questionsArr.length;

    if (questionsListLength > 0) {
      return questionsArr.map((question, index) => {
        if (index < maxQuestions) {
          return (
            <div key={question.question_id}>
              <Question getAllQuestions={() => (getAllQuestions())} questionObj={question} />
            </div>
          );
        }
        return <div />;
      });
    }
    return <div />;
  }

  const allQuestions = questionsStore((state) => state.questions);
  const setQuestionModalToggle = questionsStore((state) => state.setQuestionModalToggle);

  return (
    <div className="qa-question-list-container">
      <div>{mapQuestions(allQuestions)}</div>
      <MoreQuestionsButton />
      <button type="button" onClick={setQuestionModalToggle}>Add Question</button>
    </div>
  );
}

export default QuestionList;
