require ('dotenv').config();

import express from 'express';
import helmet from "helmet";
import cors from 'cors';
const routes  = require('./route/index');

// Database
import connectDB from './Database/connection';

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/', routes);

app.listen(4000, () => {
  connectDB()
      .then(() =>{
        console.log('Server is up running 🚀 ')
      }).catch((err) =>{
    console.log('Server is running, but database connection failed', err)
  })
})
