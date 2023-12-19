import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "./dashboard.css";
import useCountData from "../../hooks/useCountData";
import { Link } from "react-router-dom";
import Loading from "../shared/Loading/Loading";



const Dashboard = () => {
  const { data: totalCount, loading } = useCountData();

  if (loading) {
    return <Loading/> ;
  }


  console.log(totalCount?.todayPayment)

  const TaxData = [
    {
      user: "সকল গৃহস্ত",
      userData: totalCount?.house,
      path: "/household",
    },
    {
      user: "সকল ব্যবসা",
      userData: totalCount?.business,
      path: "/business",
    },
    {
      user: "গৃহ্য কর",
      userData: totalCount?.totalHomeAssessmentTax,
    },
    {
      user: "ব্যবসা কর",
      userData: totalCount?.totalBusinessAssessmentTax,
    },
    {
      user: "গৃহস্থ কর আদায়",
      userData: totalCount?.totalHomePaidTax,
    },
    {
      user: "ব্যবসা কর আদায়",
      userData: totalCount?.totalBusinessPaidTax,
    },

    {
      user: "আজকের আদায়",
      userData: totalCount?.todayPayment,
    },
  ];

  return (
    <div className="p-8">
      <div className="gridLayout">
        {TaxData?.map((user, idx) => {
          // Define an array of background colors
          const colors = ["bg-[#17A2B8]", "bg-[#DC3545]", "bg-[#FFC107]"];

          // Use modulo operator to cycle through the colors
          const bgColor = colors[idx % colors.length];

          return (
            <div
              key={idx}
              className={`card  ${
                bgColor == "bg-[#FFC107]" ? "text-black" : "text-white"
              } ${bgColor} space-y-8 shadow-xl`}
            >
              <div className="card-body space-y-3 min-h-[200px]">
                <h2 className="card-title  text-[22px] leading-9">
                  {user.user}
                </h2>
                <p className=" text-[19px]">{user.userData}</p>
                <div className=" flex gap-2  items-center">
                  <Link to={user?.path} className=" text-[16px]">
                    বিস্তারিত
                  </Link>
                  <BsFillArrowRightCircleFill className="text-[16px]"></BsFillArrowRightCircleFill>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
