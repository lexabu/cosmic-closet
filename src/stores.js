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

const ratingStore = create(
  // To be able to see multiple stores in Redux DevTools, set the selector in the
  // extension to "Autoselect instances"
  devtools((set) => ({
    dogs: 999,
    increaseDogs: () => set((state) => ({ dogs: state.dogs + 1 })),
    decreaseDogs: () => set((state) => ({ dogs: state.dogs - 1 })),
  })),
);

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
    // dogs: 999,
    // increaseDogs: () => set((state) => ({ dogs: state.dogs + 1 })),
    // decreaseDogs: () => set((state) => ({ dogs: state.dogs - 1 })),
  })),
);

const reviewStore = create(
  devtools((set) => ({
    reviews: [],
    setReviews: (data) => set(() => ({ reviews: data })),
  })),
);

const reviewMetaStore = create(
  devtools((set) => ({
    ratings: [],
    setRatings: (data) => set({ ratings: data }),
    averageRating: 0,
    setAverageRatings: (data) => set({ averageRating: data }),
  })),
);

export {
  detailStore, ratingStore, questionsStore, reviewStore, reviewMetaStore,
};
