import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { questionsStore } from '../../../stores.js';
import SearchBar from '../SearchBar/SearchBar.jsx';
// import dummyQuestions from './dummyQuestions.js';
// import { useParams} from 'react-router-dom';

function QuestionList() {
  const setQuestions = questionsStore((state) => state.setQuestions);
  const allQuestions = questionsStore((state) => state.questions);
  const { id } = useParams();

  useEffect(() => {
    axios({
      url: `${process.env.URL}qa/questions?product_id=${id}`,
      method: 'GET',
      headers: {
        Authorization: process.env.GITHUB_API_KEY,
      },
    })
      .then((data) => {
        console.log('data :', data);
        setQuestions(data.data.results);
      })
      .catch((err) => {
        console.log('err :', err);
      });
  }, []);

  console.log(allQuestions);

  return (
    <div>
      <div>
        {/* <div>
          {allQuestions.map((question) => (<div key={question.question_id}>{question}</div>))}
        </div> */}
        <div className="title"> Questions & Answers</div>
        <SearchBar />
        Q: question1
        <div>Helpful? Yes(0) | Add Answer</div>
        <div>
          A: Answer1
          <div>by user1, May 14, 2022</div>
          Answer2
          <div>by user1, May 15, 2022</div>
        </div>
      </div>
      <div>
        Q: question2
        <div>Helpful? Yes(0) | Add Answer</div>
        <div>
          A: Answer1
          <div>by user1, May 16, 2022</div>
          Answer2
          <div>by user1, May 17, 2022</div>
        </div>
      </div>
      <div>
        Q: question3
        <div>Helpful? Yes(0) | Add Answer</div>
        <div>
          A: Answer1
          <div>by user1, May 18, 2022</div>
          Answer2
          <div>by user1, May 19, 2022</div>
        </div>
      </div>
      <div>
        Q: question4
        <div>Helpful? Yes(0) | Add Answer</div>
        <div>
          A: Answer1
          <div>by user1, May 20, 2022</div>
          Answer2
          <div>by user1, May 21, 2022</div>
        </div>
      </div>
      <button type="button">More Answered Questions</button>
    </div>
  );
}

export default QuestionList;
