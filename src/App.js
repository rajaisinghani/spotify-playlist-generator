import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Track from "./Track";

export const authEndpoint = 'https://accounts.spotify.com/authorize';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "cc3e1a229a4642c68ac9753fd81b026c";
const redirectUri = "http://localhost:3000";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
];

// Get the hash of the url
const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});

window.location.hash = "";

class App extends Component {

  constructor() {
    super();
    this.state = {
      token: null
  };
  }

  componentDidMount() {
    // Set token
    let _token = hash.access_token;
    if (_token) {
      // Set token
      this.setState({
        token: _token
      });
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!this.state.token && (
          <a
            className="btn"
            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
          >
            Login to Spotify
          </a>
        )}

        <Track
          title="Title"
          artist="Artist"
          album="Album"
          time="Track Length"
        />
        <Track
          title="Patek Water"
          artist="Young Thug ft. Lil Uzi Vert"
          album="Slime 3"
          time="3:43"
        />
        <Track
          title="He"
          artist="Jai Paul"
          album="Do You Love Her Now / He"
          time="4:52"
        />

        {this.state.token && 
          (
          <div className="main">
            <text>Spotify Player Will Go Here In the Next Step</text>
          </div>
          )
        }
        </header>
      </div>
    );
    }
  }

export default App;