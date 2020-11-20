import { combineReducers } from 'redux';
import { ticketReducer } from './ticketReducer';


export const rootReducer = combineReducers({
  ticketReducer,
});