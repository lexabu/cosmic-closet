import create from 'zustand';
import { devtools } from 'zustand/middleware';

const details = (set, get) => ({
  productDetails: [],
  setProductDetails: (data) => set({ productDetails: data }),
  styles: [],
  setStyles: (data) => set({ styles: data }),
  selectedStyle: {}, // will be the style object
  setSelectedStyle: (data) => set({ selectedStyle: data }),
  selectedSize: '',
  setSelectedSize: (data) => set({ selectedSize: data }),
  selectedQuantity: 1,
  setSelectedQuantity: (data) => set({ selectedQuantity: data }),
  showSizeSelector: false,
  // TODO: Combine the two toggle functions to be a single function
  toggleShowSizeSelector: (bool) => {
    if (bool === undefined) {
      set({ showSizeSelector: !get().showSizeSelector });
    } else {
      set({ showSizeSelector: bool });
    }
  },
  showQuantitySelector: false,
  toggleShowQuantitySelector: (bool) => {
    if (bool === undefined) {
      set({ showQuantitySelector: !get().showQuantitySelector });
    } else {
      set({ showQuantitySelector: bool });
    }
  },
  startingThumbnailIndex: 0,
  setStartingThumbnailIndex: (data) => set({ startingThumbnailIndex: data }),
  selectedImageIndex: 0,
  setSelectedImageIndex: (newIndex) => set({ selectedImageIndex: newIndex }),
  imageZoomed: false,
  toggleImageZoomed: (bool) => {
    if (bool === undefined) {
      set({ imageZoomed: !get().imageZoomed });
    } else {
      set({ imageZoomed: bool });
    }
  },
});
const detailStore = create(devtools(details));

// const ratingStore = create(
//   // To be able to see multiple stores in Redux DevTools, set the selector in the
//   // extension to "Autoselect instances"
//   devtools((set) => ({
//     dogs: 999,
//     increaseDogs: () => set((state) => ({ dogs: state.dogs + 1 })),
//     decreaseDogs: () => set((state) => ({ dogs: state.dogs - 1 })),
//   })),
// );

const questionsStore = create(
  // To be able to see multiple stores in Redux DevTools, set the selector in the
  // extension to "Autoselect instances"
  devtools((set) => ({
    questions: [],
    setQuestions: (data) => set(() => ({ questions: data })),
    answers: [],
    setAnswers: (data) => set(() => ({ answers: data })),
    wasHelpful: [],
    addHelpful: (question) => set((state) => ({
      wasHelpful: [
        question, ...state.wasHelpful,
      ],
    })),
    wasHelpfulAnswer: [],
    addHelpfulAnswer: (answer) => set((state) => ({
      wasHelpfulAnswer: [
        answer, ...state.wasHelpfulAnswer,
      ],
    })),
    maxQuestions: 4,
    setMaxQuestions: () => set((state) => ({
      maxQuestions: state.questions.length,
    })),
    maxAnswersArr: [],
    setMaxAnswersArr: (answerArr) => set(() => ({
      maxAnswersArr: answerArr,
    })),
    questionModalToggle: false,
    setQuestionModalToggle: () => set((state) => ({
      questionModalToggle: !state.questionModalToggle,
    })),
    answerModalToggle: false,
    setAnswerModalToggle: () => set((state) => ({
      answerModalToggle: !state.answerModalToggle,
    })),
    // dogs: 999,
    // increaseDogs: () => set((state) => ({ dogs: state.dogs + 1 })),
    // decreaseDogs: () => set((state) => ({ dogs: state.dogs - 1 })),
  })),
);

const reviewStore = create(
  devtools((set) => ({
    averageRating: 0,
    setAverageRating: (data) => set({ averageRating: data }),
    helpfulReviews: [],
    setHelpfulReviews: (data) => set(() => ({ helpfulReviews: data })),
    newestReviews: [],
    setNewestReviews: (data) => set(() => ({ newestReviews: data })),
    ratings: [],
    setRatings: (data) => set({ ratings: data }),
    relevantReviews: [],
    setRelevantReviews: (data) => set(() => ({ relevantReviews: data })),
    reviews: [],
    setReviews: (data) => set(() => ({ reviews: data })),
  })),
);

export {
  detailStore, questionsStore, reviewStore,
};
