/* eslint-disable no-unused-vars */
import React from 'react';
import renderer from 'react-test-renderer';
import {
  cleanup, fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import {
  Buttons,
  ComfortScale,
  FitScale,
  LeftColumn,
  LengthScale,
  QualityScale,
  RatingBreakdown,
  RatingSummary,
  ReviewsList,
  RightColumn,
  SizeScale,
  Sort,
  Title,
  WidthScale,
} from '../../src/components/RatingsReviews/index.js';
import 'regenerator-runtime/runtime';
// import create from '../../mocks/zustand.js';

describe('Ratings and Reviews Left ColumnTest Suite', () => {
  beforeEach(() => {
    render(<LeftColumn />);
  });
  // ComfortScale, FitScale, LengthScale, QualityScale,
  // WidthScale, Title, RatingSummary, RatingBreakdown, SizeScale,

  it('Should show Ratings and Reviews in the title', async () => {
    await waitFor(() => expect(screen.getByText('RATINGS & REVIEWS')).not.toBeNull());
  });

  it('Should have the title class name in the document', async () => {
    await waitFor(() => expect(document.querySelector('.rr-Title')).toBeTruthy());
  });
});

describe('Ratings and Reviews Right Column Test Suite', () => {
  beforeEach(() => {
    render(<RightColumn />);
  });
  // Sort, ReviewsList, Buttons,
  it('Should show sort options for sorting', async () => {
  });

  it('Should show individual review tiles in the reviews list component', async () => {
  });

  it('Should show 2 more individual review tiles in the reviews list component when the show more reviews button is clicked', async () => {
  });

  it('Should show two buttons in the buttons component', async () => {
  });
});

/*
Using a mock file instead of the actual store is best
  jest.mock('moduleName');
  describe('listFilesInDirectorySync', () => {
    const MOCK_FILE_INFO = {
      '/path/to/file1.js': 'console.log("file1 contents");',
      '/path/to/file2.txt': 'file2 contents',
    };
    beforeEach(() => {
      // Set up some mocked out file info before each test
      require('fs').__setMockFiles(MOCK_FILE_INFO);
    });

test('includes all files in the directory in the summary', () => {
  const FileSummarizer = require('../FileSummarizer');
  const fileSummary = FileSummarizer.summarizeFilesInDirectorySync('/path/to');
  expect(fileSummary.length).toBe(2);
});
*/
