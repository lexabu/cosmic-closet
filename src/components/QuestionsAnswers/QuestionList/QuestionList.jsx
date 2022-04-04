import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';

function QuestionList() {
  return (
    <div>
      <div>
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
