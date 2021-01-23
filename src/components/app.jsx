/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [ { id: "26hpmpNPELRvfoove" }, { id: "3oKIPsirLhSOOCjj6U" } ],
      selectedGif: "26hpmpNPELRvfoove"
    };
  }

  search = (query) => {
    giphy('AOYikCzAifR85LqbMWEnlBQibrNbXqDW').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, response) => {
      this.setState({
        gifs: response.data
      });
    });
  }

  selectGif = (id) =>{
    this.setState({
      selectedGif: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
