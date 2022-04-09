import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { AiOutlineClose } from 'react-icons/ai';
import FilterList from './FilterList.jsx';
import Stream from './Stream.jsx';
import StreamSearch from './StreamSearch.jsx';

const StreamStore = (props) => {

  const closeStore = () => {
    $('#store').addClass('hide');
    $('#account').removeClass('hide');
  }

  return (
    <div id='store' className='hide'>
      <span onClick={closeStore}><AiOutlineClose class='close'/></span>
      <FilterList />
      <StreamSearch />
      <div id='streamGrid' className='grid'>
      {props.streams.map((stream, i) => (
        <Stream key={i} name={stream}/>
      ))}
        </div>
        <div id='pages'>1 2 3 4 ></div>
    </div>
  );
};

export default StreamStore;
