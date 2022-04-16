import React from 'react'

class VideoCardOverview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    //metadata logic here
      //rating leave as is
      //release date is year
      //if has seasons/parts/etc, then 'content amount' is number of those seasons/parts/etc
        //else it displays runtime as xhours xminutes
    let content_length = this.props.title.runtime_minutes.toString() + 'minutes';

    return (
      <div id="video-card-overview">
        <div id='video-card-title'>{this.props.title.title}</div>
        <div id="video-card-program-metadata"><b>{this.props.title.us_rating}</b> <i>{this.props.title.year}</i> {content_length}</div>
        <button id='video-card-add-to-watchlist-button'>Add To Watchlist</button>
        <div id="video-card-blurb">{this.props.title.plot_overview}</div>
        <div id="video-card-rating"><i>User Rating:</i> {this.props.title.user_rating}/10<br></br><i>Critic Score:</i> {this.props.title.critic_score}/100</div>
      </div>
    )
  }
}

export default VideoCardOverview;


/*
backdrop: "https://cdn.watchmode.com/backdrops/01434738_bd_w780.jpg"
critic_score: 82
end_year: null
genre_names: (2) ['Drama', 'Romance']
genres: (2) [7, 14]
id: 1434738
imdb_id: "tt0120338"
network_names: []
networks: null
original_language: "en"
original_title: "Titanic"
plot_overview: "101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-class tickets aboard the ship. Rose tells the whole story from Titanic's departure through to its death—on its first and last voyage—on April 15, 1912."
poster: "https://cdn.watchmode.com/posters/01434738_poster_w185.jpg"
release_date: "1997-11-18"
relevance_percentile: 99.59
runtime_minutes: 194
similar_titles: (25) [1411293, 1261570, 136644, 1325612, 1409931, 1189953, 1390779, 1321818, 1385709, 14126, 1465849, 1307725, 1204879, 161171, 1250035, 1177510, 1115269, 1133772, 1138145, 1395115, 1406213, 1381595, 1292240, 1415335, 1231643]
sources: (31) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
title: "Titanic"
tmdb_id: 597
tmdb_type: "movie"
trailer: "https://www.youtube.com/watch?v=CHekzSiZjrY"
trailer_thumbnail: "https://cdn.watchmode.com/video_thumbnails/638996_pthumbnail_320.jpg"
type: "movie"
us_rating: "PG-13"
user_rating: 7.6
year: 1997
*/