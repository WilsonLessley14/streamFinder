import React, { useState, useEffect } from "react";
import $ from 'jquery';
import { IoAdd } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';
import { IoCheckmark } from 'react-icons/io5';

const StreamCard = (props) => {

  const streamSub = () => {
    if(!$(`#store-${props.name}`).hasClass('subscribed')) {
      $(`#store-${props.name}`).addClass('subscribed');
      $(`#sub-${props.name}`).addClass('hide');
      $(`#unsub-${props.name}`).removeClass('hide');
      props.addStream(props.name);
    } else {
      props.removeStream(props.name);
    }

  }

  return (
    <div className='stream' id={`store-${props.name}`} onClick={() => streamSub()} >
      <span
        className='card-icon'
        // onClick={() => streamSub()}
      >
        <IoAdd className='card-icon ' id={`sub-${props.name}`}/>
        <AiOutlineClose className='card-icon hide' id={`unsub-${props.name}`}/>
      </span>
        <img src='https://i.pinimg.com/474x/f8/b2/4f/f8b24f01d7059f6b63c5572d0d3a736b.jpg'
        className='stream-img'
      />
      <div className='stream-info'>
        <div>{props.name}</div>
        <div>watch with Ads</div>
        <div>Free</div>
      </div>
    </div>
  );
};

export default StreamCard;
