import create from 'zustand';
import { devtools } from 'zustand/middleware';

// Old way
// const detailStore = create(
//   // All this does is include middleware to add the store to the Redux chrome extension
//   devtools((set) => ({
//     counter: 654120,
//     increaseCounter: () => set((state) => ({ counter: state.counter + 1 })),
//     decreaseCounter: () => set((state) => ({ counter: state.counter - 1 })),
//     apiResults: [],
//     setApiResults: (data) => set(() => ({ apiResults: data })),
//     filteredApiResults: [],
//     setFilteredApiResults: (data) => set(() => ({ filteredApiResults: data })),
//   })),
// );

// New way, more concise
const details = (set, get) => ({
  counter: 654210,
  increaseCounter: () => set({ counter: get().counter + 1 }),
  decreaseCounter: () => set({ counter: get().counter - 1 }),
  apiResults: [1, 2, 3, 4, 5],
  setApiResults: (data) => set({ apiResults: data }),
  filteredApiResults: [],
  setFilteredApiResults: (data) => set({ filteredApiResults: data }),
});

const ratings = (set) => ({
  dogs: 999,
  increaseDogs: () => set((state) => ({ dogs: state.dogs + 1 })),
  decreaseDogs: () => set((state) => ({ dogs: state.dogs - 1 })),
});

const questions = (set) => ({
  dogs: 999,
  increaseDogs: () => set((state) => ({ dogs: state.dogs + 1 })),
  decreaseDogs: () => set((state) => ({ dogs: state.dogs - 1 })),
});

const detailStore = create(devtools(details));
const ratingStore = create(devtools(ratings));
const questionsStore = create(devtools(questions));

export { detailStore, ratingStore, questionsStore };
