import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://api.fontshare.com", "https://cdn.fontshare.com"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://api.fontshare.com", "https://cdn.fontshare.com"],
      fontSrc: ["'self'", "https://api.fontshare.com", "https://cdn.fontshare.com"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"],
    },
  },
}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'CAD-42 Investor Document' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`CAD 42 document server running on port ${PORT}`);
});
