const fetch = require('node-fetch');

(async () => {
    const endpoint = 'https://natsu.yuu02.repl.co/api/riie/search/'
    const query = 'naruto'
    
    fetch(`${animeSearchAPI}${query}`).then(response.json())
    .then(res => {
        console.log(res);
    })
})()
