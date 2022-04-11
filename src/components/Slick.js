import React from "react";
import Slider from "react-slick";
import Image from '../components/Image'

export default function SimpleSlider(props) {
  const { data } = props;
  const settings = {
    // dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
      <Slider {...settings}>
        {data.map((img) => {
        return (
          <div>
            <Image filename={img}/>
          </div>
          );
        })
        }
      </Slider>
  );

}
