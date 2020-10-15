import React from 'react';

const TeamImage = (props) => (
   <div className="teamSlider__cover">
      <img className="teamSlider__cover__image" src={props.img} style={{ width: '100%', height: 'auto' }} ></img>
      <div className="teamSlider__desc">
         <h3 className="teamSlider__desc-title">{props.descText}</h3>
         <p className="teamSlider__desc-desc" >{props.descText}</p>
      </div>
   </div>
);

export default TeamImage;