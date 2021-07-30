# RiiE Rest API Made by Nathz
[`RiiE Official Website`](https://riie.jp)
## **Documentation**
API: https://natsu.yuu02.repl.co/api/riie/
| No | Endpoint | Parameter | Description |
| :---: | ------ | :------: | :--------: |
| 1 | [/homepage](https://natsu.yuu02.repl.co/api/riie/homepage) | - | Homepage |
| 2 | [/movie](https://natsu.yuu02.repl.co/api/riie/movie) | - | Anime Movie | 
| 4 | [/ongoing/{pageNum}](https://natsu.yuu02.repl.co/api/riie/ongoing) | pageNumber | Anime Ongoing |
| 5 | [/genres](https://natsu.yuu02.repl.co/api/riie/genres) | - | Genre List |
| 6 | [/genre/{query}](https://natsu.yuu02.repl.co/api/riie/genre/action/1)/{pageNum}| query, pageNumber | Search by Genre |
| 7 | [/search/{query}](https://natsu.yuu02.repl.co/api/riie/search) | query | Anime Search |

## **Usage**
```
$ npm i node-fetch
```
#### **Code Example ~ Anime Search**
```js
const fetch = require('node-fetch');

(async () => {
    const endpoint = 'https://natsu.yuu02.repl.co/api/riie/search/'
    const query = 'naruto'
    
    fetch(`${animeSearchAPI}${query}`).then(response.json())
    .then(res => {
        console.log(res);
    })
})()
```
#### **Result**
```json
{
    "author": "Nathz",
    "donasi": "https://saweria.co/Natsu062",
    "error": "false",
    "data": [
        {
            "judul": "Naruto Movie 2: Dai Gekitotsu! Maboroshi no Chiteiiseki Dattebayo!",
            "judulAlt": "Naruto the Movie 2: Legend of the Stone of Gelel",
            "year": "2005",
            "description": "Naruto, Shikamaru dan Sakura sedang dalam misi untuk mengantarkan hewan kesayangan ke sebuah desa saat seorang ksatria misterius muncul untuk menghadapi mereka.",
            "rating": "6.93",
            "jumlahVote": "86469",
            "status": "Ended",
            "totalEpisode": "1",
            "hariTayang": "Sabtu",
            "genreList": [
                "Drama",
                "Supernatural",
                "Mystery",
                "Comedy",
                "Adventure",
                "Shounen",
                "Animation"
            ],
            "thumb": "https://img.topddl.net/images/2020/05/24/76016l.th.jpg",
            "url": "https://riie.jp/movie/naruto-movie-2-dai-gekitotsu-maboroshi-no-chiteiiseki-dattebayo"
        }
    ]
}
```
## **Thank You For Visiting!**
[![NPM INSTALL](http://img.shields.io/badge/npm-install-blue.svg?style=flat&logo=npm)](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) ![NODE JS](http://img.shields.io/badge/Node-JS-teal.svg?style=flat&logo=node.js)

* [`Buy Me A Coffee☕ ~ Saweria`](https://saweria.co/Natsu062)
