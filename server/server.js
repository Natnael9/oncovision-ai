const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const predictRoutes = require('./routes/predictRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', predictRoutes);

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'Breast Cancer Diagnostic API', timestamp: new Date().toISOString() });
});

// Start Server
app.listen(PORT, () => {
  console.log(`[Express Backend] Server running on http://localhost:${PORT}`);
});
