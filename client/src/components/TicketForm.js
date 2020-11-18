// Package imports
import { useState } from 'react';

const TicketForm = () => {
  const [ticket, setTicket] = useState({
    title: '',
    description: ''
  });

  const handleSubmit = event => {
    event.preventDefault();
    console.log("handleSubmit", ticket);
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
      <label>Title</label>
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
        value={ticket.title}
      />
      <label>Description</label>
      <input
        type="text"
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