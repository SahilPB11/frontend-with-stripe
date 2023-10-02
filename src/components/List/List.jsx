import React from "react";
import "./List.scss";
import Card from "../Card/Card.jsx";
import useFetch from "../hooks/useFetch";
function List({ subCategories, maxPrice, sort, catId }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCategories.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort || "asc"}`
  );
  return (
    <div className="list">
      {error
        ? `Something went wrong : ${error}`
        : loading
        ? "Loading..."
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
}

export default List;
