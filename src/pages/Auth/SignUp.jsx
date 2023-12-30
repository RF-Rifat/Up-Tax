import React, { useContext, useState } from "react";
import { AuthProvider } from "../../provider/Provider";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import "./login.css";

const SignUp = () => {
  const { createUser, updateUser, signWithGooglePop } =
    useContext(AuthProvider);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  // console.log(createUser);
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
        className="inputContainer md:pt-10 min-h-[140svh] md:min-h-[100svh]"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1608501078713-8e445a709b39?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
      >
<<<<<<< HEAD
        <section className="flex flex-col px-10 py-6 md:mt-5 xl:mt-20 main">
=======
        <section className="flex  flex-col px-10  main">
>>>>>>> ffb595274e45964bf526bb41a13d97aa889a8c26
          <form onSubmit={handleSubmit}>
            <h1 className="font-semibold text-2xl my-2 heading">
              Create a new account{" "}
            </h1>
            <div className="inputBox w-[300px] md:w-[400px] lg:w-[500px]">
              <ion-icon name="mail-outline"></ion-icon>
              <input type="text" name="name" required />
              <label>Name</label>
            </div>
            <div className="inputBox w-[300px] md:w-[400px] lg:w-[500px]">
              <ion-icon name="mail-outline"></ion-icon>
              <input type="email" name="email" required />
              <label>Email</label>
            </div>
            <div className="inputBox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input type="password" name="password" required />
              <label>Password</label>
            </div>
            <div className="forget flex flex-wrap py-2 text-lg">
              <label>
                <input className="scale-125" type="checkbox" />
                Remember Me
              </label>
              <Link to={"/"}>Forget Password</Link>
            </div>
            <button className="signBtn mb-3">Register</button>
            <div className="register text-lg">
              <p>
                Already have an account ?
                <Link className="ml-4" to={"/login"}>
                  login
                </Link>
              </p>
            </div>
            <div className="text-red-500 text-xl">{error}</div>
          </form>
          <div className="flex flex-wrap">
            <button
              onClick={handleGoogleLogIn}
              aria-label="Continue with google"
              role="button"
              className="signBtn focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border border-gray-700 flex items-center mt-2 justify-center"
            >
              <svg
                width={19}
                height={20}
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
                  fill="#4285F4"
                />
                <path
                  d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
                  fill="#34A853"
                />
                <path
                  d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
                  fill="#FBBC05"
                />
                <path
                  d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
                  fill="#EB4335"
                />
              </svg>
              <p className="text-base font-medium ml-4 text-gray-700">
                Continue with Google
              </p>
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignUp;
