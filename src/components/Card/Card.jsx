import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";
function Card({ item }) {
  const uploadUrl = import.meta.env.VITE_REACT_APP_UPLOAD_URL;
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={`${uploadUrl}` + item?.attributes.img.data?.attributes?.url}
            alt=""
            className="mainImg"
          />
          <img
            src={`${uploadUrl}` + item?.attributes.img2.data?.attributes?.url}
            alt=""
            className="secondImage"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice || item?.attributes?.price + 50}</h3>
          <h3>${item?.attributes?.price}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;
