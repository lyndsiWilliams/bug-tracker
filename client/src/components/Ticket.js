// Redux
import { connect } from 'react-redux';
import { getTickets, addTicket } from '../actions';
// Component
import TicketForm from './TicketForm';

const Ticket = props => {

  return (
    <>
      <h1>Submit a Ticket</h1>
      <TicketForm addTicket={props.addTicket} getTickets={props.getTickets} />
      <button onClick={props.getTickets}>View all tickets</button>
      {props.tickets && !props.isFetching && props.tickets.map(tickets => (
        <div key={tickets.id}>
          {JSON.stringify(tickets)}
          <button>X</button>
        </div>
      ))}
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