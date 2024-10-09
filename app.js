const express = require('express');
const app = express();

app.use(express.json());

app.post('/add', (req, res) => {
  //res.status(200).send({ result: 0 });
  const numbers = req.body.numbers;
  if (numbers === "") return res.status(200).send({ result: 0 });
  res.status(200).send({ result: 0 });
});

module.exports = app;
