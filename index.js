// Package imports
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');


// Create Express server and port
const app = express();
const port = process.env.PORT || 1337;

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

app.listen(port, () => {
  console.log(`.: Listening at http://localhost:${port} :.`);
});