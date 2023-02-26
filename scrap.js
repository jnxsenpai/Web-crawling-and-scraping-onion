
// Подключение ресурсов
const { CrawlingAPI, ScraperAPI } = require('./crawling/modules/proxycrawl');
const api = new ScraperAPI({ token: 'dikGSPKTyqOWwGgd9rSvzQ&tor_network=true' });
var axios = require('axios');


let resp = '';
let input = '';


// Принимает данные input со страницы
module.exports.processData = function(inputData) {
    console.log(`Data received: ${inputData}`);
    input = inputData;
   
  };
 
// Основная логика
module.exports.run = function () {
    const posting = async () => {
        // СКРЭПИНГ
         await api.get(input).then( response => {
            
            console.log(`ссылка на отправку ${input}`)

            if (response.statusCode === 200) {

                resp =  response.json;
                console.log ('Ответ получен');
        }
        }).catch((error) => console.error);
         
    
        // ПОСТИНГ В БД
          axios.post('http://localhost:3000/scrap', {
        
            "site": resp
            
          })
          .then(function (response) {
            
            console.log('Добавлено в БД');
          })
          .catch(function (error) {
            console.log(error);
          }
        );
    }
    
    
    posting();
  };