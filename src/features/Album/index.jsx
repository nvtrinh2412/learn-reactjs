import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList/index';

AlbumFeatures.propTypes = {
  
};

function AlbumFeatures(props) {
  const albumList = [
    {
      id: 1,
      title: "US-UK",
      thumbnailURL:'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/charts_cover/bxh-song-au-my-tuan.0.1.jpg'
    },
    {
      id: 2,
      title: "Hit Maker Only C",
      thumbnailURL:'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/d/a/2/5da2b867bd92a4e2e7a3f3674cd74c42.jpg'
    },
    {
      id: 3,
      title: "VPOP 2019",
      thumbnailURL: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/f/0/b/5f0b09bbc7f308cd859905961b3ac6be.jpg"
    }
  ]
  return (
    <div>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeatures;