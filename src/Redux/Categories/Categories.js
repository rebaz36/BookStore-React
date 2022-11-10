import { CATEGORY_BOOK } from '../Actions';

// reducer section
const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case `${CATEGORY_BOOK}/fulfilled`:
      return Object.keys(action.payload).map((key) => {
        const { category } = action.payload[key][0];
        return {
          item_id: key,
          category,
        };
      });
    default:
      return state;
  }
};

// action creators section
export const categoryBook = (book) => ({
  type: CATEGORY_BOOK,
  book,
});

export default categoriesReducer;
