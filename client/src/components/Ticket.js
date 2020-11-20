// Redux
import { connect } from 'react-redux';
import { getTickets, addTicket, deleteTicket } from '../actions';
// Component
import TicketForm from './TicketForm';

const Ticket = props => {

  const handleDelete = id => {
    props.deleteTicket(id);
  }

  return (
    <>
      <h1>Submit a Ticket</h1>
      <TicketForm addTicket={props.addTicket} getTickets={props.getTickets} />
      <button onClick={props.getTickets}>View all tickets</button>
      {props.tickets && !props.isFetching && props.tickets.map(tickets => (
        <div key={tickets.id}>
          {JSON.stringify(tickets)}
          <button onClick={() => props.deleteTicket(tickets.id)}>X</button>
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
  { getTickets, addTicket, deleteTicket }
)(Ticket);