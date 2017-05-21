import React, { Component } from 'react';
import './App.css';

import SearchBar from './Components/SearchBar';
import MyWeather from './Components/MyWeather';
import TheirWeather from './Components/TheirWeather';
import SavedSearches from './Components/TheirWeather';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <MyWeather />
      </div>
    );
  }
}

export default App;
