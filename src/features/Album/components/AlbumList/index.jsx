import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album'
import "./style.scss";

AlbumList.propTypes = {
  albumList: PropTypes.array,
};

function AlbumList(props) {
  const { albumList } = props;
  return (
    <div>
      <h3>Album List</h3>
      <ul className="album-list">
        {albumList.map(album =>
          <li key={album.id}> 
          <Album album={album} />
           </li>
        )}
      </ul>
    </div>
  );
}

export default AlbumList;