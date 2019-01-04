import React from "react";
import LikeAction from "../LikeAction/index";

import "./styles.scss";

const Card = props => {
  const { country } = props;
  return (
    <div className="card">
      <div className="card-details">
        <span>{country.name}</span>
        <LikeAction />
      </div>
    </div>
  );
};

export default Card;
