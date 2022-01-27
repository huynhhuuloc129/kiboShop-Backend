const express = require('express');
const cors = require('cors');

const app = express();

const keyboardRoutes = require('./routes/keyboardRoutes');

app.use(cors());
app.use(express.json());
app.use('/api/keyboards', keyboardRoutes);

module.exports = app;
