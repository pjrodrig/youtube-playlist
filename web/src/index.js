import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

//CSS
import 'bootstrap/dist/css/bootstrap.min.css';

//ROUTES
import Login from './pages/Login';
import Playlists from './pages/Playlists';
import Playlist from './pages/Playlist';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/playlists">
                <Playlists />
            </Route>
            <Route path="/playlist/:id">
                <Playlist />
            </Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
