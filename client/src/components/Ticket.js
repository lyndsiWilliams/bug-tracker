// Redux
import { connect } from 'react-redux';
import { getTickets, addTicket } from '../actions';
// Component
import TicketForm from './TicketForm';

const Ticket = props => {
  console.log("Props in Ticket", props)

  return (
    <>
      <h1>Submit a Ticket</h1>
      <TicketForm />
    </>
  );
};

const mapStateToProps = state => ({
  tickets: state.ticketReducer.tickets,
  error: state.ticketReducer.error,
  isFetching: state.ticketReducer.isFetching
});

export default connect (
  mapStateToProps,
  { getTickets, addTicket }
)(Ticket);