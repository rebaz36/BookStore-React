// actions
const GET_CATEGORIES = '/src/redux/Categories/GET_CATEGORIES';

// reducer
export default function categoriesReducer(state = [], action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
}

// key = kcM4ut7Kvp9QgSxmujh0
const API_KEY = 'kcM4ut7Kvp9QgSxmujh0';

// action creators
export const getCategories = () => async (dispatch) => {
  const categoryFetch = await fetch(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_KEY}/books`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    },
  ).then((data) => data.json());
  const category = [];
  Object.keys(categoryFetch).forEach((e) => {
    category.push({ ...categoryFetch[e][0], item_id: e });
  });

  dispatch({
    type: GET_CATEGORIES,
    payload: category,
  });
};
