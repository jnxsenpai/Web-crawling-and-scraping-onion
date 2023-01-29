const CrawlingAPI = require('./src/crawling-api.js');
const ScraperAPI = require('./src/scraper-api.js');


module.exports = {
  CrawlingAPI,
  ProxyCrawlAPI: CrawlingAPI, // This one is here for backward compatibility reasons
  ScraperAPI,
  
};
