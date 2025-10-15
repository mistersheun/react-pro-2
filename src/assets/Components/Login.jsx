import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // 🚀 Directly go to dashboard without any checks
    navigate("/Dashbourd");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <motion.div
        className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 w-full max-w-md"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Mistersheun Login
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="text"
            name="username"
            placeholder="Enter any username"
            required
            className="p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter any password"
            required
            className="p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-lg shadow hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </motion.div>
    </div>
  );
}