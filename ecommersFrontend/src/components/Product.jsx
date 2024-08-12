import React from "react";
import textShort from "../utils/helper/textShort";
import { Link } from "react-router-dom";

const Product = (props) => {
  //
  const {
    _id,
    category,
    brand,
    price,
    description,
    product_code,
    remarks,
    updatedAt,
    createdAt,
  } = props.product;

  //
  return (
    <div className="w-[25%] rounded-md 	 px-4 py-4 shadow relative">
      <div className="absolute bg-pink-400 right-2 top-2">
        <h6 className="text-white">{category}</h6>
      </div>
      <h6 className="font-medium">{brand}</h6>
      <p>{textShort(description)}</p>
      <div className="flex justify-between mt-5">
        <h6 className="font-medium">
          $<span className="font-medium">{price}</span>
        </h6>
        <Link
          to={`/product-details/${_id}`}
          className="px-3 py-1 border-[1px] border-pink-400 rounded-lg"
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
