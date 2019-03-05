require("isomorphic-fetch");

class ApiData {

  getWikiData(name) {

    const HTMLParser = require('fast-html-parser');
    const urlAPI = `https://en.wikipedia.org/w/api.php?action=parse&page=${name}&format=json`;
    const otherParams = { method: "GET" };

    fetch(urlAPI,otherParams)
    .then(data=>{return data.json()})
    .then(res=>{return res.parse.text['*']})
    .then(result=>{return HTMLParser.parse(result)})
    .then(parsed=>{
      console.log(this.display(parsed,".bday"))
      console.log(this.display(parsed,".birthplace"))
      console.log(this.display(parsed,".deathplace"))
      // console.log(this.display(parsed,".mw-parser-output"))
      // console.log(this.display(parsed,".infobox"))
    })

  }

  display(parsed, selector) {

    if (parsed.querySelector(selector) != null) {
      return parsed.querySelector(selector).text
    } else {
      return "Unavailable"
    }

  }

}

module.exports = ApiData;
