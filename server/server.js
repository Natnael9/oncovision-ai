const express = require('express');
const cors = require('cors');
const path = require('path');
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

// Serve client static build files if available
const clientDistPath = path.join(__dirname, '../client/dist');
app.use(express.static(clientDistPath));

// SPA Catch-all Fallback Routing
app.get('*', (req, res) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ error: 'API route not found' });
  }
  res.sendFile(path.join(clientDistPath, 'index.html'), (err) => {
    if (err) {
      res.status(404).send('Client build not found. Please run npm run build.');
    }
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`[Express Backend] Server running on http://localhost:${PORT}`);
});
