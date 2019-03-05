require("isomorphic-fetch");

const name = process.argv.slice(2)[0]

function getWikiData(name) {

  const HTMLParser = require('fast-html-parser');
  const urlAPI = `https://en.wikipedia.org/w/api.php?action=parse&page=${name}&format=json`;
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
    console.log(display(parsed,".mw-redirect"))
    console.log(display(parsed,".bday"))
    console.log(display(parsed,".birthplace"))
    console.log(display(parsed,".deathplace"))
    // console.log(display(parsed,".mw-parser-output"))
  })

}

function display(parsed, selector) {

  if (parsed.querySelector(selector) != null) {
    return parsed.querySelector(selector).text
  } else {
    return "Unavailable"
  }

}

getWikiData(name);
