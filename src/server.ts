import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import Opinion from './models/Opinion';

dotenv.config();
const app = express();

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true
  }
);

app.use(cors())
app.use(express.json());

app.post('opinions', async (request, response) => {
  const { opinion } = request.body;

  const opinionCreated = await Opinion.create({
    opinion,
  });

  return response.json(opinionCreated);
});

app.listen(process.env.PORT || 3333);