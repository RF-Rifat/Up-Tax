import { useParams } from "react-router";
import useGetData from "../../hooks/useGetData";
import { Link } from "react-router-dom";
import TaxPaymentForm from "../shared/Tax-Payment/TaxPayment";
import { useContext, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { AdminDataContext } from "../Admin/AdminProvider";

const BusinessClientDetails = () => {
  const { isAdmin, isSuperAdmin } = useContext(AdminDataContext);

  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const [businessClient] = useGetData(`/collection/business/${id}`);

  console.log(Object.keys(businessClient).join(","));
  const {
    _id,
    upazila,
    union,
    businessType,
    owner_name,
    business_code,
    assesment_tax,
    business_name,
    phone,
    village,
    shop_no,
    word,
    business_capital,
    UP_collected_tax,
    taxInfo,
  } = businessClient || {};

  // modal
  // open modal
  const handleOpenTaxPay = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  //close modal
  const handleCloseTaxPay = () => {
    setIsOpen(false);
  };

  const taxPayerInfo = {
    name: owner_name,
    village: village,
    phone: phone,
    type: "business",
    code: shop_no,
    // type: "ব্যবসা",
  };

  return (
    <div className="card-body">
      <div className="overflow-x-auto">
        <h2 className="bg-green-500 text-white text-center text-xl px-2 py-2 w-full">
          {" "}
          ব্যবসা বিবরন
        </h2>
        <table className="table">
          <tbody>
            <tr className="hover">
              <th>গ্রাম:</th>
              <td>{village}</td>
            </tr>
            <tr className="hover">
              <th>ব্যবসার নাম:</th>
              <td>{business_name}</td>
            </tr>
            <tr className="hover">
              <th>দোকান নং:</th>
              <td>{shop_no}</td>
            </tr>
            <tr className="hover">
              <th>মালিকের নাম:</th>
              <td>{owner_name}</td>
            </tr>
            <tr className="hover">
              <th>ওয়ার্ড:</th>
              <td>{word}</td>
            </tr>
            <tr className="hover">
              <th>ব্যবসার ধরন:</th>
              <td>{businessType}</td>
            </tr>
            <tr className="hover">
              <th>মোবাইল:</th>
              <td>{phone}</td>
            </tr>
            <tr className="hover">
              <th>ব্যবসার মূলধন:</th>
              <td>{business_capital}</td>
            </tr>
            <tr className="hover">
              <th>এসেসমেন্ট অনুযায়ী কর:</th>
              <td>{assesment_tax}</td>
            </tr>
            <tr className="hover">
              <th>ইউপি কর্তৃক ধার্য্য কৃত কর:</th>
              <td>{UP_collected_tax}</td>
            </tr>

            {/* কর আদায়ের তথ্য  */}
            {taxInfo?.map((item) => (
              <>
                <tr className="hover">
                  <td colSpan="2">
                    <h2 className="bg-green-500 text-white text-xl px-2 py-2 w-full text-center">
                      {item.financialYear} অর্থ বছর এর কর আদায়ের তথ্য
                    </h2>
                  </td>
                </tr>
                <tr className="hover">
                  <th>কর আদায়ের তারিখ:</th>
                  <td>{item.PaymentDate}</td>
                </tr>
                <tr className="hover">
                  <th>কর আদায়ের অর্থ বছর:</th>
                  <td>{item.financialYear}</td>
                </tr>
                <tr className="hover">
                  <th>রশিদ নং:</th>
                  <td>{item.receipt}</td>
                </tr>
                <tr className="hover">
                  <th>আদায়কৃত কর:</th>
                  <td>{item.amount}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>

        <div className="mt-5 flex join items-center justify-center">
          <Link onClick={handleOpenTaxPay} className="join-item btn">
            pay
          </Link>
          {isSuperAdmin && (
            <Link to={`/businessUpdate/${_id}`} className="join-item btn">
              <AiFillEdit className="text-green-500 text-[18px] md:text-[30px]"></AiFillEdit>
            </Link>
          )}
          {isAdmin && (
            <Link to={`/businessUpdate/${_id}`} className="join-item btn">
              <AiFillEdit className="text-green-500 text-[18px] md:text-[30px]"></AiFillEdit>
            </Link>
          )}
          <Link to="/business" className="join-item btn">
            back
          </Link>
        </div>

        <div className={` ${isOpen ? "block" : "hidden"} `}>
          <TaxPaymentForm
            uniqId={_id}
            phone={phone}
            handleCloseTaxPay={handleCloseTaxPay}
            taxPayerInfo={taxPayerInfo}
            head_of_household_name={owner_name}
            head_of_household_mobile={phone}
          ></TaxPaymentForm>
        </div>
      </div>
    </div>
  );
};
export default BusinessClientDetails;
