import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useFetcher, useParams } from "react-router-dom";
import useFetch from "../../components/hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartReducer";

function Product() {
  const id = useParams().id;
  const [selectedImage, setSelectedImage] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  const url = import.meta.env.VITE_REACT_APP_UPLOAD_URL;
  const dispatch = useDispatch();
  return (
    <div className="product">
      {loading ? (
        "Loading..."
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={`${url}` + data?.attributes?.img?.data?.attributes?.url}
                alt=""
                onClick={(e) => setSelectedImage("img")}
              />
              <img
                src={`${url}` + data?.attributes?.img2?.data?.attributes?.url}
                alt=""
                onClick={(e) => setSelectedImage("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  `${url}` +
                  data?.attributes[selectedImage]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">${data?.attributes?.price}</span>
            <p>{data?.attributes?.description}</p>
            <div className="qunatity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button className="add" onClick={() => dispatch(addToCart({
              id: data.id,
              title: data.attributes.title,
              desc: data?.attributes?.description,
              img: data?.attributes?.img?.data?.attributes?.url,
              price : data?.attributes?.price,
              quantity: quantity

            }))}>
              <AddShoppingCartIcon /> Add To Cart
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> Add To Wish List
              </div>
              <div className="item">
                <BalanceIcon /> Add to Compare
              </div>
            </div>
            <div className="info">
              <span>Vendo: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
              <hr />
            </div>
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Product;
