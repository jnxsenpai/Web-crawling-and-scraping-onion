

const { CrawlingAPI, ScraperAPI } = require('./modules/proxycrawl');
const api = new ScraperAPI({ token: 'dikGSPKTyqOWwGgd9rSvzQ&tor_network=true' });
var axios = require('axios');
let resp = '';

async function crawling() {
   await api.get('https://www.translate.ru/%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4').then(response => {
  if (response.statusCode === 200) {
     resp = response.json;
     console.log(resp.url);
     
  }
}).catch((error) => console.error);
}

crawling();
 


 function posting() {
    axios.post('http://localhost:3000/requests', {
    
        "url": resp
        
      })
      .then(function (response) {
        console.log(resp.url);
      })
      .catch(function (error) {
        console.log(error);
      }
    );
}

setTimeout(posting, 15000);


        