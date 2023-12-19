import React from "react";
import Loading from "../pages/shared/Loading/Loading";
import useGetData from "./useGetData";

const useCountData = () => {
  const [totalCount, isLoading] = useGetData("/collection/totalCount");
  
  if (isLoading) {
    return { data: null, loading: true };
  }

  return { data: totalCount, loading: false };
};

export default useCountData;
