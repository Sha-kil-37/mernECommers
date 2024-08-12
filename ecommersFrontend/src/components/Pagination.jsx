import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { setProductsLoderData } from "../redux/slices/productsLoderData";
const Pagination = () => {
  //
  const totalPages = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  // handle page change value
  const handlePaginationValue = (e) => {
    setCurrentPage(e);
    const pageNumber = Number(e);
    dispatch(setProductsLoderData({ pageNumber }));
  };
  //
  return (
    <section>
      <ResponsivePagination
        current={currentPage}
        total={totalPages}
        onPageChange={handlePaginationValue}
      />
    </section>
  );
};

export default Pagination;
