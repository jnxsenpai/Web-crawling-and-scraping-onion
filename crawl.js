
 //Токен JavaScript  -a-u99uMFUqk6G2SUygtPg&tor_network=true
 // Обычный токен dikGSPKTyqOWwGgd9rSvzQ&tor_network=true
 // при использовании javascript token лучше ипсользовать { pageWait: 5000 }
 // Пример: api.get('https://www.sdfsdf.com', { pageWait: 5000 }).then(response => {
 // http://s4k4ceiapwwgcm3mkb6e4diqecpo7kvdnfr5gg7sph7jjppqkvwwqtyd.onion/
    
 const { CrawlingAPI, ScraperAPI } = require('./crawling/modules/proxycrawl');
 const api = new CrawlingAPI({ token: 'dikGSPKTyqOWwGgd9rSvzQ&tor_network=true' });
 var axios = require('axios');

 let resp = '';



 const posting = async () => {
    
    // КРАВЛИНГ
     await api.get('https://yandex.ru').then( response => {
        if (response.statusCode === 200) {
        
        resp =  JSON.stringify(response.body);
        console.log ('ok');
    }
    }).catch((error) => console.error);
     

    // ПОСТИНГ В БД
      axios.post('http://localhost:3000/crawl', {
    
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
