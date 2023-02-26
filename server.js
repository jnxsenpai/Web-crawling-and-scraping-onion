
// Импортируем модули
const scrap = require('./scrap');
const express = require('express');
const app = express();

delete require.cache[require.resolve('./scrap.js')];
delete require.cache[require.resolve('./server.js')];


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
    res.send(`Link: ${inputData}`);
  });



app.use(express.static('public'));

app.listen(5000, function () {
  console.log('Сервер работает на порту 5000!');
});