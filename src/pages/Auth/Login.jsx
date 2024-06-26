import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useGetData from "../../hooks/useGetData";
import Loading from "../shared/Loading/Loading";
import { AuthProvider } from "../../provider/Provider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import "./login.css";
const Login = () => {
  const { login, user, setUser, resetPassword, signWithGooglePop } =
    useContext(AuthProvider);

  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const goTo = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminsData, isLoading] = useGetData("/collection/users");
  if (isLoading) {
    return <Loading></Loading>;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    login(email, password)
      .then((result) => {
        goTo("/");
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="ml-3 flex-1">
                  <p className="mt-1 text-sm text-gray-500">
                    Successfully login
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full h-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Close
              </button>
            </div>
          </div>
        ));
        event.target.reset();
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  const handleResetPassword = () => {
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent. Check your inbox.");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>UpHTax | Login</title>
      </Helmet>
      <div
        className="inputContainer  min-h-[140svh] md:min-h-[100svh]"
        loading="lazy"
      >
        <section className="flex flex-col px-10 py-6 mt-10 main">
          <form onSubmit={handleSubmit}>
            <h1 className="heading text-2xl font-semibold my-2">Login</h1>
            <div className="inputBox w-[300px] md:w-[400px] lg:w-[500px]">
              <ion-icon name="mail-outline"></ion-icon>
              <input
                type="email"
                id="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                required
              />
              {/* <label>Email</label> */}
            </div>

            <div className="inputBox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {/* <label>Password</label> */}
            </div>
            <div className="forget  text-xl">
              <label>
                <input className="scale-125" type="checkbox" required />
                Remember Me
              </label>
            </div>
            <button className="signBtn mb-3">Log in</button>

            <div className="register text-xl">
              <p>Only valid user can Login</p>
              {error && <div className=" text-red-600 text-xl">{error}</div>}
            </div>
          </form>
          <div className="mb-3">
            <button
              className="font-bold text-cyan-500"
              onClick={handleResetPassword}
            >
              Forget Password ?
            </button>
          </div>
        </section>
      </div>
    </>
  );
};
export default Login;
