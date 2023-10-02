import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";
function Categories() {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1805411/pexels-photo-1805411.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">  <img
            src="https://images.pexels.com/photos/4456684/pexels-photo-4456684.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              New Season
            </Link>
          </button></div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">  <img
            src="https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Men
            </Link>
          </button></div>
          </div>
          <div className="col">
            <div className="row">  <img
            src="https://images.pexels.com/photos/388517/pexels-photo-388517.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Accessories
            </Link>
          </button></div>
          </div>
        </div>
        <div className="row">  <img
            src="https://images.pexels.com/photos/1926843/pexels-photo-1926843.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Shoes
            </Link>
          </button></div>
      </div>
    </div>
  );
}

export default Categories;
