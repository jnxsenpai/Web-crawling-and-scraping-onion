
// Подключение ресурсов
const { CrawlingAPI, ScraperAPI } = require('./crawling/modules/proxycrawl');
const api = new ScraperAPI({ token: 'dikGSPKTyqOWwGgd9rSvzQ&tor_network=true' });
var axios = require('axios');

let resp = '';

 
const posting = async () => {
    // СКРЭПИНГ
     await api.get('http://s4k4ceiapwwgcm3mkb6e4diqecpo7kvdnfr5gg7sph7jjppqkvwwqtyd.onion/').then( response => {
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


posting();

        