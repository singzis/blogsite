import React from 'react'
import Swiper from 'swiper'
// import Swiper from '../../common/swiper.min'
import '../../common/swiper.min.css';
// import LightBox from '@microants/lightbox'
// import { isInWechat } from '../../common/js/util'

// const wx = window.wx
class Component extends React.Component {
  componentDidMount() {
    const {
      paginationType,
      autoplay,
      // images,
      // video,
      loop,
      // onSlideChangeStart
    } = this.props
    const mySwiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        type: paginationType,
      },
      paginationClickable: true,
      loop,
      autoplay,
      autoplayDisableOnInteraction: false,
      // onTap: swiper => {
      //   const index = swiper.realIndex

        // if (video) {
        //   if (index !== 0) {
        //     this.onHandleClick(index - 1, images)
        //   }
        // } else {
          // this.onHandleClick(index, images)
        // }
      // },
      // onSlideChangeStart: swiper => {
      //   onSlideChangeStart(swiper)
      // }
    })
    if (mySwiper.slides.length <= 3 && loop) {
      mySwiper.lockSwipes()
    }
    this.swiper = mySwiper
  }
  // onHandleClick(index, images) {
  //   // if (isInWechat) {
  //     const img = images[index]
  //     wx.ready(() => {
  //       wx.previewImage({
  //         current: img,
  //         urls: images
  //       })
  //     })
    // } else {
    //   LightBox.preview(index, images)
    // }
  // }
  render() {
    const { advert } = this.props
    return (
      <div className="swiper">
        <div className="swiper-container">
          <div className="swiper-wrapper">{advert}</div>
          <div className="swiper-pagination" />
        </div>
      </div>
    )
  }
}

Component.displayName = 'AdvertBanner'

Component.defaultProps = {
  className: 'advertBanner',
  advert: '',
  paginationType: 'bullets',
  autoplay: '0',
  images: [],
  loop: true,
  // onSlideChangeStart: () => {},
  video: ''
}

export default Component
