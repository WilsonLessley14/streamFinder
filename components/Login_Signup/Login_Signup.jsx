import React from "react";
import $ from "jquery";

class Login_Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleOauthSubmit = this.handleOauthSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleOauthSubmit(event) {
    event.preventDefault();
    console.log("This is where Oauth will happen");
    $.ajax({
      url: "/oauth",
      method: "GET",
      success: function () {
        console.log("This is the successfull post of the google oauth attempt");
      },
    });
  }

  handleLoginSubmit(event) {
    event.preventDefault();

    $.ajax({
      url: "/oauth/google",
      method: "GET",
      success: (google_url) => url,
    })
      .then((google_url) => {
        let consent_url = google_url;
        console.log("Whyyyyy:", consent_url);
        window.location.href = consent_url;
      })
      .catch((error) => error);
  }

  render() {
    return (
      <div>
        <h1>StreamFinder</h1>
        <div>
          <h3>Sign In</h3>
          <form>
            <input type="text" name="userName" placeholder="User Name"></input>
            <input type="text" name="password" placeholder="Password"></input>
            <input
              type="submit"
              value="Submit"
              onClick={this.handleLoginSubmit}
            />
          </form>
          <h3>or Sign in with</h3>
          <form>
            <button onClick={this.handleOauthSubmit}>Google</button>
            <button onClick={this.handleOauthSubmit}>FaceBook</button>
            <button onClick={this.handleOauthSubmit}>MySpace</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login_Signup;

document.getElementById("Main");
