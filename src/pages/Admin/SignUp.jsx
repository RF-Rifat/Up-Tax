import React, { useContext, useState } from "react";
import { AuthProvider } from "../../provider/Provider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignUp = () => {
  const { createUser, updateUser, signWithGooglePop } =
    useContext(AuthProvider);
  const navigate = useNavigate();
  // console.log(createUser);
  const handleFormCollectData = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name, email, password };

    try {
      await createUser(email, password);
      toast.success("login Registration Successful!");
      await updateUser(name);

      navigate("/");
    } catch (error) {
      console.error("Error in registration process:", error.message);
    }
  };

  const handleGoogleLogIn = () => {
    signWithGooglePop()
      .then((result) => {
        toast.success("login Registration Successful!");
        // toast.custom((t) => (
        //   <div
        //     className={`${
        //       t.visible ? "animate-enter" : "animate-leave"
        //     } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        //   >
        //     <div className="flex-1 w-0 p-4">
        //       <div className="flex items-start">
        //         <div className="ml-3 flex-1">
        //           <p className="mt-1 text-sm text-gray-500">
        //             Successfully login
        //           </p>
        //         </div>
        //       </div>
        //     </div>
        //     <div className="flex border-l border-gray-200">
        //       <button
        //         onClick={() => toast.dismiss(t.id)}
        //         className="w-full h-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        //       >
        //         Close
        //       </button>
        //     </div>
        //   </div>
        // ));
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        toast.error("Failed");
        console.error(error);
      });
  };

  return (
    <>
      {/* component */}
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <section className="bg-blueGray-100 h-screen flex items-center">
        <div className="w-full lg:w-6/12 px-4 md:px-14 mx-auto pt-6">
          <h1 className="text-center text-2 md:text-5xl font-bold  mb-6">
            Register Form
          </h1>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
            <div className="rounded-t mb-0 px-6 py-6 bg-gray-200">
              <form onSubmit={handleFormCollectData}>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="username"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Name"
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
                  />
                </div>

                <div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      id="customCheckLogin"
                      type="checkbox"
                      className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                    />
                    <span className="ml-2 text-sm font-semibold text-blueGray-600">
                      Remember me
                    </span>
                  </label>
                </div>
                <div className="text-center mt-6">
                  <button
                    className="bg-gray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-4 w-full ease-linear transition-all duration-150"
                    type="submit"
                  >
                    {" "}
                    Sign In{" "}
                  </button>
                </div>
              </form>
              <div className="text-center mb-3">
                <h6 className="text-blueGray-600 text-xl font-bold">
                  Sign in with Google
                </h6>
              </div>
              <div className="btn-wrapper text-center">
                <button
                  onClick={handleGoogleLogIn}
                  className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal btn w-3/4 rounded-md  outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center  text-xs ease-linear transition-all duration-150"
                  type="button"
                >
                  <img
                    alt="..."
                    className="w-5 mr-1"
                    src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"
                  />
                  Google{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
