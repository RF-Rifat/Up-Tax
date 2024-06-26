import { Link } from "react-router-dom";
import { modifyData } from "../../api/api";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import { AiFillDelete, AiOutlineMenu } from "react-icons/ai";
import { useContext } from "react";
import { AdminDataContext } from "../Admin/AdminProvider";

const HouseholdClients = ({
  client,
  idx,
  householdClients,
  setSearchData,
  activePage,
  itemsPerPage,
}) => {
  const { isSuperAdmin } = useContext(AdminDataContext);
  const {
    _id,
    upazila,
    union,
    village,
    word,
    father_or_husband_name,
    head_of_household_name,
    head_of_household_mobile,
    holding_number,
    house_value,
    tax_based_on_assessment,
    tax_collected_by_UPO,
  } = client;

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "আপনি কি নিশ্চিত?",
        text: "আপনি এই পরিবর্তনটি আর ফিরিয়ে নিতে পারবেন না!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "হ্যা, ঠিক আছে!",
        cancelButtonText: "না",
      });

      if (result.isConfirmed) {
        const res = await modifyData(`/collection/house/${id}`, "DELETE");
        if (res.deletedCount > 0) {
          const remaining = householdClients?.filter((item) => item._id !== id);
          setSearchData(remaining);
          Swal.fire({
            title: "সফলভাবে মুছে ফেলা হয়েছে!!",
            text: "আপনার ফাইলটি মুছে ফেলা হয়েছে।",
            icon: "success",
            confirmButtonText: "ঠিক আছে",
          });
        }
      }

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <tbody>
      <tr>
        <td className="py-5">{activePage * itemsPerPage + idx + 1}</td>
        <td>{union}</td>
        <td>{word}</td>
        <td>{village}</td>
        <td>{head_of_household_name}</td>
        <td>{father_or_husband_name}</td>
        <td>{head_of_household_mobile}</td>
        <td>{holding_number} </td>
        <td>{house_value}</td>
        <td>{tax_based_on_assessment}</td>
        <td>{tax_collected_by_UPO}</td>
        <td className="join flex">
          <Link to={`/household-details/${_id}`} className="join-item btn">
            <AiOutlineMenu className="text-green-500 font-bold  text-[18px] md:text-[30px]"></AiOutlineMenu>
          </Link>
          {isSuperAdmin && (
            <button
              onClick={() => handleDelete(_id)}
              className="join-item btn btn-circle"
            >
              <AiFillDelete className="text-primaryClr text-[18px] md:text-[27px]"></AiFillDelete>
            </button>
          )}
        </td>
      </tr>
    </tbody>
  );
};

HouseholdClients.propTypes = {
  client: PropTypes.object.isRequired,
  householdClients: PropTypes.array.isRequired,
  idx: PropTypes.number.isRequired,
  setSearchData: PropTypes.func.isRequired,
};
export default HouseholdClients;
