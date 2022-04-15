import React, { useState, useEffect } from "react";
// import Filter from "./Filter.jsx";

const FilterList = (props) => {

  return (
    <div id='filter-list'>
      <span>
        <input
          className='checkbox'
          id='no_ads'
          type='checkbox'
          onClick={() => props.filterAds()}
        />
          no ads
      </span>
      <span>
        <input
          className='checkbox'
          id='free'
          type='checkbox'
          onClick={() => props.filterFree()}
        />
          free
      </span>
    </div>
  );
};

export default FilterList;
