const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3030

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get('/playlists', (req, res) => {
    let playlist = JSON.parse(fs.readFileSync('../data/playlists.json'))['playlist'];
    console.log(playlist);
    res.send(playlist);
});

app.post('/playlists', (req, res) => {
    let playlist = req.body;
    fs.writeFileSync('../data/playlists.json', JSON.stringify({playlist: playlist}));
    res.send(playlist);
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});