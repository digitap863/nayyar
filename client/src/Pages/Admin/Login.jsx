import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../../api/req";

const Login = () => {
  const navigate = useNavigate();

  // State variables with types
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Handle form submission with proper event type
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { email, password };
    console.log(data, "data in the frontend") // here the data is consoleing 
    try {
      const response = await adminLogin(data);

      if (response) {
        localStorage.setItem("adminToken", JSON.stringify(response.token));
        navigate("/admin/dashboard");
      }
    } catch (error) {
      console.log(error);
      setError(error.message || "An error occurred");
    }
  };

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <section className="bg-white/50 min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg w-full px-8 py-6">
          <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Welcome Back Admin !
          </h1>
          {/* <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
            Please sign in to continue
          </p> */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyUp={() => setError("")}
                className="bg-gray-100 dark:bg-gray-700 dark:text-white rounded-lg w-full p-3 focus:ring focus:ring-primary-500 outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="relative">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyUp={() => setError("")}
                  className="bg-gray-100 dark:bg-gray-700 dark:text-white rounded-lg w-full p-3 focus:ring focus:ring-primary-500 outline-none"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-500 dark:text-gray-300"
                  onClick={handleTogglePasswordVisibility}
                >
                  {isPasswordVisible ? (
                    <IoMdEye size={20} />
                  ) : (
                    <IoMdEyeOff size={20} />
                  )}
                </button>
              </div>
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-lg py-3 font-semibold transition ease-in-out duration-150"
            >
              Sign In
            </button>
          </form>
          <div className="mt-4 text-sm text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Don't have an account?{" "}
              <a href="/admin" className="text-primary-600 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
