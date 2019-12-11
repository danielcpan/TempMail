import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import emailReducer from './emailReducer';

export default combineReducers({
  errors: errorReducer,
  emails: emailReducer,
});
