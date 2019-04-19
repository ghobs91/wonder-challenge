/////// Server config
const express = require('express'); // import the express package

const server = express(); // creates the server
server.use(express.json());
server.use(cors())
// Knex config
const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);
///////

// List all the records
server.get('/api/questions', (req, res) => {
  db("questions").then(questions => {
    res.status(200).json(questions);
    console.log('GET request complete')
  }).catch(error => {
      res.status(500).json({ error: "Error retrieving questions", info: error })
  });
});

// Read a specific question
server.get('/api/questions/:id', (req, res) => {
  const { id } = req.params;
  db('questions')
    .where({ id })
    .then(questions => {
      res.status(200).json(questions);
      console.log('GET request by ID complete')
    }).catch(error => {
        res.status(500).json({ error: "Error retrieving questions", info: error })
    });
});

// Create a question
server.post('/api/create_question', (req, res) => {
  const question = req.body;

  db.insert(question)
    .into('questions')
    .then(ids => {
      res.status(201).json(ids[0]);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Create an answer
server.post('/api/create_answer', (req, res) => {
  const answer = req.body;

  db.insert(answer)
    .into('answers')
    .then(ids => {
      res.status(201).json(ids[0]);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});


// Delete a specific question
server.delete('/api/remove/:id', (req, res) => {
  const { id } = req.params;
  db('questions')
    .where({ id })
    .del()
    .then(count => {
      // count === number of records deleted
      res.status(200).json(count);
      console.log("DELETE request complete")
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

///////
// watch for connections on port 5000
server.listen(5000, () =>
  console.log('Server running on http://localhost:5000')
);
//