import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import { questionsStore } from '../../../stores.js';
import { SearchBar, Question, MoreQuestions } from '../index.js';

function QuestionList() {
  const setQuestions = questionsStore((state) => state.setQuestions);
  const allQuestions = questionsStore((state) => state.questions);
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
      },
    })
      .then((data) => {
        setQuestions(data.data.results);
      })
      .catch((err) => {
        throw err;
      });
  }

  useEffect(() => {
    getAllQuestions();
  }, []);

  // console.log('ALL QUESTIONS', allQuestions);

  // Clicking on this link should expand the area
  // below the question and display the remainder of the list.

  const maxQuestions = questionsStore((state) => state.maxQuestions);

  function mapQuestions(questionsArr) {
    const questionsListLength = questionsArr.length;

    if (questionsListLength > 0) {
      return questionsArr.map((question, index) => {
        // check if max index is less than max
        if (index < maxQuestions) {
          return (
            <div key={question.question_id}>
              <Question getAllQuestions={() => (getAllQuestions())} questionObj={question} />
            </div>
          );
        }
      });
    }
    return (<div />);
  }

  return (
    <div>
      <div>
        <div className="title"> Questions & Answers</div>
        <SearchBar />
        <div>{mapQuestions(allQuestions)}</div>
      </div>
      <MoreQuestions />
      <button type="button">Add Question</button>
    </div>
  );
}

export default QuestionList;
