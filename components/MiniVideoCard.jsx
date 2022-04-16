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

    for (var i = 0; i < props.subscriptions; i ++) {
      if (newArray.indexOf(props.subscriptions[i]) !== -1) {
        return [props.subscriptions[i]];
      }
    }
    return [newArray[0]];
  }

  const descriptionShortener = (stringDescription) => {
    let newString = [];
    for (var i = 0; i < stringDescription.length; i ++) {
      newString.push(stringDescription[i]);
      if (stringDescription[i] === '.') {
        return newString.join('');
      }
    }
  }

  if (props.obj !== undefined) {
    return (
      <div className='video-card'>
        <img id='search-card-img' src={props.obj.poster} onClick={() => {props.selectTitle(props.index)}}></img>
        <div id='search-text-detail'>
          <div id='search-card-title'>{props.obj.title + ` (${props.obj.year})`}</div>
          <div id='search-card-rating1'>{props.obj.us_rating}</div>
          <div id='search-card-rating2'>
            <span>User Rating: {props.obj.user_rating}/10 </span>
            <span>Critic Rating: {props.obj.critic_score}/100</span>
          </div>
          <p id='search-card-description'>{descriptionShortener(props.obj.plot_overview)}</p>
          <div id='search-card-sources'>
            Available On:

            <div>{removeDuplicateSources(props.obj.sources).map((item, i) =>
              <span key={i}>
                <a href={item.web_url}>{item.name} </a>
              </span>
            )}</div>
          </div>
          <a id='search-card-see-more'>See more streaming sources</a>
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