import React, { Component } from "react";
import SongCard from "./components/SongCard";
import songs from "./services/songs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: songs,
      sortedSongs: songs
    };
    this.sortSongsByRating = this.sortSongsByRating.bind(this);
    this.sortSongsByTitle = this.sortSongsByTitle.bind(this);
  }

  sortSongsByRating() {
    const sortedSongs = [...this.state.songs].sort((a, b) => b.rating - a.rating);
    this.setState({ sortedSongs: sortedSongs });
  }

  sortSongsByTitle() {
    const sortedSongs = [...this.state.songs].sort((a, b) => a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1);
    this.setState({ sortedSongs: sortedSongs });
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <h1 className="heading">Super<span>Tunes</span></h1>
          <div className="sort-buttons">
            <button className="sort-button" onClick={this.sortSongsByTitle}>
              Sort by Title
            </button>
            <button className="sort-button" onClick={this.sortSongsByRating}>
              Sort by Rating
            </button>
          </div>
        </div>
        <div className="song-list">
          {this.state.sortedSongs.map((song, index) => (
            <SongCard key={index} data={song} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
