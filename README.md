[![NPM INSTALL](http://img.shields.io/badge/npm-install-blue.svg?style=flat&logo=npm)](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) ![NODE JS](http://img.shields.io/badge/Node-JS-teal.svg?style=flat&logo=node.js)
## **API**
```css
https://natsu.yuu02.repl.co/api/riie/
```
## **Documentation**
| No | Endpoint | Parameter | Description |
| :---: | ------ | :------: | :--------: |
| 1 | /homepage | - | Homepage |
| 2 | /movie | - | Anime Movie | 
| 4 | /ongoing/{pageNum}| pageNumber | Anime Ongoing |
| 5 | /genres | - | Genre List |
| 6 | /genre/{query}/{pageNum}| query, pageNumber | Search by Genre |
| 7 | /search/{query} | query | Anime Search |

## **Usage**
```
$ npm i node-fetch
```
### **Code Example**
```js
const fetch = require('node-fetch');

(async () => {
    const animeSearchAPI = 'https://natsu.yuu02.repl.co/api/riie/search/'
    const query = 'naruto'
    
    fetch(`${animeSearchAPI}${query}`).then(response.json())
    .then(res => {
        console.log(res);
    })
})
```
## **Thank You For Visiting!**
* [`Buy Me A Coffee☕ ~ Saweria`](https://saweria.co/Natsu062)
