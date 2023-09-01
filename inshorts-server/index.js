import express from 'express';
import Connection from './database/db.js';
import DefaultData from './default.js';

const app = express();

const PORT = 5000;

Connection();

app.listen(PORT, () => console.log(`Server has been started successfully on PORT ${PORT}`));

DefaultData();