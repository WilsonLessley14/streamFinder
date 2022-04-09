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
      searchResults: null,
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

    let searchResults = this.props.searchResults;
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
              <SwiperSlide><div className='video-card'>Video Card 1</div></SwiperSlide>
              <SwiperSlide><div className='video-card'>Video Card 2</div></SwiperSlide>
              <SwiperSlide><div className='video-card'>Video Card 3</div></SwiperSlide>
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

