import React from "react";
import $ from "jquery";

// Components
import Login_Signup from "../components/Login_Signup/Login_Signup.jsx";
import Search from "../components/Search.jsx";
import Carousel from "../components/Carousel.jsx";
import VideoCard from "../components/VideoCard.jsx";
import Signup from "../components/Login_Signup/Signup.jsx";
import Watchlist from "../components/Watchlist.jsx";
import Settings from "../components/Settings/Settings.jsx";

// Graphics + branding
import banner from "../assets/StreamFinderBanner.png";
import userIcon from "../assets/userIcon.png";
import SFicon from "../assets/StreamFinderIcon_transparent.png";

// Mock data
import { mockTrending } from "../mock_data/trending.js";

// Modules
const { deriveTrending } = require("../modules/deriveTrending.js");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: null,
      searchResults: [],
      selectedTitleIndex: 0,
      trending: mockTrending,
      toCarousel: [mockTrending, true],
      user_id: null,
      user_name: null,
      user_email: null,
      watch_list: [],
      watch_history: [],
      subscriptions: [],
    };
    this.updateSearchResults = this.updateSearchResults.bind(this);
    this.loadTrending = this.loadTrending.bind(this);
    this.showModal = this.showModal.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.updateState = this.updateState.bind(this);
    this.displaySelectedTitle = this.displaySelectedTitle.bind(this);
    this.showTrending = this.showTrending.bind(this);
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      toCarousel: [this.state.trending, true],
    });
    $("#trending-button").addClass("button-focus");
  }

  updateState(key, value) {
    this.setState(
      {
        ...this.state,
        key: value,
      },
      () => {
        this.updateUser();
      }
    );
  }

  updateUser() {
    let options = {
      method: "post",
      url: "/update_user",
      data: {
        user_id: this.state.user_id,
        user_name: this.state.user_name,
        user_email: this.state.user_email,
        watch_list: this.state.watch_list,
        watch_history: this.state.watch_history,
        subscriptions: this.state.subscriptions,
      },
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    axios(options)
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log("error updating user", err);
      });
  }

  //updates search term in state for carousel label, i.e "showing search results for Titanic"
  updateSearchTerm(term) {
    this.setState({
      ...this.state,
      searchTerm: term,
    });
  }

  updateSearchResults(data) {
    this.setState(
      {
        ...this.state,
        searchResults: data,
        toCarousel: [data, false],
      },
      () => {
        console.log("search results updated in App state");
        $("#trending-button").removeClass("button-focus");
      }
    );
  }

  displaySelectedTitle(index) {
    this.setState(
      {
        ...this.state,
        selectedTitleIndex: index - 1,
      },
      () => {
        $("#Title-page").css({ display: "inline-block" });
        $("#carousel").css({ display: "none" });
        $("#footer").css({ display: "none" });
      }
    );
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

    if (clickClass !== "home") {
      $(`#${clickType}-page`).css({ display: "inline-block" });
      $("#carousel").css({ display: "none" });
      $("#footer").css({ display: "none" });
      $("#banner-box").css({ display: "none" });
    } else {
      $(`#${parent}`).css({ display: "none" });
      $("#carousel").css({ display: "inline-block" });
      $("#footer").css({ display: "flex" });
      $("#banner-box").css({ display: "flex" });
    }
  }

  showTrending() {
    this.setState(
      {
        ...this.state,
        toCarousel: [this.state.trending, true],
      },
      () => {
        $("#trending-button").addClass("button-focus");
      }
    );
  }

  render() {
    return (
      <div>
        <div id="header">
          <button id="login-button" onClick={this.showModal}>
            Login
          </button>
          <Search
            changePage={this.showModal}
            cb={this.updateSearchResults}
            updateTerm={this.updateSearchTerm}
          />
        </div>

        <div id="banner-box">
          <img src={banner} id="banner"></img>
        </div>

        <div id="body">
          <Carousel
            searchResults={this.state.toCarousel}
            trending={this.state.trending}
            displaySelectedTitle={this.displaySelectedTitle}
            searchTerm={this.state.searchTerm}
          />

          <div id="Title-page">
            <VideoCard
              title={this.state.searchResults[this.state.selectedTitleIndex + 1]}
              testTitle={this.state.toCarousel[0][0]}
            />
            <img
              src={SFicon}
              onClick={this.showModal}
              className="home"
              id="home-title"
            ></img>
          </div>

          <div id="Login-page">
            <Login_Signup />
            <img
              src={SFicon}
              onClick={this.showModal}
              className="home"
              id="home-login"
            ></img>
          </div>

          <div id="Signup-page">
            <Signup />
            <img
              src={SFicon}
              onClick={this.showModal}
              className="home"
              id="home-signup"
            ></img>
          </div>

          <div id="Watchlist-page">
            <Watchlist />
            <img
              src={SFicon}
              onClick={this.showModal}
              className="home"
              id="home-watchlist"
            ></img>
          </div>

          <div id="Settings-page">
            <Settings />
            <img
              src={SFicon}
              onClick={this.showModal}
              className="home"
              id="home-settings"
            ></img>
          </div>
        </div>

        <div id="footer">
          <div
            id="trending-button"
            className="footer-button"
            onClick={this.showTrending}
          >
            Trending
          </div>
          <div className="divider">|</div>
          <div
            id="watchlist-button"
            className="footer-button"
            onClick={this.showModal}
          >
            Watchlist
          </div>
          <div className="divider">|</div>
          <div
            id="settings-button"
            className="footer-button"
            onClick={this.showModal}
          >
            Settings
          </div>
        </div>
      </div>
    );
  }
}

export default App;

//<div id="banner">StreamFinder</div>
