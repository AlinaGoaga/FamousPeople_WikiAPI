require("isomorphic-fetch");

process.argv.forEach(function (val, index, array) {
  if (index === 2) {
    console.log(val)
  }
});

// process.argv.forEach(function (val, index, array) {
//   console.log(index + ': ' + val);
// });

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

getWikiData();
