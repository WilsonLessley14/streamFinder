import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { AiOutlineClose } from 'react-icons/ai';
import FilterList from './FilterList.jsx';
import StreamCard from './StreamCard.jsx';
import StreamSearch from './StreamSearch.jsx';

const StreamStore = (props) => {
  const [keyword, setKeyword] = useState(null);
  const [streams, setStreams] = useState(props.streams);

  const closeStore = () => {
    $('#store').addClass('hide');
    $('#account').removeClass('hide');
  }

  const searchStreams = (keyword) => {
    const results =  props.streams.filter(stream => {
    return stream.name.includes(keyword);
    });
    setStreams(results);
  }

  return (
    <div id='store' className='hide'>
      <span
        onClick={closeStore}>
          <AiOutlineClose
        class='close'
        id='close-store'/></span>
      <FilterList />
      <StreamSearch search={searchStreams}/>
      <div id='stream-grid' className='grid'>
        {streams.map((stream, i) => (
          <StreamCard
            key={i}
            name={stream.name}
            addStream={props.addStream}
            removeStream={props.removeStream}
          />
        ))}
      </div>
      <div id='pages'>1 2 3 4 ></div>
    </div>
  );
};

export default StreamStore;
