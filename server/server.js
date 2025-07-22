const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});