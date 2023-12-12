import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useGetData from "../../hooks/useGetData";
import Loading from "../shared/Loading/Loading";
import { AuthProvider } from "../../provider/Provider";
import toast from "react-hot-toast";

const Login = () => {
  // const { login ,user,setUser} = useContext(AdminContext);
  const { login, user, setUser } = useContext(AuthProvider);
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
        toast.success("Your Email is successfully logIn");
        Navigate("/");
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
        toast.error("Your LogIn is Invalid");
        console.log(error)
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
          <button className="w-full p-2 font-medium text-white uppercase rounded bg-gradient-to-b from-gray-700 to-gray-900 md:p-4">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
