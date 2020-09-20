const fs = require('fs');
var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3030;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

let playlistPath = path.join(__dirname, '..', 'data', 'playlists.json');

app.get('/playlists', (req, res) => {
    let playlist = JSON.parse(fs.readFileSync(playlistPath))['playlist'];
    res.send(playlist);
});

app.post('/playlists', (req, res) => {
    let playlist = req.body;
    fs.writeFileSync(playlistPath, JSON.stringify({playlist: playlist}));
    res.send(playlist);
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});