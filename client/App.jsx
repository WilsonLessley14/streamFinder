import React from 'react';
import $ from 'jquery';

// Components
import Login_Signup from '../components/Login_Signup.jsx';
import Search from '../components/Search.jsx';
import Carousel from '../components/Carousel.jsx';
import Signup from '../components/Signup.jsx';
import Watchlist from '../components/Watchlist.jsx';
import Settings from '../components/Settings/Settings.jsx';

// Graphics + branding
import banner from '../assets/StreamFinderBanner.png';
import userIcon from '../assets/userIcon.png';
import SFicon from '../assets/StreamFinderIcon_transparent.png';

// Modules
const { deriveTrending } = require('../modules/deriveTrending.js');


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: null,
      trending: null,
      user: {},
      watch_list: [],
      watch_history: []
    }
    this.updateSearchResults = this.updateSearchResults.bind(this);
    this.loadTrending = this.loadTrending.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  updateSearchResults(data) {
    this.setState({
      searchResults: data,
    }, () => {
      console.log('search results updated in App state');
    })
  }

  loadTrending() {
    // axios call to API for movie list
    // module analyzes to gather trending
    var trending = deriveTrending(data);
    // trending is loaded in state
  }

  showModal(e) {

    var clickType = e.target.innerHTML;
    var parent = e.target.parentNode.id;
    var clickClass = e.target.className;
    //jquery get all elements with classname page
    //for all divs with classname page
      //set css({'display':'none'})

    var pageElements = document.getElementsByClassName('page');
    for (var i = 0; i < pageElements.length; i++) {
      $(`#${pageElements[i].id}`).css({ 'display': 'none' });
    }
    if (clickClass !== 'home') {
      $(`#${clickType}-page`).css({ display: 'inline-block' });
      $('#carousel').css({ display: 'none' });
      $('#footer').css({ display: 'none' });
      $('#banner-box').css({ display: 'none' });
    } else {
      $(`#${parent}`).css({ display: 'none' });
      $('#carousel').css({ display: 'inline-block' });
      $('#footer').css({ display: 'flex' });
      $('#banner-box').css({ display: 'flex' });
    }

  }

  render() {

    return (
      <div>
        <div id="header">
          <button id="login-button" onClick={this.showModal}>Login</button>
          {/* following button is just for testing the video card detail */}
          <button id="videoDetailButton" onClick={this.showModal}>VideoDetail</button>
          <Search changePage={this.showModal} cb={this.updateSearchResults}/>
        </div>

        <div id='banner-box'>
          <img src={banner} id='banner'></img>
        </div>

        <div id='body'>

          <Carousel searchResults={this.state.searchResults} trending={this.state.trending} />

          {/* Next div is just for testing the video card detail */}
          <div id="Video_Detail_page">

          </div>
          <div id="Login_page" className="page">
            <Login_Signup />
            <img src={SFicon} onClick={this.showModal} className='home'></img>
          </div>

          <div id="Signup_page" className="page">
            <Signup />
            <img src={SFicon} onClick={this.showModal} className='home'></img>
          </div>

          <div id="Watchlist_page" className="page">
            <Watchlist />
            <img src={SFicon} onClick={this.showModal} className='home'></img>
          </div>

          <div id="Settings_page" className="page">
            <Settings />
            <img src={SFicon} onClick={this.showModal} className='home'></img>
          </div>

        </div>

        <div id='footer'>
          <div id='trending-button' className='footer-button'>Trending</div>
          <div className='divider'>|</div>
          <div id='watchlist-button' className='footer-button' onClick={this.showModal}>Watchlist</div>
          <div className='divider' >|</div>
          <div id='settings-button' className='footer-button' onClick={this.showModal}>Settings</div>
        </div>
      </div>
    )

  }
}

export default App;

//<div id="banner">StreamFinder</div>
