import React from 'react';
import "./Track.css";

const Track = props => {
    return (
      <div className="container">
          <div className="column title">{props.title}</div>
          <div className="column artist">{props.artist}</div>
          <div className="column album">{props.album}</div>
          <div className="column time">{props.time}</div>
      </div>
    );
  }
  
export default Track;