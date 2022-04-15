import React, { useState, useEffect } from "react";
import $ from 'jquery';
import Option from './Option.jsx';
import { IoAdd } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';
import { IoCheckmark } from 'react-icons/io5';

const StreamCard = (props) => {

  const [options, setOptions] = useState([]);

  const cost = (typeof props.stream.cost === 'number') ?
  (props.stream.cost > 0 ?
    `$${props.stream.cost}/mo` :
    '') :
  props.stream.cost;

  useEffect(() => {
    if (props.stream.no_ads) setOptions(options => [...options, 'No Ads']);
    if (props.stream.free) setOptions(options => [...options, 'Free']);
    // if (cost) setOptions(options => [...options, cost]);
  }, options);

  const streamSub = () => {
    if(!$(`#store-${props.stream.name}`).hasClass('subscribed')) {
      $(`#store-${props.stream.name}`).addClass('subscribed');
      $(`#sub-${props.stream.name}`).addClass('hide');
      $(`#unsub-${props.stream.name}`).removeClass('hide');
      props.addStream(props.stream.name);
    } else {
      props.removeStream(props.stream.name);
    }
  }

  return (
    <div className='stream' id={`store-${props.stream.name}`} onClick={() => streamSub()} >
      <span
        className='card-icon'
        // onClick={() => streamSub()}
      >
        <IoAdd className='card-icon ' id={`sub-${props.stream.name}`}/>
        <AiOutlineClose className='card-icon hide' id={`unsub-${props.stream.name}`}/>
      </span>
        <img src='https://i.pinimg.com/474x/f8/b2/4f/f8b24f01d7059f6b63c5572d0d3a736b.jpg'
        className='stream-img'
      />
      <div className='stream-info'>
        <div>{props.stream.name}</div>
        <div>
          {options.map((option, i) => (
            <Option key={i} option={option} />
          ))}
        </div>
        <div className='cost'>{cost}</div>
      </div>
    </div>
  );
};

export default StreamCard;
