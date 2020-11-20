// Import destructured action command names to avoid typos
import {
  FETCH_TICKETS_START,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILURE,
  ADD_TICKET_START,
  ADD_TICKET_SUCCESS,
  ADD_TICKET_FAILURE,
} from '../actions';

const initialState = {
  tickets: [],
  error: "",
  isFetching: false
};


export function ticketReducer(state=initialState, action) {
  switch (action.type) {
    case FETCH_TICKETS_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case FETCH_TICKETS_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        tickets: action.payload
      }
    case FETCH_TICKETS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    case ADD_TICKET_START:
      return {
        ...state,
        isFetching: true
      };
    case ADD_TICKET_SUCCESS:
      return {
        ...state,
        users: [...state.tickets, action.payload],
        isFetching: false
      };
    case ADD_TICKET_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetchin: false
      }
    default:
      return state;
  };
};