const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app.js');
const port = process.env.PORT || 3000;

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log('DB connection successful');
  });

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
