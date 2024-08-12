import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { getProductCategory } from "../api/productApi";
import { useDispatch, useSelector } from "react-redux";
import { setCategorys } from "../redux/slices/categorys";

//
const Header = () => {
  const dispatch = useDispatch();
  const categorys = useSelector((state) => state.categorys.categorys);
  // console.log(categorys);

  //   get all product category
  useEffect(() => {
    getProductCategory()
      .then((res) => {
        if (res.status === 200 && res.data.length > 0) {
          dispatch(setCategorys(res.data));
        } else {
          dispatch(setCategorys([]));
        }
      })
      .catch((error) => dispatch(setCategorys([])));
  }, []);
  //
  return (
    <header>
      <div className="flex">
        {categorys.map((category, i) => {
          return (
            <div key={i} className="w-[25%] text-center px-4 py-4">
              <h3 className="font-semibold capitalize">{category._id}</h3>
              <h4 className="font-medium capitalize">total {category.total}</h4>
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
