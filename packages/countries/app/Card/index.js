import React from "react";

import "./styles.scss";

const Card = props => {
  const { country } = props;
  return (
    <div className="card">
      <div className="card-details">
        <span>{country.name}</span>
        <div className="like-icon">
          <img src="images/thumbs-up-icon.svg"></img>
        </div>
      </div>
    </div>
  );
};

export default Card;
