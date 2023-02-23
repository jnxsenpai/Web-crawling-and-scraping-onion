
 //Токен JavaScript  -a-u99uMFUqk6G2SUygtPg&tor_network=true
 // при использовании javascript token лучше ипсользовать { pageWait: 5000 }
 // Пример: api.get('https://www.sdfsdf.com', { pageWait: 5000 }).then(response => {
    
 const { CrawlingAPI, ScraperAPI } = require('./modules/proxycrawl');
 const api = new CrawlingAPI({ token: 'dikGSPKTyqOWwGgd9rSvzQ&tor_network=true' });

    api.get('http://s4k4ceiapwwgcm3mkb6e4diqecpo7kvdnfr5gg7sph7jjppqkvwwqtyd.onion/').then(response => {
        if (response.statusCode === 200) {
          console.log(response.body);
        }
      }).catch(error => console.error);

