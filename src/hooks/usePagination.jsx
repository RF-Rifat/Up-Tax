import { useState, useEffect } from "react";

const usePagination = (totalItems) => {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [activePage, setActivePage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const newPageCount = Math.ceil(totalItems / itemsPerPage);
    setPageCount(newPageCount);

    if (activePage >= newPageCount) {
      setActivePage(0);
    }
  }, [totalItems, itemsPerPage, activePage]);

  return {
    itemsPerPage,
    setItemsPerPage,
    activePage,
    setActivePage,
    pageCount,
  };
};

export default usePagination;
