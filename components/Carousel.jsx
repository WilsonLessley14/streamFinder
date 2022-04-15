import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import MiniVideoCard from './MiniVideoCard.jsx';
import CarouselCount from './CarouselCount.jsx';
import arrow from '../assets/Arrow.png';
import $ from 'jquery';

//mock data
import { mockSearchResults } from '../mock_data/searchResults.js';

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
      searchResults: mockSearchResults,
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
    let searchResults = mockSearchResults;
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
      <div>{this.props.searchResults[1] === true ? (<div>Trending now...</div>) : (<CarouselCount index={this.state.currentSlidesIndex} length={this.state.currentSlidesLength} searchTerm={this.props.searchTerm} />)}</div>
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
            >{this.props.searchResults[0].map((title, i) =>
              <SwiperSlide key={i}><MiniVideoCard obj={title} selectTitle={this.props.displaySelectedTitle} index={i}/></SwiperSlide>
              )
            }</Swiper>
          </div>
          <img src={arrow} className='swiper-button-next' onClick={this.updateIndex} id='right'></img>
        </div>
      </div>
    )

    return (
      <div>carousel goes here</div>
    )
  }

}




export default Carousel;

//<CarouselCount index={this.state.currentSlidesIndex} length={this.state.currentSlidesLength} />

