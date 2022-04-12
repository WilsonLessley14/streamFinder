import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import Stream from './Stream.jsx';
import { IoAdd } from 'react-icons/io5';

const StreamList = (props) => {
//   const defaultStreams = [
//     {name: 'Netflix', subbed: true},
//     {name:'Prime', subbed: false},
//     {name:'Hulu', subbed: false},
//     {name:'HBOmax', subbed: false},
//     {name:'Vudu', subbed: false},
//     {name:'Disney+', subbed: false}
//   ];
//   const [streams, setStreams] = useState(defaultStreams);

  const openStore = () => {
    $('#account').addClass('hide');
    $('#store').removeClass('hide');
  }

  const addStream = (stream) => {
    setStreams(streams.concat({name: stream, subbed: true}));
  }

  return (
    <div className='stream-list'>
      <div id='list-header'>
        <h1 id='stream-title'>Streams</h1>
        <IoAdd className='add icon' onClick={openStore}/>
      </div>
      <div id='stream-container'>
        {props.streams.map((stream, i) => (
         <Stream
         key={i}
         stream={stream.name}
         subbed={stream.subbed}
         default={stream.default}
         removeStream={props.removeStream}
         />
        ))}
      </div>
    </div>
  );
};

export default StreamList;