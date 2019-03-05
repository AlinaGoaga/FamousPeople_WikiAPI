const ApiData = require('./src/ApiData');
instance = new ApiData();
const name = process.argv.slice(2)[0];
instance.getWikiData(name);
