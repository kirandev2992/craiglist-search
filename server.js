const express = require('express')
const app = express()
const bodyParser=require('body-parser')


 app.get('/search',bodyParser.json(),async (req, res) => {
 var  craigslist = require('node-craigslist'),
  client = new craigslist.Client({
    city : 'toronto'
  });

const listing=await client.search(req.params.search)
await res.send(listing)
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))