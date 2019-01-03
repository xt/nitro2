import React from "react";

import "./styles.scss";

const Card = props => {
  const { country } = props;
  return (
    <div className="card">
      <div className="card-details">
        <span>{country.name}</span>
      </div>
    </div>
  );
};

export default Card;
