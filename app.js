const express = require('express');
const app = express();

app.use(express.json());

app.post('/add', (req, res) => {
  //res.status(200).send({ result: 0 });

  // first
    //   const numbers = req.body.numbers;
    //   if (numbers === "") return res.status(200).send({ result: 0 });
    //   res.status(200).send({ result: 0 });

    //second
    // const numbers = req.body.numbers;
    // if (numbers === "") return res.status(200).send({ result: 0 });
    // if (!numbers.includes(",")) return res.status(200).send({ result: parseInt(numbers) });
    // res.status(200).send({ result: 0 });

    // case - Third
    const numbers = req.body.numbers;
    if (numbers === "") return res.status(200).send({ result: 0 });

    const numArray = numbers.split(',');
    const result = numArray.reduce((sum, num) => sum + parseInt(num), 0);
    res.status(200).send({ result });
   
      
});

module.exports = app;
