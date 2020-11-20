// Package imports
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

// Create Express server and port
const app = express();
const port = process.env.PORT || 1337;

// DB model
const Tickets = require('./data/tickets-model.js');

// Middleware
app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  // "Server is awake" endpoint
  res.json({
    message: 'Bug Tracker is alive!'
  });
});

app.get('/tickets', (req, res) => {
  // Get a list of tickets
  Tickets.find().then(tickets => {
    res.status(200).json(tickets);
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: 'Error retrieving tickets' });
  });
});

app.post('/tickets', (req, res) => {
  // Create a new ticket
  const newTicket = req.body;

  Tickets.add(newTicket).then(ticket => {
    res.status(201).json(ticket);
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: 'Error creating new ticket' });
  });
});

app.delete('/tickets/:id', (req, res) => {
  Tickets.remove(req.params.id)
    .then(() => {
        res.status(200).json({ message: `Ticket ${req.params.id} was deleted.` });
      })
    .catch(() => {
      res.status(500).json({ errorMessage: `Ticket ${req.params.id} could not be removed` });
    });
});

// Bring the server to life
app.listen(port, () => {
  console.log(`.: Listening at http://localhost:${port} :.`);
});