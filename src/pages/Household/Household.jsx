import { useEffect, useState } from "react";

import HouseholdNav from "./HouseholdNav";
import HouseholdClients from "./HouseholdClients";
import Loading from "../shared/Loading/Loading";

import Pagination from "../shared/Pagination/Pagination";
import usePagination from "../../hooks/usePagination";
import useGetSearchData from "../../hooks/useGetSearchData";

const Household = () => {
  const { itemsPerPage, setItemsPerPage, activePage, setActivePage } =
    usePagination();
  const [query, setQuery] = useState(null);
  const [searchData, setSearchData] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [householdClients, isLoading] =
    useGetSearchData(
      `/collection/house/?page=${activePage}&size=${itemsPerPage}&field=${searchField}&search=${searchValue}`,
      query
    ) || [];
  useEffect(() => {
    setSearchData(householdClients);

    if (query) {
      setSearchField(Object.keys(query)[0]);
      setSearchValue(query[searchField]);
    }
  }, [householdClients, query, searchField]);

  if (isLoading) {
    return <Loading></Loading>;
  }

  console.log(searchData.length);
  return (
    <div className="mx-2">
      <HouseholdNav setQuery={setQuery}></HouseholdNav>
      {/* household clients table */}
      <div className="overflow-x-auto">
        <table className="table table-xs mt-3">
          <thead className="bg-green-400 text-white ">
            <tr>
              <th>ক্রমিক </th>
              <th>ইউনিয়ন</th>
              <th>গ্রাম</th>
              <th>পিতা/স্বামীর</th>
              <th>ওয়ার্ড</th>
              <th>নাম</th>
              <th>মোবাইল</th>
              <th>হোল্ডিং নং</th>
              <th>বাড়ির মূল্য</th>
              <th>এসেসমেন্ট কর</th>
              <th>ইউপি কর</th>
              <th>একশন</th>
            </tr>
          </thead>
          {searchData?.map((client, idx) => (
            <HouseholdClients
              householdClients={householdClients}
              setSearchData={setSearchData}
              idx={idx}
              client={client}
              activePage={activePage}
              itemsPerPage={itemsPerPage}
              key={client._id}
            ></HouseholdClients>
          ))}
        </table>
      </div>

      <Pagination
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        // totalPages={totalPages}
        setActivePage={setActivePage}
        activePage={activePage}
      ></Pagination>
    </div>
  );
};

export default Household;
