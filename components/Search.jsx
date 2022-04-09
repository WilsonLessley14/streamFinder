import axios from 'axios';
import React from 'react';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let value = e.target.value;
    this.setState({
      text: value
    })
  }

  search() {
    var searchTerm = this.state.text;
    let options = {
      method: 'post',
      // url: 'http://127.0.0.1:3000/search',
      // url: 'http://192.168.1.151:3000/search',
      url: '/search',
      data: {
        query: searchTerm
      },
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
    axios(options)
      .then(result => {
        alert(result.data);
        console.log('data retrieval complete')
        console.log(result.data);
        this.props.cb(result.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    let { text } = this.state;
    return (
      <div id='search'>
        <div id='search-box'>
          <input type='text' placeholder='Search for a movie or TV show'
            value={this.state.text}
            onChange={this.handleChange}
            id='search-input'></input>
          <button title='search' onClick={this.search} id='search-button'>Search</button>
        </div>
      </div>
    );
  }
}

export default Search;
