import React from 'react';
import $ from 'jquery';
import UserInfo from './UserInfo.jsx';
import StreamList from './StreamList.jsx';
import StreamStore from './StreamStore.jsx';
import { AiOutlineClose } from 'react-icons/ai';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      streams: [
        'stream1', 'stream2', 'stream3', 'stream4', 'stream5', 'stream6',
        'stream7', 'stream8', 'stream9', 'stream10', 'stream11', 'stream12',
        'stream13', 'stream14', 'stream15', 'stream16', 'stream17', 'stream18'
      ]
    };
  }

  close = () => {
    $(`#Settings-page`).css({ display: 'none' });
    $('#carousel').css({ display: 'inline-block' });
    $('#footer').css({ display: 'flex' });
    $('#banner-box').css({ display: 'flex' });
  }

  render() {
    return (
      <div>
          <div id='account'>
            <span onClick={this.close}><AiOutlineClose class='close'/></span>
            <h1>Account</h1>
            <UserInfo />
            <button className='button'>Sign out</button>
            <StreamList/>
        </div>
        <StreamStore streams={this.state.streams}/>
      </div>
    );
  }
}

export default Settings;
