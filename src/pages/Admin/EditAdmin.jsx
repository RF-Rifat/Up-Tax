import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import BASE_URL from "../../api/api";
import Swal from "sweetalert2";

const EditAdmin = () => {
  const goTo = useNavigate();
  const { id } = useParams();
  const [admin, setAdmin] = useState({});
  const [role, setRole] = useState("");
  const [fieldsData, setFieldsData] = useState({});
  const navigate = useNavigate();

  useState(() => {
    fetch(BASE_URL + `/collection/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data);
        setFieldsData({
          ...data,
        });
      });
  }, [id]);
  const { Type, Role, Name, Email, Phone, Password, Status } = admin || {};

  //Village correction form handler
  const handleAdminSubmit = (e) => {
    e.preventDefault();

    // e.target.reset();
    // toast.success("Edited");
    // goTo("/village");
    const { _id, ...newData } = fieldsData;

    // console.log(newData);
    fetch(BASE_URL + `/collection/users/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Updated Successfully",
        });
        navigate("/operator");
        location.reload();
      });
  };

  const handleFormValueChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setFieldsData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fields = [
    // {
    //   name: "Type",
    //   type: "text",
    //   placeHolder: "Type",
    //   defaultValue: Type,
    // },
    // {
    //   name: "Role",
    //   type: "text",
    //   placeHolder: "Role",
    //   defaultValue: Role,
    // },
    {
      name: "Name",
      type: "text",
      placeHolder: "Name",
      defaultValue: Name,
    },
    {
      name: "Email",
      type: "email",
      placeHolder: "Email",
      defaultValue: Email,
    },
    {
      name: "Phone",
      type: "text",
      placeHolder: "Phone",
      defaultValue: Phone,
    },
    // {
    //   name: "Password",
    //   type: "text",
    //   placeHolder: "Password",
    //   defaultValue: Password,
    // },
  ];

  return (
    <div className="min-h-screen hero bg-base-200">
      <form
        onSubmit={handleAdminSubmit}
        className="card-body w-[90%] lg:w-1/2 bg-white top-0"
      >
        <h1 className="pb-2 text-2xl font-bold md:text-4xl">Edit User</h1>

        {fields.map(({ name, type, placeHolder, defaultValue }) => (
          <div key={name} className="form-control">
            <label className="label">
              <span className="label-text font-bold md:text-[14px] lg:text-[16px]">
                {placeHolder}
              </span>
            </label>
            <input
              value={fieldsData[name]}
              onChange={handleFormValueChange}
              type={type}
              defaultValue={defaultValue}
              name={name}
              placeholder={placeHolder}
              className="p-2 border-b focus-within:outline-none bordered"
              required
            />
          </div>
        ))}
        <label className="label">
          <span className="label-text font-bold md:text-[14px] lg:text-[16px]">
            Role
          </span>
        </label>
        <select
          value={fieldsData["Role"]}
          onChange={handleFormValueChange}
          name="Role"
          type="select"
          className="w-full text-base font-semibold text-gray-500 select border-info"
        >
          <option disabled>Select</option>
          <option value="Admin">Admin</option>
          <option value="Super-Admin">Super-Admin</option>
          <option value="User">User</option>
        </select>
        {/* <label className="label">
          <span className="label-text font-bold md:text-[14px] lg:text-[16px]">
            Status
          </span>
        </label>
        <select
          value={fieldsData["Status"]}
          onChange={handleFormValueChange}
          name="Status"
          type="select"
          className="w-full text-base font-semibold text-gray-500 select border-info"
        >
          <option disabled>Select</option>
          <option value="Active">Active</option>
          <option value="In Active">In Active</option>
        </select> */}

        <div className="mt-6 form-control">
          <button
            type="submit"
            className="text-white bg-green-500 btn hover:bg-green-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditAdmin;
