import axios from 'axios';
import * as Schema from '../schema';
import { 
  FETCH_EMAILS_REQUEST,
  FETCH_EMAILS_SUCCESS,
  FETCH_EMAILS_FAILURE,
} from '../constants/actionTypes';

const { API_ROOT } = require('../config/config');

export const loadRecipes = () => ({
  types: [
    FETCH_EMAILS_REQUEST, 
    FETCH_EMAILS_SUCCESS, 
    FETCH_EMAILS_FAILURE
  ],
  isCached: (state) => {
    const { emails } = state
    return emails.length > 0;
  },
  callAPI: () => {
    return axios.get(`${API_ROOT}/emails`)
  },
  schema: Schema.recipeListSchema,
  payload: {}
})
