import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useGetData from "../../hooks/useGetData";
import Loading from "../shared/Loading/Loading";
import { AuthProvider } from "../../provider/Provider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Login = () => {
  // const { login ,user,setUser} = useContext(AdminContext);
  const { login, user, setUser, resetPassword } = useContext(AuthProvider);
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
        console.log(result.user);
        event.target.reset();
      })
      .catch((error) => {
        toast.error(error);
        console.log(error);
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
        console.error(error);
      });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setError(false);
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;

  //   adminsData.forEach((data) => {
  //     const matchEmail = data?.Email === email;
  //     const matchPass = data?.Password === Number(password);

  //     console.log(matchEmail);
  //     console.log(matchPass);

  //     if (matchEmail && matchPass) {
  //       console.log("correct");
  //       goTo("/");
  //     } else {
  //       console.log("wrong");
  //       setError(true);
  //     }
  //   });

  //   // const status = login(email, +password);
  //   // if (user) {
  //   //   goTo("/");
  //   // } else {
  //   //   setError(true);
  //   // }
  // };

  return (
<<<<<<< HEAD
    <>
      <Helmet>
        <title>UpHTax | Login</title>
      </Helmet>
      <div className="inputContainer pt-24 md:pt-10 min-h-[140svh] md:min-h-[100svh]">
        <section className="flex flex-col px-10 py-6 mt-10 main">
          <form onSubmit={handleSubmit}>
            <h1 className="heading text-2xl font-semibold my-2">Login</h1>
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
            <div className="forget flex flex-wrap text-xl">
              <label>
                <input className="scale-125" type="checkbox" required />
                Remember Me
              </label>
              <button onClick={handleResetPassword} to={"/"}>
                Forget Password
              </button>
            </div>
            <button className="signBtn">Log in</button>
            <div className="register text-xl">
              <p>
                Don&apos;t have a account{" "}
                <Link to={"/signUp"} className="ml-5">
                  Register
                </Link>
              </p>
              {error && <div className=" text-red-600 text-xl">{error}</div>}
            </div>
          </form>
          <div className="flex flex-wrap">
=======
    <div className="flex items-center justify-center h-screen overflow-hidden bg-yellow-400 dark:bg-gray-800">
      <div className="w-8/12 bg-white lg:w-6/12 md:7/12 shadow-3xl rounded-xl">
        <div className="absolute p-4 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded-full shadow shadow-gray-200 left-1/2 md:p-8">
          <svg width={32} height={32} viewBox="0 0 24 24" fill="#FFF">
            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
          </svg>
        </div>
        <form onSubmit={handleSubmit} className="p-12 md:p-24">
          <div className="flex items-center mb-6 text-lg md:mb-8">
            <svg className="absolute ml-3" width={24} viewBox="0 0 24 24">
              <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
            </svg>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 pl-12 bg-gray-200 rounded md:py-4 focus:outline-none"
              placeholder="Email"
              name="email"
              required
            />
          </div>
          <div className="flex items-center mb-6 text-lg md:mb-8">
            <svg className="absolute ml-3" viewBox="0 0 24 24" width={24}>
              <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
            </svg>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-2 pl-12 bg-gray-200 rounded md:py-4 focus:outline-none"
              placeholder="Password"
              name="password"
              required
            />
          </div>
          {error && (
            <p className="font-bold text-red-600">Password dose not match</p>
          )}
          <button className="w-full p-2 mb-3 font-medium text-white uppercase rounded bg-gradient-to-b from-gray-700 to-gray-900 md:p-4">
            Log In
          </button>

          <div className="text-center mb-3">
            <h6 className="text-blueGray-600 text-xl font-bold">
              Sign in with Google
            </h6>
          </div>
          <div className="btn-wrapper text-center">
>>>>>>> ffb595274e45964bf526bb41a13d97aa889a8c26
            <button
              // onClick={}
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
export default Login;
