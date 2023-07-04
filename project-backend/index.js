// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of Express
const app = express();

// Use body-parser middleware to parse request bodies
app.use(bodyParser.json());

// Define your API routes and handlers
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
  ];
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  // Save user to database or perform other actions
  res.json({ message: 'User created', name, email });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
