import { CATEGORIES_ACTION_TYPES } from './category.types';

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      if (!Array.isArray(payload)) {
        console.error('Payload for SET_CATEGORIES should be an array.');
        return state; 
      }
      return { ...state, categories: payload };
    default:
      return state;
  }
};
