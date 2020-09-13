const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3030

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors())

app.get('/playlists', (req, res) => {
    res.send(JSON.parse(fs.readFileSync('../data/playlists.json')))
})

app.post('/playlists', (req, res) => {
    console.log(req.body);
    res.send("done");
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})