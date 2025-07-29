// cron/keepRenderAwake.js
const cron = require('node-cron');
const axios = require('axios');

// Replace with your actual Render backend URL
const PING_URL = 'https://bitkit-server.onrender.com/health';

const keepAlive = () => {
  cron.schedule('*/14 * * * *', async () => {
    try {
      const res = await axios.get(PING_URL);
      console.log(`[CRON] Pinged at ${new Date().toISOString()} - ${res.status}`);
    } catch (err) {
      console.error(`[CRON] Error pinging server: ${err.message}`);
    }
  });
};

module.exports = keepAlive;
