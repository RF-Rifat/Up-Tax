import { useParams } from "react-router-dom";
import useGetData from "../../hooks/useGetData";

const TaxPayerDetails = () => {
  const { id } = useParams();
  const [taxDetails] = useGetData(`/collection/tax/${id}`);
  console.log(taxDetails);
  return (
    <div className="overflow-x-auto m-3">
      <table className="table w-full border border-collapse">
        {/* head */}
        <thead className="bg-green-500 text-center text-white">
          <tr>
            <th className="p-2">Property</th>
            <th className="p-2">Details</th>
          </tr>
        </thead>
        <tbody>
          {/* Row for name and phone */}
          <tr className="hover">
            <td className="p-2">Name</td>
            <td className="p-2">{taxDetails?.name}</td>
          </tr>
          <tr className="hover">
            <td className="p-2">Phone</td>
            <td className="p-2">{taxDetails?.phone}</td>
          </tr>
          <tr className="hover">
            <td className="p-2">Type</td>
            <td className="p-2">{taxDetails?.type}</td>
          </tr>
          <tr className="hover">
            <td className="p-2">Business/Holding Num</td>
            <td className="p-2">{taxDetails?.code}</td>
          </tr>

          <tr className="hover">
            <td className="p-2">Amount</td>
            <td className="p-2">{taxDetails?.amount}</td>
          </tr>
          <tr className="hover">
            <td className="p-2">Financial-Year</td>
            <td className="p-2">{taxDetails?.financialYear}</td>
          </tr>
          <tr className="hover">
            <td className="p-2">Receipt</td>
            <td className="p-2">{taxDetails?.receipt}</td>
          </tr>
          <tr className="hover">
            <td className="p-2">PaymentDate</td>
            <td className="p-2">{taxDetails?.PaymentDate}</td>
          </tr>
          {/* You can add more rows if needed */}
        </tbody>
      </table>
    </div>
  );
};

export default TaxPayerDetails;
