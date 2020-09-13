import React from 'react';
import YouTube from 'react-youtube';
import debounce from 'lodash';
import {
    Button,
    Table,
    Image,
    Row,
    Col,
    Container
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.videos = [
            { id: '1Miqn-fqArA', start: '10', end: '15' },
            { id: '1Miqn-fqArA', start: '20', end: '25' },
            { id: '1Miqn-fqArA', start: '30', end: '35' },
            { id: '1Miqn-fqArA', start: '40', end: '45' }
        ]

        this.selected = 0;
        this.video = this.videos[this.selected];
    }

    // post() {
    //     var req = new XMLHttpRequest()
    //     req.open('POST', 'http://localhost:3030/playlists')
    //     req.setRequestHeader('Content-Type', 'application/json')
    //     req.send('{"url": "' + request.url + '"}')
    // }

    nextVideo = () => {
        if(this.videos.length > this.selected + 1) {
            let time = (new Date).getTime();
            //debouncing as onEnd gets called twice
            if(this.nextVideoCalled == undefined || time - this.nextVideoCalled > 100) {
                this.nextVideoCalled = time;
                this.video = this.videos[++this.selected];
                console.log(this.video);
                this.setState({});
            }
        }
    }

    render() {
        return (
            <div className="App">
                <Container>
                    <Row>
                        <Col md={8}>
                            <YouTube videoId={this.video.id} opts={{
                                height: '390',
                                width: '640',
                                playerVars: {
                                    start: this.video.start,
                                    end: this.video.end,
                                    autoplay: 1
                                }}} 
                                onEnd={this.nextVideo}/>
                        </Col>
                        <Col md={4}>
                            <Table striped bordered hover >
                                <tbody>
                                    {this.videos.map((video, i) =>
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td><Image src={'https://img.youtube.com/vi/' + video.id + '/default.jpg'} thumbnail /></td>
                                            <td>{video.id}</td>
                                            <td>{video.start}</td>
                                            <td>{video.end}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <Row>
                        <Button variant="primary" onClick={this.nextVideo}>Next</Button>
                    </Row>
                </Container>
            </div>
        );
    }
    
}

export default App;
