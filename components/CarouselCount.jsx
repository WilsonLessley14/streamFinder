import React from 'react';

var CarouselCount = (props) => {
  return (
    <div id='display-index'>Showing {props.index} out of {props.length} results</div>
  )
}

export default CarouselCount;