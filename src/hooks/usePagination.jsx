import { useState } from "react";

const usePagination = () => {
  // const totalItems = villages?.length;
  // const numberOfPages = Math.ceil(totalItems / itemsPerPage);
  // const totalPages = [...Array(numberOfPages).keys()];
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [activePage, setActivePage] = useState(0);

  return { itemsPerPage, setItemsPerPage, activePage, setActivePage };
};
export default usePagination;

// import { useState } from "react";

// const usePagination = (data, itemsPerPage) => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(data.length / itemsPerPage);

//   const currentData = () => {
//     const begin = (currentPage - 1) * itemsPerPage;
//     const end = begin + itemsPerPage;
//     return data.slice(begin, end);
//   };

//   const goToPage = (page) => {
//     setCurrentPage(page);
//   };

//   const goToNextPage = () => {
//     setCurrentPage((prev) => Math.min(prev + 1, totalPages));
//   };

//   const goToPrevPage = () => {
//     setCurrentPage((prev) => Math.max(prev - 1, 1));
//   };

//   const goToFirstPage = () => {
//     setCurrentPage(1);
//   };

//   const goToLastPage = () => {
//     setCurrentPage(totalPages);
//   };

//   return {
//     currentData,
//     goToPage,
//     goToNextPage,
//     goToPrevPage,
//     goToFirstPage,
//     goToLastPage,
//     currentPage,
//     totalPages,
//   };
// };

// export default usePagination;
