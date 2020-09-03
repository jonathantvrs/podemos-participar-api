import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(cors({ origin: 'https://podemos-bot.herokuapp.com/' }))
app.use(express.json());

app.post('opinions', (request, response) => {
  const { opinion } = request.body;


});

app.listen(3333);