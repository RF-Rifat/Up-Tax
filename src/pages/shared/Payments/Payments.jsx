import { useEffect, useReducer, useState } from "react";
import pay_tax_icon from "../../../../public/icons/icons/pay-tax.png";

import { useNavigate } from "react-router-dom/dist";
import BASE_URL from "../../../api/api";
import Modal from "../Modal/Modal";
import { calculateMonthDifference } from "../../../utils/calculateMonthDiff";

const Payments = ({ id, name, phone, assessmentTax, upTax, clientType }) => {
  console.log(assessmentTax);
  const [startMonth, setStartMonth] = useState(null);
  const [endMonth, setEndMonth] = useState(null);
  const [amount, setAmount] = useState(null);
  const [assessmentAmount, setAssessmentAmount] = useState(null);
  const [upAmount, setUpAmount] = useState(null);
  const [PaymentsType, setPaymentsType] = useState(null);
  const totalMonth = calculateMonthDifference(startMonth, endMonth);

  const goTo = useNavigate();

  useEffect(() => {
    if (PaymentsType === "এসেসমেন্ট") {
      setAssessmentAmount(Number(assessmentTax) * totalMonth);
    }
    if (PaymentsType === "ইউপি") {
      setUpAmount(Number(upTax) * totalMonth);
    }
  }, [PaymentsType, assessmentTax, totalMonth, upTax]);

  const handleTaxPayment = async (e) => {
    e.preventDefault();

    // organizing taxpayer information to create backend obj
    const taxesInfo = {
      name: name,
      phone: phone,
      type: clientType,
      amount,
      assessmentAmount,
      upAmount,
      startMonth,
      endMonth,
    };

    // try {
    //   const res = await modifyData("/collection/payTax","POST",taxesInfo);
    //   console.log(res);
    // } catch (error) {
    //   console.log(error);
    // }

    fetch(BASE_URL + "/collection/tax", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taxesInfo),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })

      .then((data) => console.log(data));
    goTo("/household");
  };

  return (
    <>
      <Modal>
        <form onSubmit={handleTaxPayment} className="card-body relative">
          <div className=" bg-[#ffffff] flex items-center justify-center ">
            <img
              className="ring-4 ring-green-500 p-4 animate-bounce rounded-full"
              src={pay_tax_icon}
              alt=""
            />
          </div>
          <h1 className="text-2xl mt-8 md:text-3xl text-center font-bold pb-2 ">
            কর পরিশোধ
          </h1>
          <div className="1/4 mx-auto space-y-8">
            {/* 1st colum */}
            <div className="flex gap-3 flex-1 justify-between">
              {/* Amount */}

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold md:text-[14px] lg:text-[16px]">
                    পরিমাণ
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="00"
                  className="w-32 py-1"
                  //   value={amount}
                  disabled
                  defaultValue={assessmentAmount || upAmount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold md:text-[14px] lg:text-[16px]">
                    করের ধরন
                  </span>
                </label>
                <select
                  className="w-32 py-1"
                  defaultValue={"বাছাই করুন"}
                  onChange={(e) => setPaymentsType(e.target.value)}
                >
                  <option disabled> বাছাই করুন</option>
                  <option value="এসেসমেন্ট">এসেসমেন্ট</option>
                  <option value="ইউপি">ইউপি</option>
                </select>
              </div>
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold md:text-[14px] lg:text-[16px]">
                    টাইপ
                  </span>
                </label>
                <select
                  className="w-32 py-1"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="গৃহস্থ">গৃহস্থ</option>
                  <option value="ব্যবসা">ব্যবসা</option>
                </select>
              </div> */}
            </div>

            {/* 2cnd column */}
            <div className="flex gap-3">
              {/* Started month */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold mb-1 md:text-[14px] lg:text-[16px]">
                    শুরু মাস নির্বাচন করুন
                  </span>
                </label>
                <input
                  type="date"
                  id=""
                  onChange={(e) => setStartMonth(e.target.value)}
                />
              </div>

              {/* End Month */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold mb-1 md:text-[14px] lg:text-[16px]">
                    শেষ মাস নির্বাচন করুন
                  </span>
                </label>
                <input
                  type="date"
                  onChange={(e) => setEndMonth(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="form-control">
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-[#57e557] text-white hover:bg-[#07b107]"
              >
                Save
              </button>
            </div>

            {/* Submission date */}
          </div>
        </form>
      </Modal>
    </>
  );
};

export default Payments;
