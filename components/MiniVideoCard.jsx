import React from 'react';

var MiniVideoCard = (props) => {

  const removeDuplicateSources = (dataArray) => {
    let newArray = [];
    let currentSource = '';

    for (var i = 0; i < dataArray.length; i++) {
      if (currentSource === dataArray[i].name) {
        continue;
      } else {
        currentSource = dataArray[i].name;
        newArray.push(dataArray[i]);
      }
    }
    return newArray;
  }

  if (props.obj !== undefined) {
    return (
      <div className='video-card'>
        <img id='search-card-img' src={props.obj.poster} onClick={() => {props.selectTitle(props.index)}}></img>
        <div id='search-text-detail'>
          <div>{props.obj.title + ` (${props.obj.year})`}</div>
          <div>{props.obj.us_rating}</div>
          <div>
            <span>User Rating: {props.obj.user_rating}/10 </span>
            <span>Critic Rating: {props.obj.critic_score}/100</span>
          </div>
          <div>
            Top Streaming Sources:

            <div>{removeDuplicateSources(props.obj.sources).map((item, i) =>
              <span key={i}>
                <a href={item.web_url}>{item.name}</a>
              </span>
            )}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='video-card'></div>
    )
  }


}

export default MiniVideoCard;