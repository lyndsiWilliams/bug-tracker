// Package imports
import { useState } from 'react';

const TicketForm = props => {
  console.log("Props in TicketForm", props)
  const [ticket, setTicket] = useState({
    title: '',
    description: ''
  });

  const handleSubmit = event => {
    event.preventDefault();
    props.addTicket(ticket);
    setTicket({
      title: '',
      description: ''
    });
  };

  const handleChange = event => {
    setTicket({ ...ticket, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Title"
        onChange={handleChange}
        value={ticket.title}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        name="description"
        placeholder="Description"
        onChange={handleChange}
        value={ticket.description}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TicketForm;