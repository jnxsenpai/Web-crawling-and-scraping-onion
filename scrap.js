
// Подключение ресурсов
const { CrawlingAPI, ScraperAPI } = require('./crawling/modules/proxycrawl');
const api = new ScraperAPI({ token: 'dikGSPKTyqOWwGgd9rSvzQ&tor_network=true' });
var axios = require('axios');


let resp = '';
let input = '';

module.exports.processData = function(inputData) {
    console.log(`Data received: ${inputData}`);
    input = inputData;
   
  };
 


module.exports.run = function() {
    const posting = async () => {
        // СКРЭПИНГ
         await api.get(input).then( response => {
            if (response.statusCode === 200) {
            
            resp =  response.json;
            console.log ('ok');
        }
        }).catch((error) => console.error);
         
    
        // ПОСТИНГ В БД
          axios.post('http://localhost:3000/scrap', {
        
            "site": resp
            
          })
          .then(function (response) {
            
            console.log('ok');
          })
          .catch(function (error) {
            console.log(error);
          }
        );
    }
    
    
    posting();// ваш код здесь
  };