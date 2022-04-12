import React from 'react';

import './AddQuestionModal.scss';

function AddQuestionModal() {
  return (
    <div className="qa-question-modal">
      <div className="qa-question-modal-content">
        <div className="qa-question-modal-header">
          <h1 className="qa-question-modal-title">Ask Your Question</h1>
        </div>
        <div className="qa-question-modal-sub-header">
          <h2 className="qa-question-modal-title">About the Product Name Here</h2>
        </div>
        {/* onSubmit={this.handleSubmit} */}
        <form>
          <label htmlFor="question">
            Your Question*:
            <textarea id="question" rows="4" cols="50" maxLength={1000} />
            {/* <input type="text" id="question" /> */}
          </label>
          <label htmlFor="nickname">
            Nickname*:
            <input type="text" id="nickname" maxLength={60} />
          </label>
          <label htmlFor="email">
            email*:
            <input type="text" id="email" placeholder="Why did you like the product or not?" maxLength={60} />
            <h5>For authentication reasons, you will not be emailed</h5>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default AddQuestionModal;
