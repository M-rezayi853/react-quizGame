import express from 'express';
import dotenv from 'dotenv';

import informations from './data/informations.js';
import gameInformations from './data/gameInformations.js';
import ranksMe from './data/ranksMe.js';
import ranksBest from './data/ranksBest.js';
import groups from './data/groups.js';

dotenv.config();
const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/informations', (req, res) => {
  res.json(informations);
});

app.get('/api/gameInformations', (req, res) => {
  res.json(gameInformations);
});

app.get('/api/ranksme', (req, res) => {
  res.json(ranksMe);
});

app.get('/api/ranksbest', (req, res) => {
  res.json(ranksBest);
});

app.get('/api/groups', (req, res) => {
  res.json(groups);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));