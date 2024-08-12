import React from "react";
import { useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
//
const Test = () => {
  //
  const [currentPage, setCurrentPage] = useState(8);
  const totalPages = 20;

  //
  return (
    <div className="flex justify-center items-center h-screen">
      <ResponsivePagination
      current={currentPage}
      total={totalPages}
      onPageChange={setCurrentPage}
    />
    </div>
  );
};

export default Test;
