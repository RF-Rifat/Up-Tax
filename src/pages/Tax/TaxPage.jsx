import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { range } from "lodash";
import useGetData from "../../hooks/useGetData";
import TaxHeader from "./TaxHeader";
import TaxRow from "./TaxRow";
import TaxNav from "./TaxNav";
import Loading from "../shared/Loading/Loading";
import Print from "../shared/Print/Print";

const TaxPage = () => {
  const [allTax, setAllTax] = useState([]);
  const [taxData, loading] = useGetData("/collection/tax");
  const [taxCount] = useGetData("/pageCount");
  useEffect(() => {
    setAllTax(taxData);
  }, [taxData]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTaxData = allTax.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(taxCount.taxCount / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1);
  };

  const tableref = useRef(null);

  const headers = [
    "Sl. No",
    "Name",
    "Type",
    "Amount",
    "Receipt",
    "Financial-Year",
    "phone",
    "Payment-Date",
    `business/ holding-Num`,
    "Action",
  ];

  return (
    <>
      <Helmet>
        <title>UpHTax | Tax</title>
      </Helmet>
      <div className="overflow-x-auto">
        <div className="card-body">
          <div className="table-responsive">
            <TaxNav taxData={taxData} allTax={allTax} setAllTax={setAllTax} />

            {loading ? (
              <Loading />
            ) : (
              <>
                <table
                  ref={tableref}
                  className="table table-sm table-bordered no-footer"
                >
                  <TaxHeader headers={headers} />

                  <tbody>
                    {currentTaxData?.map((data, idx) => (
                      <TaxRow
                        activePage={currentPage}
                        itemsPerPage={itemsPerPage}
                        data={data}
                        idx={idx}
                        key={idx}
                        setAllTax={setAllTax}
                      />
                    ))}
                  </tbody>
                </table>

                <div className="text-center mt-7">
                  <div className="flex items-center justify-center join btn-group space-x-2 my-3">
                    <button
                      className="px-3 py-1 mx-1 bg-gray-300 btn join-item"
                      onClick={handlePrevPage}
                    >
                      Prev
                    </button>
                    <select
                      className="p-1 border rounded join-item btn"
                      onChange={handleItemsPerPageChange}
                      value={itemsPerPage}
                    >
                      {[10, 20, 50, 100, 500, 1000].map((value) => (
                        <option key={value} value={value}>
                          {value}
                        </option>
                      ))}
                    </select>
                    <button
                      className="px-3 py-1 mx-1 bg-gray-300 btn join-item"
                      onClick={handleNextPage}
                    >
                      Next
                    </button>
                    <div className="flex">
                      {range(
                        1,
                        Math.ceil(taxCount.taxCount / itemsPerPage) + 1
                      ).map((pageNumber) => {
                        if (
                          pageNumber === 1 ||
                          pageNumber === currentPage ||
                          pageNumber ===
                            Math.ceil(taxCount.taxCount / itemsPerPage)
                        ) {
                          return (
                            <button
                              key={pageNumber}
                              className={`px-3 py-1 ${
                                currentPage === pageNumber
                                  ? "bg-blue-500 text-white"
                                  : "bg-gray-300"
                              } btn`}
                              onClick={() => paginate(pageNumber)}
                            >
                              {pageNumber}
                            </button>
                          );
                        } else if (
                          pageNumber > currentPage - 3 &&
                          pageNumber < currentPage + 3
                        ) {
                          return (
                            <button
                              key={pageNumber}
                              className={`px-3 py-1 ${
                                currentPage === pageNumber
                                  ? "bg-blue-500 text-white"
                                  : "bg-gray-300"
                              } btn`}
                              onClick={() => paginate(pageNumber)}
                            >
                              {pageNumber}
                            </button>
                          );
                        } else if (
                          pageNumber === currentPage - 3 ||
                          pageNumber === currentPage + 3
                        ) {
                          return (
                            <span
                              key={pageNumber}
                              className="px-3 py-1 bg-gray-300 btn"
                            >
                              ...
                            </span>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                  <Print tableRef={tableref}></Print>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TaxPage;
