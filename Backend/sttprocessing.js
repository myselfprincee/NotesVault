import connectToMongo from './db.js';
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import notesRoutes from './routes/notes.js';
import indexRoutes from './routes/index.js';
import https from 'https';
import * as fs from 'node:fs';

connectToMongo();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

app.use(express.json());

const sslOptions = {
  key: fs.readFileSync('../../../../key.pem'),
  cert: fs.readFileSync('../../../../cert.pem')
};

app.use('/auth', authRoutes);
app.use('/notes', notesRoutes);
app.use('/api', indexRoutes);

https.createServer(sslOptions, app).listen(port, () => {
  console.log(`NotesVault Backend listening securely on port ${port}`);
});
