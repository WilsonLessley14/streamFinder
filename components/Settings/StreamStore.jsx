import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { AiOutlineClose } from 'react-icons/ai';
import FilterList from './FilterList.jsx';
import StreamCard from './StreamCard.jsx';
import StreamSearch from './StreamSearch.jsx';

const StreamStore = (props) => {
  const [keyword, setKeyword] = useState(null);
  const [streams, setStreams] = useState(props.streams);
  const [ads, setAds] = useState(false);
  const [free, setFree] = useState(false);

  const closeStore = () => {
    $('#store').addClass('hide');
    $('#account').removeClass('hide');
  }

  const searchStreams = (keyword) => {
    const results = props.streams.filter(stream => {
    return stream.name.includes(keyword);
    });
    setStreams(results);
  }

  const filterAds = () => {
    let results;
    if($('#no_ads').prop('checked')) {
      setAds(true);
      results = streams.filter(stream => {
      return stream.no_ads === true;
      });
    } else {
      setAds(false);
      if (free) {
        results = props.streams.filter(stream => {
          return stream.free === true;
        });
      } else {
        results = props.streams;
      }
    }
    setStreams(results);
  }

  const filterFree = () => {
    let results;
    if($('#free').prop('checked')) {
      setFree(true);
      results = streams.filter(stream => {
      return stream.free === true;
      });
    } else {
      setFree(false);
      if (ads) {
        results = props.streams.filter(stream => {
          return stream.no_ads === true;
        });
      } else {
        results = props.streams;
      }
    }
    setStreams(results);
  }

  return (
    <div id='store' className='hide'>
      <span
        onClick={closeStore}>
          <AiOutlineClose
        class='close'
        id='close-store'/></span>
      <FilterList
        filterAds={filterAds}
        filterFree={filterFree}
        streams={streams}
      />
      <StreamSearch search={searchStreams}/>
      <div id='stream-grid' className='grid'>
        {streams.map((stream, i) => (
          <StreamCard
            key={i}
            stream={stream}
            addStream={props.addStream}
            removeStream={props.removeStream}
          />
        ))}
      </div>
      <div id='pages'>1 2 3 4 ></div>
    </div>
  );
};

export default StreamStore;
