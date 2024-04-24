import React, { useContext, useState } from "react";
import { AuthProvider } from "../../provider/Provider";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import "./login.css";

const SignUp = () => {
  const { createUser, updateUser, signWithGooglePop, logOut } =
    useContext(AuthProvider);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleSubmit = async (event) => {
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
      setError("Error in registration process:", error.message);
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
      <Helmet>
        <title>UpHTax | SignUp</title>
      </Helmet>

      <div
        className="inputContainer md:pt-10 min-h-[140svh] px-6 md:min-h-[100svh]"
        style={{
          backgroundImage: `url("https://github.com/RF-Rifat/Up-Tax/blob/main/public/signup-page-img.jpg?raw=true")`,
        }}
      >
        <section className="flex  flex-col px-10  main">
          <form onSubmit={handleSubmit}>
            <h1 className="font-semibold text-2xl my-6 heading">
              Create a new account{" "}
            </h1>
            <div className="inputBox w-[300px] md:w-[400px] lg:w-[500px]">
              <ion-icon name="mail-outline"></ion-icon>
              <input type="text" name="name" placeholder="User Name" required />
              <label>Name</label>
            </div>
            <div className="inputBox w-[300px] md:w-[400px] lg:w-[500px]">
              <ion-icon name="mail-outline"></ion-icon>
              <input
                type="email"
                name="email"
                placeholder="abc@gmail.com"
                required
              />
              <label>Email</label>
            </div>
            <div className="inputBox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input
                type="password"
                name="password"
                placeholder="*****"
                required
              />
              <label>Password</label>
            </div>
            <div className="forget flex flex-wrap py-2 text-lg">
              <label>
                <input className="scale-125" type="checkbox" />
                Remember Me
              </label>
              <Link onClick={logOut}>Forget Password</Link>
            </div>
            <button className="signBtn mb-3">Register</button>
            <div className="text-red-500 text-xl">{error}</div>
          </form>
          <div className="flex flex-wrap"></div>
        </section>
      </div>
    </>
  );
};

export default SignUp;
