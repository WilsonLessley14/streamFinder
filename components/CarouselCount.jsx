import React from 'react';

var CarouselCount = (props) => {
  return (
    <div id='display-index'>Showing results for "{props.searchTerm}"</div>
  )
}

export default CarouselCount;


// altered to show index for single slide
//<div id='display-index'>Showing {props.index} out of {props.length} results for "{props.searchTerm}"</div>