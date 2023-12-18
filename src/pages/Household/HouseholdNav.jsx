// import { useState } from "react";
import { TiPlus } from "react-icons/ti";
import { Link } from "react-router-dom";
const HouseholdNav = ({ setQuery }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const word = form.get("word");
    const name = form.get("name");
    const holding = form.get("holding");
    const nid = form.get("nid");
    const phone = form.get("phone");

    if (name) {
      return setQuery({head_of_household_name:name});
    }
    if (word) {
      return setQuery({ word: word });
    }
    if (holding) {
      return setQuery({ holding_number: holding });
    }
    if (nid) {
      return setQuery({ national_id: nid });
    }
    if (phone) {
      return setQuery({head_of_household_mobile:phone});
    }
    return setQuery("");
  };

  // const handlePhone = (e) => {
  //   if (!e.target.value) {
  //     setSearch(householdClients);
  //     return;
  //   }

  //   setSearch(
  //     search?.filter((item) =>
  //       item?.head_of_household_mobile.includes(e.target.value)
  //     )
  //   );
  // };
  return (
    <div className="flex justify-between  border-[1px] border-green-400 bg-white items-center mt-3 rounded-lg py-5 px-5 gap-5">
      <form onSubmit={handleSubmit} className="flex gap-4 w-11/12">
        <input
          type="text"
          placeholder="Search by name"
          name="name"
          className="input input-bordered input-success w-full max-w-xs input-sm"
        />
        <input
          type="text"
          placeholder="Search by word"
          name="word"
          className="input input-bordered input-success w-full max-w-xs input-sm"
        />
        <input
          type="text"
          placeholder="Search holding"
          name="holding"
          className="input input-bordered input-success w-full max-w-xs input-sm"
        />

        <input
          type="text"
          placeholder="Search Nid "
          name="nid"
          className="input input-bordered input-success w-full max-w-xs input-sm"
        />
        <input
          type="text"
          placeholder="Search Mobile"
          name="phone"
          // onBlur={handlePhone}
          className="input input-bordered input-success w-full max-w-xs input-sm"
        />
        <input
          type="submit"
          value={"search"}
          className="btn outline-none border-none  btn-sm focus-within:outline-none bg-green-400 text-white hover:bg-green-500"
        />
      </form>

      <Link
        to="/add-household"
        className="btn outline-none border-none  btn-sm focus-within:outline-none bg-green-400 text-white hover:bg-green-500"
      >
        <TiPlus></TiPlus>
        নতুন গৃহস্থ
      </Link>
    </div>
  );
};
export default HouseholdNav;
