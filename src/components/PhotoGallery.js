import React from 'react';
import Gallery from 'react-photo-gallery';

import Img01 from '../assets/images/img_01.jpg';
import Img02 from '../assets/images/img_02.jpg';
import Img03 from '../assets/images/img_03.jpg';
import Img04 from '../assets/images/img_04.jpg';
import Img05 from '../assets/images/img_05.jpg';
import Img06 from '../assets/images/img_06.jpg';
import Img07 from '../assets/images/img_07.jpg';
import Img08 from '../assets/images/img_08.jpg';
import Img09 from '../assets/images/img_09.jpg';
import Img10 from '../assets/images/img_10.jpg';
import Img11 from '../assets/images/img_11.jpg';
import Img12 from '../assets/images/img_12.jpg';
import Img13 from '../assets/images/img_13.jpg';
import Img14 from '../assets/images/img_14.jpg';
import Img15 from '../assets/images/img_15.jpg';


function columns(containerWidth) {
  let columns = 2;
  if (containerWidth >= 500) columns = 2;
  if (containerWidth >= 900) columns = 3;
  if (containerWidth >= 1500) columns = 4;
  return columns;
}

const photos = [
  {
    src: Img01,
    width: 700,
    height: 941
  },
  {
    src: Img02,
    width: 700,
    height: 941
  },
  {
    src: Img03,
    width: 700,
    height: 941
  },
  {
    src: Img04,
    width: 700,
    height: 941
  },
  {
    src: Img05,
    width: 700,
    height: 941
  },
  {
    src: Img06,
    width: 941,
    height: 700
  },
  {
    src: Img07,
    width: 700,
    height: 941
  },
  {
    src: Img08,
    width: 700,
    height: 941
  },
  {
    src: Img09,
    width: 700,
    height: 941
  },
  {
    src: Img10,
    width: 700,
    height: 941
  },
  {
    src: Img11,
    width: 700,
    height: 941
  },
  {
    src: Img12,
    width: 700,
    height: 941
  },
  {
    src: Img13,
    width: 700,
    height: 941
  },
  {
    src: Img14,
    width: 700,
    height: 941
  },
  {
    src: Img15,
    width: 700,
    height: 941
  },
];

export default function PhotoGallery() {

  return (
    <Gallery photos={photos} direction="column" columns={columns}/>
  )
}
  