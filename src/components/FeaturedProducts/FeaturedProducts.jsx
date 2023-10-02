import Card from "../Card/Card.jsx";
import "./FeaturedProducts.scss";
import useFetch from "../hooks/useFetch.js";

function FeaturedProducts({ type }) {
  const { data, loading, error } = useFetch(
    `./products?populate=*&[filters][type][$eq]=${type}`
  );
  
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, quidem,
          velit aliquid neque aliquam magnam hic odit veritatis sunt eveniet
          ullam expedita vel minima amet deserunt dolores ipsa ratione at.
          Obcaecati placeat voluptatibus ab dignissimos.
        </p>
      </div>
      <div className="bottom">
        {error
          ? `something went wrong... : ${error}`
          : loading
          ? "Loading..."
          : data?.map((item) => <Card key={item.id} item={item} />)}
      </div>
    </div>
  );
}

export default FeaturedProducts;
