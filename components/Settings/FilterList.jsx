import React, { useState, useEffect } from "react";
// import Filter from "./Filter.jsx";

const FilterList = (props) => {
  return (
    <div id='filter-list'>
      <span>
        <input className='checkbox' type='checkbox' />
        no ads
      </span>
      <span>
        <input className='checkbox' type='checkbox' />
        free
      </span>
    </div>
  );
};

export default FilterList;
