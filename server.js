const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const app = require('./app.js');
const port = process.env.PORT || 3000;


const DB = process.env.DATABASE.replace('<password>','slstbackend');

mongoose.connect(DB, {
  useNewURLParser: true
}).then((con) => {
  console.log('Database connect successfully');
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
