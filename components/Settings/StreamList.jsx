import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import Stream from './Stream.jsx';
import { IoAdd } from 'react-icons/io5';

const StreamList = (props) => {

  const openStore = () => {
    $('#account').addClass('hide');
    $('#store').removeClass('hide');
  }

  return (
    <div className='streamList'>
      <h1 id='streamTitle'>Streams</h1>
      <IoAdd className='add' onClick={openStore}/>
      <div id='streamContainer'>
        <input className='checkbox' type='checkbox' name='Netflix' />
        Netflix
        <input className='checkbox' type='checkbox' name='Prime' />
        Prime
        <input className='checkbox' type='checkbox' name='Hulu' />
        Hulu
        <input className='checkbox' type='checkbox' name='HBOmax' />
        HBOmax
        <input className='checkbox' type='checkbox' name='Vudu' />
        Vudu
        <input className='checkbox' type='checkbox' name='Disney+' />
        Disney+
      </div>
    </div>
  );
};

export default StreamList;
