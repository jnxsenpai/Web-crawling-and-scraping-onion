
const express = require('express');
const app = express();

// Импортируем модуль
const scrap = require('./scrap');

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/runNodeCode', function (req, res) {
  // Ваш код Node.js, который вы хотите запустить
  // Запускаем код приложения

  const result = scrap.run();;
  res.send(result);
});

app.get('/data', function (req, res) {
    const inputData = req.query.input;
    scrap.processData(inputData);
    res.send(`Data received: ${inputData}`);
  });



app.use(express.static('public'));

app.listen(4000, function () {
  console.log('Server listening on port 4000!');
});