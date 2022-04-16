import React from 'react';

class VideoCardPlatforms extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  render() {

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

    return (
      <div id='video-card-platforms'>
        {removeDuplicateSources(this.props.title.sources).map((item, i) =>
        <span key={i}>
          <a href={item.web_url} target="_blank" rel="noopener noreferrer">{item.name}</a><br></br>
        </span>
        )}
      </div>
    )
  }
}

export default VideoCardPlatforms;