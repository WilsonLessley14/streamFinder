import React, { useState, useEffect } from 'react';
import { IoSearch } from "react-icons/io5";

const StreamSearch = (props) => {
  return (
    <div id='streamSearch'>
      <input type='text' placeholder='Search' streams id='searchBox'/>
      <span id='serchIcon'><IoSearch id='searchButton' /></span>
    </div>
  );
};

export default StreamSearch;
