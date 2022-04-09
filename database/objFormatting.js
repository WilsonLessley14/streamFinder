// Format object for DB record creation

var formatTitleObj = (obj) => {
  return {
  'id': obj.id,
  'title': obj.title,
  'original_title': obj.original_title,
  'plot_overview': obj.plot_overview,
  'type': obj.type,
  'runtime_minutes': obj.runtime_minutes,
  'release_date': obj.release_date,
  'genre_names': obj.genre_names,
  'user_rating': obj.user_rating,
  'critic_score': obj.critic_score,
  'us_rating': obj.us_rating,
  'poster': obj.poster,
  'original_language': obj.original_language,
  'similar_titles': obj.similar_titles,
  'sources': obj.sources
  }
}


// Format object for DB record creation

var formatUserObj = (obj) => {
  return {
    'user_name': obj.user_name,
    'email': obj.email,
    'watch_list': {
      'movies': obj.watch_list.movies,
      'shows': obj.watch_list.shows
    },
    watch_history: {
      'movies': obj.watch_history.movies,
      'shows': obj.watch_history.shows
    }
  }
}



module.exports = {

  formatTitleObj: formatTitleObj,
  formatUserObj: formatUserObj

}