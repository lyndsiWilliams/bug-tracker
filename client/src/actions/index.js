// Axios
import axios from "axios";
// Destructure the command names to avoid typos in the reducer
// GET
export const FETCH_TICKETS_START = "FETCH_TICKETS_START";
export const FETCH_TICKETS_SUCCESS = "FETCH_TICKETS_SUCCESS";
export const FETCH_TICKETS_FAILURE = "FETCH_TICKETS_FAILURE";
// POST
export const ADD_TICKET_START = "ADD_TICKET_START";
export const ADD_TICKET_SUCCESS = "ADD_TICKET_SUCCESS";
export const ADD_TICKET_FAILURE = "ADD_TICKET_FAILURE";
// DELETE
export const DELETE_TICKET = "DELETE_TICKET";


export const getTickets = () => {
  return dispatch => {
    dispatch({ type: FETCH_TICKETS_START });
    axios.get("http://localhost:1337/tickets")
      .then(response => {
        dispatch({ type: FETCH_TICKETS_SUCCESS, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: FETCH_TICKETS_FAILURE, payload: error });
      });
  };
};

export const addTicket = newTicket => dispatch => {
  dispatch({ type: ADD_TICKET_START });
  axios.post("http://localhost:1337/tickets", newTicket)
    .then(response => {
      dispatch({ type: ADD_TICKET_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: ADD_TICKET_FAILURE, payload: error });
    });
};

export const deleteTicket = id => dispatch => {
  dispatch({ type: DELETE_TICKET, payload: id });
  axios.delete(`http://localhost:1337/tickets/${id}`)
    .then(response => console.log(response))
    .catch(error => console.log(error));
}