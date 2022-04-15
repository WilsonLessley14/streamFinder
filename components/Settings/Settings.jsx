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
      streams: [
        {
          name:'movie1',
          logo: 'https://i.pinimg.com/474x/f8/b2/4f/f8b24f01d7059f6b63c5572d0d3a736b.jpg',
          no_ads: false,
          free: true,
          cost: 0,
          subscription: false,
          website: 'https://google.com'
        },
        {
          name:'show1',
          logo: 'https://i.pinimg.com/474x/f8/b2/4f/f8b24f01d7059f6b63c5572d0d3a736b.jpg',
          no_ads: true,
          free: false,
          cost: 10,
          subscription: true,
          website: 'https://google.com'
        },
        {
          name:'movie2',
          logo: 'https://i.pinimg.com/474x/f8/b2/4f/f8b24f01d7059f6b63c5572d0d3a736b.jpg',
          no_ads: true,
          free: true,
          cost: 0,
          subscription: false,
          website: 'https://google.com'
        },
        {
          name:'show2',
          logo: 'https://i.pinimg.com/474x/f8/b2/4f/f8b24f01d7059f6b63c5572d0d3a736b.jpg',
          no_ads: false,
          free: false,
          cost: 5.99,
          subscription: true,
          website: 'https://google.com'
        }
      ],
      subscriptions: [
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
    let index = this.state.subscriptions.findIndex(stream => stream.name === name);
    if (index < 0) {
      this.setState( state => (
        { subscriptions: [...state.subscriptions, {name: name, subbed: true, default: false}]}
      ));
    }
  }

  removeStream = (name) => {
    let index = this.state.subscriptions.findIndex(stream => stream.name === name);
    if (index >= 0) {
      let newStreams = this.state.subscriptions;
      newStreams.splice(index, 1);
      this.setState({subscriptions: newStreams});
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
            streams={this.state.subscriptions}
            removeStream={this.removeStream}
          />
        </div>
        <EditUser field={this.state.updateField}/>
        <StreamStore
          streams={this.state.streams}
          addStream={this.addStream}
          removeStream={this.removeStream}
        />
      </div>
    );
  }
}

export default Settings;
