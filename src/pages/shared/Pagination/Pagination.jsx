const Pagination = ({
  itemsPerPage,
  setItemsPerPage,
  totalPages,
  activePage,
  setActivePage,
}) => {
  return (
    <div>
      <div className="flex gap-3 flex-wrap gap-y-8 justify-center items-center py-8">
        <div className="join grid grid-cols-3">
          <button
            onClick={() => activePage > 0 && setActivePage(activePage - 1)}
            className="join-item btn btn-outline"
          >
            Previous page
          </button>
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
            className="select select-bordered border-gray-800 join-item"
          >
            <option disabled>Per page</option>
            <option>2</option>
            <option>5</option>
            <option>10</option>
            <option>20</option>
            <option>40</option>
            <option>60</option>
            <option>90</option>
          </select>
          <button
            disabled={activePage >= totalPages - 1}
            onClick={() => setActivePage(activePage + 1)}
            className="join-item btn btn-outline"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default Pagination;
