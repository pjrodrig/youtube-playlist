import React from 'react';
import {
    Col,
    Container,
    Row
} from "react-bootstrap";

//Components
import AddVideo from '../components/AddVideo';
import Player from '../components/Player';
import PlaylistList from '../components/PlaylistList';

class Playlist extends React.Component {

    constructor(props) {
        super(props);
        this.playlistIndex = 0;
        this.state = {};
    }

    componentDidMount() {
        this.getPlaylist();
    }

    updatePlaylist = (playlist) => {
            let video;
            if(playlist.length) {
                video = playlist[this.playlistIndex];
            }
            this.setState({playlist: playlist, video: video});
    }

    getPlaylist = () => {
        var req = new XMLHttpRequest();
        req.open('GET', 'http://localhost:3030/playlists');
        req.setRequestHeader('Content-Type', 'application/json');
        req.onload = () => {
            this.updatePlaylist(JSON.parse(req.response));
        };
        req.send();
    }

    addVideo = (video) => {
        var req = new XMLHttpRequest();
        req.open('POST', 'http://localhost:3030/playlists');
        req.setRequestHeader('Content-Type', 'application/json');
        req.onload = () => {
            this.updatePlaylist(JSON.parse(req.response));
        };
        req.send(JSON.stringify(this.state.playlist.concat(video)));
    }

    nextVideo = () => {
        if(this.state.playlist.length > this.playlistIndex + 1) {
            let time = (new Date()).getTime();
            //debouncing as onEnd gets called twice
            if(this.nextVideoCalled === undefined || time - this.nextVideoCalled > 100) {
                this.nextVideoCalled = time;
                this.setState({video: this.state.playlist[++this.playlistIndex]});
            }
        }
    }

    render() {
        return (
            <div className="Playlist">
                <Container>
                    <Row>
                        <Col xl={8}>
                            <Player video={this.state.video} nextVideo={this.nextVideo}/>
                        </Col>
                        <Col xl={4}>
                            <PlaylistList playlist={this.state.playlist}/>
                            <AddVideo submit={this.addVideo}/>
                        </Col> 
                    </Row>
                </Container>
            </div>
        );
    }
    
}

export default Playlist;
