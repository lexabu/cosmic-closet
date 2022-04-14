import React from 'react';
import { Button } from '@mantine/core';
import { questionsStore } from '../../../stores.js';

function AddQuestionButton() {
  const setQuestionModalToggle = questionsStore((state) => state.setQuestionModalToggle);

  return (
    <Button
      className="add-question"
      type="button"
      onClick={setQuestionModalToggle}
    >
      Add Question
    </Button>
  );
}
export default AddQuestionButton;
