

const { CrawlingAPI, ScraperAPI } = require('./modules/proxycrawl');
const api = new ScraperAPI({ token: 'dikGSPKTyqOWwGgd9rSvzQ&tor_network=true' });

api.get('https://lordserials.org/zarubezhnye/6971-klan-soprano-1999.html').then(response => {
  if (response.statusCode === 200) {
    console.log(response.json);
  }
}).catch(error => console.error);

