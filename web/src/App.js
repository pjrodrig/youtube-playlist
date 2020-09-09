import React from 'react';
import YouTube from 'react-youtube';
import './App.css';

function App() {

  function play() {
    console.log('video is playing');
  }

  function pause() {
    console.log('video is paused');
  }

  function end() {
    console.log('video ended');
  }

  const opts = {
    height: '390',
    width: '640'
  };

  return (
    <div className="App">
      <YouTube videoId="1Miqn-fqArA" opts={opts} />
    </div>
  );
}

export default App;
