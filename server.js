const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app.js');
const port = process.env.PORT || 3000;

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<password>','slstbackend');

mongoose.connect(DB, {
  useNewURLParser: true
}).then((con) => {
  console.log('Database connect successfully');
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
