import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { IoSearch } from "react-icons/io5";


const StreamSearch = (props) => {

  const searchStreams = (e) => {
    e.preventDefault();
    console.log($('#search-bar').val());
    let keyword = $('#search-bar').val();
    props.search(keyword);
    $('#search-bar').val('');
  }

  const checkEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      searchStreams(e);
    };
  }

  return (
    <div id='stream-search'>
      <input
        type='text'
        placeholder='Search'
        streams id='search-bar'
        onKeyPress={(e) => checkEnter(e)}
      />
      <span
        id='search-icon'
        onClick={(e) => searchStreams(e)}
      >
          <IoSearch id='search-btn' />
      </span>
    </div>
  );
};

export default StreamSearch;
