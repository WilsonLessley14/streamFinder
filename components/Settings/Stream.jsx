import React, { useState, useEffect } from "react";
import { IoAdd } from 'react-icons/io5';

const Stream = (props) => {
  return (
    <div className='stream'>
      <IoAdd className='addStream'/>
      <img src='https://i.pinimg.com/474x/f8/b2/4f/f8b24f01d7059f6b63c5572d0d3a736b.jpg'
        className='streamImg'
      />
      <div className='streamInfo'>
        <div>{props.name}</div>
        <div>watch with Ads</div>
        <div>Free</div>
      </div>
    </div>
  );
};

export default Stream;
