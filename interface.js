require("isomorphic-fetch");

  function getWikiData() {

    const HTMLParser = require('fast-html-parser');
    const urlAPI = "https://en.wikipedia.org/w/api.php?action=parse&page=Seth_Rogen&format=json";
    const otherParams = {
      method: "GET"
    };

    fetch(urlAPI,otherParams)
    .then(data=>{return data.json()})
    .then(res=>{
      return res.parse.text['*']
    })
    .then(result=>{
      return HTMLParser.parse(result)
    })
    .then(parsed=>{
      console.log(parsed);
    })

getWikiData();
