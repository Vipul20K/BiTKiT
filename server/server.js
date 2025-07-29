const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/health', (req, res) => {
  res.status(200).send('Server is alive!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);

  // Start cron job *after* server has started
  const keepAlive = require('./cron/keepRenderAwake');
  keepAlive();
});

// // Steps to add cron jobs (done by Deep kumar)
// const axios = require('axios');

// // Add a basic route for verification
// app.get('/keepalive', (req, res) => {
//   res.send('✅ BiTKiT backend is awake!'); 
// });

// // Ping every 14 minutes (14 * 60 * 1000 ms)
// setInterval(() => {
//   axios.get('https://bitkit-server.onrender.com/keepalive') // replace with your actual backend URL
//     .then(() => {
//       console.log('🔁 Keepalive ping sent');
//     })
//     .catch((err) => {
//       console.error('❌ Keepalive ping failed:', err.message);
//     });
// }, 14 * 60 * 1000); // 14 minutes
