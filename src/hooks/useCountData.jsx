import Loading from "../pages/shared/Loading/Loading";
import useGetData from "./useGetData";

const useCountData = () => {
    const [totalCount,isLoading] = useGetData("/collection/totalCount")
if(isLoading){
    return <Loading></Loading>
}
    return  totalCount
};
export default useCountData;