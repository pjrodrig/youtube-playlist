import React from 'react';
import YouTube from 'react-youtube';

class Player extends React.Component {
    
    getOpts = () => {
        return {
            height: '390',
            width: '640',
            playerVars: {
                start: this.props.video.start,
                end: this.props.video.end,
                autoplay: 1
            }
        };
    };

    render() {
        if(this.props.video != null) {
            return (
                <YouTube videoId={this.props.video.id} opts={this.getOpts()} onEnd={this.props.nextVideo}/>
            );
        } else {
            return (<p>No video selected.</p>)
        }
    }
}

export default Player;
