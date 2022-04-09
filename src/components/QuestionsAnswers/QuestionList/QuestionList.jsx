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

  function mapQuestions(questionsArr) {
    if (questionsArr.length > 0) {
      return questionsArr.map((question) => (
        <div key={question.question_id}>
          <Question getAllQuestions={() => (getAllQuestions())} questionObj={question} />
        </div>
      ));
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
    </div>
  );
}

export default QuestionList;
