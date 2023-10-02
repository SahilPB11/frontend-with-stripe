import React, { useState } from "react";
import "./Products.scss";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import useFetch from "../../components/hooks/useFetch";
function Products() {
  const catId = parseInt(useParams().id);
  const [maxPrice, setmaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedSubCategories(
      isChecked
        ? [...selectedSubCategories, value]
        : selectedSubCategories.filter((item) => item !== value)
    );
  };
  
  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );
  console.log(data);
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item?.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter By Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setmaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort By</h2>
          <div className="inputItem">
            <input
              type="radio"
              name="price"
              id="asc"
              value="asc"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price Lowest First</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              name="price"
              id="desc"
              value="desc"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price Highest First</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          src="https://plus.unsplash.com/premium_photo-1661896986723-018dc9462a9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJvbWFudGljJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
          alt=""
          className="catImg"
        />
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCategories={selectedSubCategories}
        />
      </div>
    </div>
  );
}

export default Products;
