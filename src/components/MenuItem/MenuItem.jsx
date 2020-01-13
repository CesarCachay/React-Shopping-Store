import React from "react";

import "./MenuItem.styles.scss";

const MenuItem = ({ title, imageUrl, id, size }) => {
  console.log(imageUrl);
  return (
    <div
      className={`${size} menu-item`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOW NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
