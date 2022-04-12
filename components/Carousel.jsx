import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import VideoCard from './VideoCard.jsx';
import CarouselCount from './CarouselCount.jsx';
import arrow from '../assets/Arrow.png';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

var previousResults = null;

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      trending: props.trending,
      searchResults: [{
        "id": 3173903,
        "title": "Breaking Bad",
        "original_title": "Breaking Bad",
        "plot_overview": "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
        "type": "tv_series",
        "runtime_minutes": 45,
        "year": 2008,
        "end_year": 2013,
        "release_date": "2008-01-20",
        "imdb_id": "tt0903747",
        "tmdb_id": 1396,
        "tmdb_type": "tv",
        "genres": [
            7
        ],
        "genre_names": [
            "Drama"
        ],
        "user_rating": 9.3,
        "critic_score": 85,
        "us_rating": "TV-MA",
        "poster": "https://cdn.watchmode.com/posters/03173903_poster_w185.jpg",
        "backdrop": "https://cdn.watchmode.com/backdrops/03173903_bd_w780.jpg",
        "original_language": "en",
        "similar_titles": [
            3131293,
            3129354,
            383653,
            390224,
            313542,
            3124749,
            340865,
            350372,
            3109684,
            3130921,
            316177,
            345534,
            3158493,
            1122525,
            519834,
            3140350,
            383654,
            125583,
            3137595,
            3164525,
            3155583,
            350396,
            3129647,
            520325,
            329319
        ],
        "networks": [
            8
        ],
        "network_names": [
            "AMC"
        ],
        "relevance_percentile": 98.93,
        "trailer": "https://www.youtube.com/watch?v=XZ8daibM3AE",
        "trailer_thumbnail": "https://cdn.watchmode.com/video_thumbnails/536008_pthumbnail_320.jpg",
        "sources": [
            {
                "source_id": 349,
                "name": "iTunes",
                "type": "buy",
                "region": "US",
                "ios_url": "Deeplinks available for paid plans only.",
                "android_url": "Deeplinks available for paid plans only.",
                "web_url": "https://itunes.apple.com/us/tv-season/pilot/id271383858?i=271866344&uo=4&at=1000l3V2",
                "format": "SD",
                "price": 1.99,
                "seasons": 5,
                "episodes": 62
            },
            {
                "source_id": 349,
                "name": "iTunes",
                "type": "buy",
                "region": "US",
                "ios_url": "Deeplinks available for paid plans only.",
                "android_url": "Deeplinks available for paid plans only.",
                "web_url": "https://itunes.apple.com/us/tv-season/pilot/id271383858?i=271866344&uo=4&at=1000l3V2",
                "format": "HD",
                "price": 2.99,
                "seasons": 5,
                "episodes": 62
            },
            {
                "source_id": 140,
                "name": "Google Play",
                "type": "buy",
                "region": "US",
                "ios_url": "Deeplinks available for paid plans only.",
                "android_url": "Deeplinks available for paid plans only.",
                "web_url": "https://play.google.com/store/tv/show?amp=&amp=&cdid=tvseason-2LA4CTEOrZM&gdid=tvepisode-PNxGMkcus_g&gl=US&hl=en&id=L2wfgMDGiBk",
                "format": "SD",
                "price": 1.99,
                "seasons": 5,
                "episodes": 62
            },
            {
                "source_id": 140,
                "name": "Google Play",
                "type": "buy",
                "region": "US",
                "ios_url": "Deeplinks available for paid plans only.",
                "android_url": "Deeplinks available for paid plans only.",
                "web_url": "https://play.google.com/store/tv/show?amp=&amp=&cdid=tvseason-2LA4CTEOrZM&gdid=tvepisode-PNxGMkcus_g&gl=US&hl=en&id=L2wfgMDGiBk",
                "format": "HD",
                "price": 2.49,
                "seasons": 5,
                "episodes": 62
            },
            {
                "source_id": 307,
                "name": "VUDU",
                "type": "buy",
                "region": "US",
                "ios_url": "Deeplinks available for paid plans only.",
                "android_url": "Deeplinks available for paid plans only.",
                "web_url": "https://www.vudu.com/content/movies/details/Breaking-Bad-Pilot/207577",
                "format": "SD",
                "price": 1.99,
                "seasons": 5,
                "episodes": 62
            },
            {
                "source_id": 307,
                "name": "VUDU",
                "type": "buy",
                "region": "US",
                "ios_url": "Deeplinks available for paid plans only.",
                "android_url": "Deeplinks available for paid plans only.",
                "web_url": "https://www.vudu.com/content/movies/details/Breaking-Bad-Pilot/207577",
                "format": "HD",
                "price": 2.99,
                "seasons": 5,
                "episodes": 62
            },
            {
                "source_id": 24,
                "name": "Amazon",
                "type": "buy",
                "region": "US",
                "ios_url": "Deeplinks available for paid plans only.",
                "android_url": "Deeplinks available for paid plans only.",
                "web_url": "https://watch.amazon.com/detail?gti=amzn1.dv.gti.74a9f71f-3d5a-f492-23dc-3dfbc2404a24",
                "format": "SD",
                "price": 1.99,
                "seasons": 5,
                "episodes": 54
            },
            {
                "source_id": 24,
                "name": "Amazon",
                "type": "buy",
                "region": "US",
                "ios_url": "Deeplinks available for paid plans only.",
                "android_url": "Deeplinks available for paid plans only.",
                "web_url": "https://watch.amazon.com/detail?gti=amzn1.dv.gti.74a9f71f-3d5a-f492-23dc-3dfbc2404a24",
                "format": "HD",
                "price": 2.99,
                "seasons": 5,
                "episodes": 54
            },
            {
                "source_id": 24,
                "name": "Amazon",
                "type": "buy",
                "region": "US",
                "ios_url": "Deeplinks available for paid plans only.",
                "android_url": "Deeplinks available for paid plans only.",
                "web_url": "https://watch.amazon.com/detail?gti=amzn1.dv.gti.74a9f71f-3d5a-f492-23dc-3dfbc2404a24",
                "format": "4K",
                "price": 3.99,
                "seasons": 5,
                "episodes": 54
            },
            {
                "source_id": 344,
                "name": "YouTube",
                "type": "buy",
                "region": "US",
                "ios_url": "Deeplinks available for paid plans only.",
                "android_url": "Deeplinks available for paid plans only.",
                "web_url": "https://www.youtube.com/watch?v=PNxGMkcus_g",
                "format": "HD",
                "price": 2.99,
                "seasons": 5,
                "episodes": 62
            },
            {
                "source_id": 344,
                "name": "YouTube",
                "type": "buy",
                "region": "US",
                "ios_url": "Deeplinks available for paid plans only.",
                "android_url": "Deeplinks available for paid plans only.",
                "web_url": "https://www.youtube.com/watch?v=PNxGMkcus_g",
                "format": "SD",
                "price": 1.99,
                "seasons": 5,
                "episodes": 62
            },
            {
                "source_id": 398,
                "name": "Microsoft Store",
                "type": "buy",
                "region": "US",
                "ios_url": "Deeplinks available for paid plans only.",
                "android_url": "Deeplinks available for paid plans only.",
                "web_url": "https://www.microsoft.com/en-us/p/season-1/8d6kgwxcmrfx",
                "format": "SD",
                "price": 1.99,
                "seasons": 5,
                "episodes": 54
            },
            {
                "source_id": 398,
                "name": "Microsoft Store",
                "type": "buy",
                "region": "US",
                "ios_url": "Deeplinks available for paid plans only.",
                "android_url": "Deeplinks available for paid plans only.",
                "web_url": "https://www.microsoft.com/en-us/p/season-1/8d6kgwxcmrfx",
                "format": "HD",
                "price": 2.99,
                "seasons": 5,
                "episodes": 54
            },
            {
                "source_id": 203,
                "name": "Netflix",
                "type": "sub",
                "region": "US",
                "ios_url": "Deeplinks available for paid plans only.",
                "android_url": "Deeplinks available for paid plans only.",
                "web_url": "http://www.netflix.com/title/70143836",
                "format": "HD",
                "price": null,
                "seasons": 5,
                "episodes": 62
            },
            {
                "source_id": 442,
                "name": "DirecTV On Demand",
                "type": "sub",
                "region": "US",
                "ios_url": "Deeplinks available for paid plans only.",
                "android_url": "Deeplinks available for paid plans only.",
                "web_url": "https://www.directv.com/tv/Breaking-Bad-cmpQU2NNOEI5bnc9/Pilot-ak1weXpXOXB6K1AzeXhLdmhmUTl3Zz09",
                "format": "HD",
                "price": null,
                "seasons": 5,
                "episodes": 62
            }
        ]
    }],
      newResults: false,
      currentSlidesIndex: 1,
      currentSlidesLength: null,
      carousel: true
    }
    this.updateState = this.updateState.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
  }

  componentDidMount() {
    this.updateState();
  }


  updateState() {


    // let searchResults = this.props.searchResults;
    let searchResults = [{
      "id": 3173903,
      "title": "Breaking Bad",
      "original_title": "Breaking Bad",
      "plot_overview": "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
      "type": "tv_series",
      "runtime_minutes": 45,
      "year": 2008,
      "end_year": 2013,
      "release_date": "2008-01-20",
      "imdb_id": "tt0903747",
      "tmdb_id": 1396,
      "tmdb_type": "tv",
      "genres": [
          7
      ],
      "genre_names": [
          "Drama"
      ],
      "user_rating": 9.3,
      "critic_score": 85,
      "us_rating": "TV-MA",
      "poster": "https://cdn.watchmode.com/posters/03173903_poster_w185.jpg",
      "backdrop": "https://cdn.watchmode.com/backdrops/03173903_bd_w780.jpg",
      "original_language": "en",
      "similar_titles": [
          3131293,
          3129354,
          383653,
          390224,
          313542,
          3124749,
          340865,
          350372,
          3109684,
          3130921,
          316177,
          345534,
          3158493,
          1122525,
          519834,
          3140350,
          383654,
          125583,
          3137595,
          3164525,
          3155583,
          350396,
          3129647,
          520325,
          329319
      ],
      "networks": [
          8
      ],
      "network_names": [
          "AMC"
      ],
      "relevance_percentile": 98.93,
      "trailer": "https://www.youtube.com/watch?v=XZ8daibM3AE",
      "trailer_thumbnail": "https://cdn.watchmode.com/video_thumbnails/536008_pthumbnail_320.jpg",
      "sources": [
          {
              "source_id": 349,
              "name": "iTunes",
              "type": "buy",
              "region": "US",
              "ios_url": "Deeplinks available for paid plans only.",
              "android_url": "Deeplinks available for paid plans only.",
              "web_url": "https://itunes.apple.com/us/tv-season/pilot/id271383858?i=271866344&uo=4&at=1000l3V2",
              "format": "SD",
              "price": 1.99,
              "seasons": 5,
              "episodes": 62
          },
          {
              "source_id": 349,
              "name": "iTunes",
              "type": "buy",
              "region": "US",
              "ios_url": "Deeplinks available for paid plans only.",
              "android_url": "Deeplinks available for paid plans only.",
              "web_url": "https://itunes.apple.com/us/tv-season/pilot/id271383858?i=271866344&uo=4&at=1000l3V2",
              "format": "HD",
              "price": 2.99,
              "seasons": 5,
              "episodes": 62
          },
          {
              "source_id": 140,
              "name": "Google Play",
              "type": "buy",
              "region": "US",
              "ios_url": "Deeplinks available for paid plans only.",
              "android_url": "Deeplinks available for paid plans only.",
              "web_url": "https://play.google.com/store/tv/show?amp=&amp=&cdid=tvseason-2LA4CTEOrZM&gdid=tvepisode-PNxGMkcus_g&gl=US&hl=en&id=L2wfgMDGiBk",
              "format": "SD",
              "price": 1.99,
              "seasons": 5,
              "episodes": 62
          },
          {
              "source_id": 140,
              "name": "Google Play",
              "type": "buy",
              "region": "US",
              "ios_url": "Deeplinks available for paid plans only.",
              "android_url": "Deeplinks available for paid plans only.",
              "web_url": "https://play.google.com/store/tv/show?amp=&amp=&cdid=tvseason-2LA4CTEOrZM&gdid=tvepisode-PNxGMkcus_g&gl=US&hl=en&id=L2wfgMDGiBk",
              "format": "HD",
              "price": 2.49,
              "seasons": 5,
              "episodes": 62
          },
          {
              "source_id": 307,
              "name": "VUDU",
              "type": "buy",
              "region": "US",
              "ios_url": "Deeplinks available for paid plans only.",
              "android_url": "Deeplinks available for paid plans only.",
              "web_url": "https://www.vudu.com/content/movies/details/Breaking-Bad-Pilot/207577",
              "format": "SD",
              "price": 1.99,
              "seasons": 5,
              "episodes": 62
          },
          {
              "source_id": 307,
              "name": "VUDU",
              "type": "buy",
              "region": "US",
              "ios_url": "Deeplinks available for paid plans only.",
              "android_url": "Deeplinks available for paid plans only.",
              "web_url": "https://www.vudu.com/content/movies/details/Breaking-Bad-Pilot/207577",
              "format": "HD",
              "price": 2.99,
              "seasons": 5,
              "episodes": 62
          },
          {
              "source_id": 24,
              "name": "Amazon",
              "type": "buy",
              "region": "US",
              "ios_url": "Deeplinks available for paid plans only.",
              "android_url": "Deeplinks available for paid plans only.",
              "web_url": "https://watch.amazon.com/detail?gti=amzn1.dv.gti.74a9f71f-3d5a-f492-23dc-3dfbc2404a24",
              "format": "SD",
              "price": 1.99,
              "seasons": 5,
              "episodes": 54
          },
          {
              "source_id": 24,
              "name": "Amazon",
              "type": "buy",
              "region": "US",
              "ios_url": "Deeplinks available for paid plans only.",
              "android_url": "Deeplinks available for paid plans only.",
              "web_url": "https://watch.amazon.com/detail?gti=amzn1.dv.gti.74a9f71f-3d5a-f492-23dc-3dfbc2404a24",
              "format": "HD",
              "price": 2.99,
              "seasons": 5,
              "episodes": 54
          },
          {
              "source_id": 24,
              "name": "Amazon",
              "type": "buy",
              "region": "US",
              "ios_url": "Deeplinks available for paid plans only.",
              "android_url": "Deeplinks available for paid plans only.",
              "web_url": "https://watch.amazon.com/detail?gti=amzn1.dv.gti.74a9f71f-3d5a-f492-23dc-3dfbc2404a24",
              "format": "4K",
              "price": 3.99,
              "seasons": 5,
              "episodes": 54
          },
          {
              "source_id": 344,
              "name": "YouTube",
              "type": "buy",
              "region": "US",
              "ios_url": "Deeplinks available for paid plans only.",
              "android_url": "Deeplinks available for paid plans only.",
              "web_url": "https://www.youtube.com/watch?v=PNxGMkcus_g",
              "format": "HD",
              "price": 2.99,
              "seasons": 5,
              "episodes": 62
          },
          {
              "source_id": 344,
              "name": "YouTube",
              "type": "buy",
              "region": "US",
              "ios_url": "Deeplinks available for paid plans only.",
              "android_url": "Deeplinks available for paid plans only.",
              "web_url": "https://www.youtube.com/watch?v=PNxGMkcus_g",
              "format": "SD",
              "price": 1.99,
              "seasons": 5,
              "episodes": 62
          },
          {
              "source_id": 398,
              "name": "Microsoft Store",
              "type": "buy",
              "region": "US",
              "ios_url": "Deeplinks available for paid plans only.",
              "android_url": "Deeplinks available for paid plans only.",
              "web_url": "https://www.microsoft.com/en-us/p/season-1/8d6kgwxcmrfx",
              "format": "SD",
              "price": 1.99,
              "seasons": 5,
              "episodes": 54
          },
          {
              "source_id": 398,
              "name": "Microsoft Store",
              "type": "buy",
              "region": "US",
              "ios_url": "Deeplinks available for paid plans only.",
              "android_url": "Deeplinks available for paid plans only.",
              "web_url": "https://www.microsoft.com/en-us/p/season-1/8d6kgwxcmrfx",
              "format": "HD",
              "price": 2.99,
              "seasons": 5,
              "episodes": 54
          },
          {
              "source_id": 203,
              "name": "Netflix",
              "type": "sub",
              "region": "US",
              "ios_url": "Deeplinks available for paid plans only.",
              "android_url": "Deeplinks available for paid plans only.",
              "web_url": "http://www.netflix.com/title/70143836",
              "format": "HD",
              "price": null,
              "seasons": 5,
              "episodes": 62
          },
          {
              "source_id": 442,
              "name": "DirecTV On Demand",
              "type": "sub",
              "region": "US",
              "ios_url": "Deeplinks available for paid plans only.",
              "android_url": "Deeplinks available for paid plans only.",
              "web_url": "https://www.directv.com/tv/Breaking-Bad-cmpQU2NNOEI5bnc9/Pilot-ak1weXpXOXB6K1AzeXhLdmhmUTl3Zz09",
              "format": "HD",
              "price": null,
              "seasons": 5,
              "episodes": 62
          }
      ]
  }];
    let trending = this.props.trending;
    let newResults = false;

    if (JSON.stringify(searchResults) !== JSON.stringify(this.state.searchResults)) {
      this.setState({
        searchResults: searchResults,
        newResults: true,
        currentSlidesLength: searchResults.length
      })
    } else {
      this.setState({
        newResults: false,
        currentSlidesLength: 5
      })
      //currentSlidesLength: trending.length;     inactive during dev
    }

  }


  updateIndex(e) {

    let direction = e.target.id;
    let currentIndex = this.state.currentSlidesIndex;
    let currentLength = this.state.currentSlidesLength;

    if (direction === 'right') {
      if (currentIndex + 1 <= currentLength) {
        currentIndex++;
      } else {
        currentIndex = 1;
      }
    } else {
      if (currentIndex - 1 >= 1) {
        currentIndex--;
      } else {
        currentIndex = currentLength;
      }

    }

    this.setState({
      currentSlidesIndex: currentIndex
    })

  }


  render() {
    return (
      <div id='carousel'>
        <div id='carousel-box'>
          <img src={arrow} className='swiper-button-prev' onClick={this.updateIndex} id='left'></img>
          <div id='swiper-box'>
            <Swiper
              spaceBetween={5}
              slidesPerView={4}
              speed={500}
              loop='true'
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              }}
              scrollbar={{ draggable: true }}
              onSlideChange={() => null}
              onSwiper={((swiper) => console.log(swiper))}
            >
              <SwiperSlide><div className='video-card'>
                <img id='search-card-img' src={this.state.searchResults[0].poster}></img>
                <div id='search-text-detail'>
                  <div>{this.state.searchResults[0].title + ` (${this.state.searchResults[0].year})`}</div>
                  <div>{this.state.searchResults[0].us_rating}</div>
                  <div>
                    <span>User Rating: {this.state.searchResults[0].user_rating}/10 </span>
                    <span>Critic Rating: {this.state.searchResults[0].critic_score}/100</span>
                  </div>
                  <div>
                    Top Streaming Sources:

                    <span>
                      <a href={this.state.searchResults[0].sources[0].web_url}> {this.state.searchResults[0].sources[0].name} </a>
                    </span>
                    <span>
                      <a href={this.state.searchResults[0].sources[1].web_url}>{this.state.searchResults[0].sources[1].name} </a>
                    </span>
                    <span>
                      <a href={this.state.searchResults[0].sources[2].web_url}>{this.state.searchResults[0].sources[2].name} </a>

                    </span>
                    <span>
                      <a href={this.state.searchResults[0].sources[3].web_url}>{this.state.searchResults[0].sources[3].name} </a>
                    </span>
                    <span>
                      <a href={this.state.searchResults[0].sources[4].web_url}>{this.state.searchResults[0].sources[4].name}</a>
                      </span>
                  </div>
                </div>

                </div></SwiperSlide>
              <SwiperSlide><div className='video-card'>
                <img id='search-card-img' src={'https://cdn.watchmode.com/posters/01434738_poster_w185.jpg'}></img>
                Video Card 2
                </div></SwiperSlide>
              <SwiperSlide><div className='video-card'>
                <img id='search-card-img' src={'https://cdn.watchmode.com/posters/04146033_poster_w185.jpg'}></img>
                Video Card 3
                </div></SwiperSlide>
              <SwiperSlide><div className='video-card'>Video Card 4</div></SwiperSlide>
              <SwiperSlide><div className='video-card'>Video Card 5</div></SwiperSlide>
            </Swiper>
          </div>
          <img src={arrow} className='swiper-button-next' onClick={this.updateIndex} id='right'></img>
        </div>
      </div>
    )
  }

}




export default Carousel;

//<CarouselCount index={this.state.currentSlidesIndex} length={this.state.currentSlidesLength} />

// pagination={{
//   clickable: true,
//   bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`
// }}

