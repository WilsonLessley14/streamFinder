import React, {Fragment} from 'react';
import $ from 'jquery';
import { IoRemoveSharp } from 'react-icons/io5';

const Stream = (props) => {
  const showRemove = (id) => {
    $(id).hasClass('hide') ?
      $(id).removeClass('hide') :
      $(id).addClass('hide')
  };

  let Checkbox;

  if (props.default) {
   Checkbox = (
      <input
          className='checkbox'
          id={`check-${props.stream}`}
          type='checkbox'
          name={props.stream}
          defaultChecked={props.subbed}
        />
    );
  } else {
   Checkbox = (
      <input
      className='checkbox'
      id={`check-${props.stream}`}
      type='checkbox'
      name={props.stream}
      checked='true'
      />
    )
  }

  return (
    <div style={{display: 'inline-block'}}>
      {Checkbox}
      <span
        className='stream-label'
        id={props.stream}
        onClick={() => showRemove(`#remove-${props.stream}`)}
      >
        {props.stream}
        <span className='hover-text'>Delete</span>
      </span>
      <span
        className='remove-stream'
        onClick={() => props.removeStream(props.stream)}>
        <IoRemoveSharp
          className='remove-stream hide'
          id={`remove-${props.stream}`}
        />
      </span>
    </div>
  )
}

export default Stream;