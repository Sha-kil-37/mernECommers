import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setProductsLoderData } from "../redux/slices/productsLoderData";

// import ProductsLoder from "./ProductsLoder";
//
const Navbar = () => {
  //
  const dispatch = useDispatch();
 
  // handle per page option value & set per page option value in redux
  const handleOptions = (e) => {
    const perPage = Number(e.target.value);
    dispatch(setProductsLoderData({ perPage }));
  };
  // per page show total data
  const perPageValues = [10, 15, 20, 25];

  // handleSearchText & set searchText in redux
  function handleSearchText(e) {
    const searchText = e.target.value;
    dispatch(setProductsLoderData({ searchText }));
  }
  //
  return (
    <nav>
      <div className="py-2 border-2 flex items-center justify-between mt-1">
        <div className="w-[10%]">
          <a href="">Logo</a>
        </div>
        <div className="w-[70%]">
          <form className="w-full">
            <label htmlFor="">
              <input
                onChange={handleSearchText}
                className="w-full py-1 rounded-md outline-none border-2"
                type="search"
                placeholder="Search"
              />
            </label>
          </form>
        </div>
        <div className="w-[20%] flex justify-between items-center">
          <a className="font-bold text-blue-400">Login</a>
          <span>
            <CiShoppingCart />
          </span>
          <select onChange={(e) => handleOptions(e)} name="" id="">
            {perPageValues.map((item, i) => {
              return (
                <option key={i} value={item}>
                  per page {item}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      {/* <ProductsLoder /> */}
    </nav>
  );
};

export default Navbar;
