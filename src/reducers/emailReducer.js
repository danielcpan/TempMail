import {
  FETCH_RECIPES_REQUEST,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILURE,
} from '../actions/types';

const initialState = {
  isLoading: false,
  error: null,
  byId: {},
  allIds: [],
};

  export default (state = initialState, action) => {
    switch (action.type) {
      case FETCH_RECIPES_REQUEST:
        return { 
          ...state, 
          isLoading: true, 
          hasErrored: false, 
          error: null 
        };
      case FETCH_RECIPES_SUCCESS:
        return { 
          ...state, 
          [`${action.category}IsLoading`]: false,
          hasErrored: false,
          error: null,
          byId: { ...state.byId, ...action.entities },
          allIds: [...new Set([...state.allIds, ...action.ids])],
        };    
      case FETCH_RECIPES_FAILURE:
        return { 
          ...state, 
          isLoading: false,
          error: action.error 
        };
      default:
        return state;
    }
  }

// SELECTORS
export const hasErrored = state => {
  return state.trainingMatrices.error !== null;
};

export const getEmails = (state, category) => {
  return state.recipes[`${category}Ids`].map(id => state.recipes.byId[id]);
}