require("isomorphic-fetch");

  function getWikiData() {

    const urlAPI = "https://en.wikipedia.org/w/api.php?action=parse&page=Seth_Rogen&format=json";
    const otherParams = {
      method: "GET"
    };

    fetch(urlAPI,otherParams)
    .then(data=>{return data.json()})
    .then(res=>{console.log(res)})
    .then(error=>console.log(err))

  }

getWikiData();
