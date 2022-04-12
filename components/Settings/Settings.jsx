import React from 'react';
import $ from 'jquery';
import UserInfo from './UserInfo.jsx';
import StreamList from './StreamList.jsx';
import StreamStore from './StreamStore.jsx';
import EditUser from './EditUser.jsx';
import { AiOutlineClose } from 'react-icons/ai';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      streamCards: [
        {name:'movie1'}, {name:'stream2'}, {name:'stream3'}, {name:'show4'}, {name:'movie5'}, {name:'show6'},
        {name:'stream7'}, {name:'movie8'}, {name:'show9'}, {name:'movie10'}, {name:'show11'}, {name:'stream12'},
        {name:'stream13'}, {name:'show14'}, {name:'movie15'}, {name:'stream16'}, {name:'stream17'}, {name:'movie18'}
      ],
      streams: [
        {name: 'Netflix', subbed: false, default: true},
        {name:'Prime', subbed: false, default: true},
        {name:'Hulu', subbed: false, default: true},
        {name:'HBOmax', subbed: false, default: true},
        {name:'Vudu', subbed: false, default: true},
        {name:'Disney', subbed: false, default: true}
      ],
      updateField: null
    };
  }

  close = () => {
    $(`#Settings-page`).css({ display: 'none' });
    $('#carousel').css({ display: 'inline-block' });
    $('#footer').css({ display: 'flex' });
    $('#banner-box').css({ display: 'flex' });
  }

  // signOut = () => {
  // }

  addStream = (name) => {
    let index = this.state.streams.findIndex(stream => stream.name === name);
    if (index < 0) {
      this.setState( state => (
        { streams: [...state.streams, {name: name, subbed: true, default: false}]}
      ));
    }
  }

  removeStream = (name) => {
    let index = this.state.streams.findIndex(stream => stream.name === name);
    if (index >= 0) {
      let newStreams = this.state.streams;
      newStreams.splice(index, 1);
      this.setState({streams: newStreams});
      $(`#remove-${name}`).addClass('hide');
      $(`#store-${name}`).removeClass('subscribed');
      $(`#sub-${name}`).removeClass('hide');
      $(`#unsub-${name}`).addClass('hide');
    }
  }

  setUpdateField = (field) => {
    this.setState({updateField: field});
  }

  render() {
    return (
      <div>
        <div id='account'>
          <span onClick={this.close}><AiOutlineClose class='close icon'/></span>
          <h1>Account</h1>
          <UserInfo setField={this.setUpdateField}/>
          <button className='button' onClick={this.signOut}>Sign out</button>
          <StreamList
            streams={this.state.streams}
            removeStream={this.removeStream}
          />
        </div>
        <EditUser field={this.state.updateField}/>
        <StreamStore
          streams={this.state.streamCards}
          addStream={this.addStream}
          removeStream={this.removeStream}
        />
      </div>
    );
  }
}

export default Settings;
