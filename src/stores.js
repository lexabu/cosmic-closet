import create from 'zustand';
import { devtools } from 'zustand/middleware';

const details = (set) => ({
  productDetails: [],
  setProductDetails: (data) => set({ productDetails: data }),
  styles: [],
  setStyles: (data) => set({ styles: data }),
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
    dogs: 999,
    increaseDogs: () => set((state) => ({ dogs: state.dogs + 1 })),
    decreaseDogs: () => set((state) => ({ dogs: state.dogs - 1 })),
  })),
);

export { detailStore, ratingStore, questionsStore };
