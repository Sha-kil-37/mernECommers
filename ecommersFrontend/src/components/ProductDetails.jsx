import React, { useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
//
const ProductDetails = (props) => {
  const [product, setProduct] = useState(null);
  const params = useParams();
  const { id } = params;
  const products = useSelector((state) => state.products.products?.rows);
  //   filetr product from products
  useEffect(() => {
    products?.map((product) => {
      if (product._id === id) {
        setProduct(product);
      }
    });
  }, [products]);
  console.log(product);
  //
  return (
    <MainLayout>
      <div className="flex">
        <div className="flex w-[50%] gap-x-3">
          <div className="px-10 py-10 bg-cyan-400">
            <h5>img</h5>
          </div>
          <div>
            <h3 className="font-semibold">{product?.description}</h3>
            <h4>
              Category:<span>{product?.category}</span>
            </h4>
            <h4>
              Brand:<span>{product?.brand}</span>
            </h4>
            <h4>Price:{product?.price}</h4>
            <h5>
              Code:<span>{product?.product_code}</span>
            </h5>
            <h6>
              Remarks:<span>{product?.remarks}</span>
            </h6>
          </div>
        </div>
        <div className="w-[50%]">
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            aut itaque, facere dolor sapiente magnam accusamus nulla fugiat
            autem soluta.
          </h3>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetails;
