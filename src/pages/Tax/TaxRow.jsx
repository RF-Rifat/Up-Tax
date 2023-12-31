import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import BASE_URL from "../../api/api";
import { BsEyeFill } from "react-icons/bs";
import { AdminDataContext } from "../Admin/AdminProvider";

const TaxRow = ({ data, idx, setAllTax }) => {
  const { isSuperAdmin } = useContext(AdminDataContext);
  const handleDelete = () => {
    // Delete pop-up
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(BASE_URL + `/collection/tax/${data._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((deleted) => {
            Swal.fire("Deleted!", "Deleted Successfully.", "success");
            setAllTax((prevData) =>
              prevData.filter((prevAdmin) => prevAdmin._id !== data?._id)
            );
          });
      }
    });
  };

  return (
    <tr>
      <td className="px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3">{idx + 1}</td>
      <td className="px-2 text-[10px] md:text-[16px] py-1 sm:px-4 sm:py-2 md:px-6 md:py-3">
        {data?.name}
      </td>
      <td className="px-2 text-[10px] md:text-[16px] py-1 sm:px-4 sm:py-2 md:px-6 md:py-3">
        {data?.type == "household" ? "গৃহস্থ" : "ব্যবসা"}
      </td>
      <td className="px-2 text-[10px] md:text-[16px] py-1 sm:px-4 sm:py-2 md:px-6 md:py-3">
        {data?.amount}
      </td>
      <td className="px-2 text-[10px] md:text-[16px] py-1 sm:px-4 sm:py-2 md:px-6 md:py-3">
        {data?.receipt}
      </td>
      <td className="px-2 text-[10px] md:text-[16px] py-1 sm:px-4 sm:py-2 md:px-6 md:py-3">
        {data?.financialYear}
      </td>
      <td className="px-2 text-[10px] md:text-[16px] py-1 sm:px-4 sm:py-2 md:px-6 md:py-3">
        {data?.phone}
      </td>
      <td className="px-2 text-[10px] md:text-[16px] py-1 sm:px-4 sm:py-2 md:px-6 md:py-3">
        {data?.PaymentDate}
      </td>
      <td className="px-2 text-[10px] md:text-[16px] py-1 sm:px-4 sm:py-2 md:px-6 md:py-3">
        {data?.code}
      </td>

      {/* Navigation */}
      <td className="join flex">
        <Link to={`/tax-payer/${data?._id}`} className="join-item btn">
          <BsEyeFill className="text-[20px] text-black"></BsEyeFill>
        </Link>
        {isSuperAdmin && (
          <Link to={`/update-tax/${data?._id}`} className="join-item btn">
            <button className="text-white">
              <AiFillEdit className="text-green-500 text-[15px] md:text-2xl"></AiFillEdit>
            </button>
          </Link>
        )}
        {isSuperAdmin && (
          <button
            onClick={() => handleDelete()}
            className="text-white join-item btn"
          >
            <AiFillDelete className="text-[#ff5959] text-[15px] md:text-2xl"></AiFillDelete>
          </button>
        )}
      </td>
    </tr>
  );
};

export default TaxRow;
