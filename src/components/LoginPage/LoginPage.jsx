const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center px-4">
      <form
        className="bg-white rounded-3xl shadow-xl max-w-md w-full p-10"
        onSubmit={(e) => {
          e.preventDefault();
          // Add login logic here
          alert("Logging in...");
        }}
      >
        <h2 className="text-4xl font-extrabold text-teal-800 mb-8 text-center drop-shadow-md">
          Welcome Back
        </h2>

        <div className="mb-8">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-semibold text-teal-700"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
            className="w-full px-5 py-3 rounded-xl border border-teal-300 bg-teal-50 text-teal-900 placeholder-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
          />
        </div>

        <div className="mb-10">
          <label
            htmlFor="password"
            className="block mb-2 text-lg font-semibold text-teal-700"
          >
            Your Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
            className="w-full px-5 py-3 rounded-xl border border-teal-300 bg-teal-50 text-teal-900 placeholder-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-bold rounded-2xl py-3 shadow-lg shadow-teal-300/50 transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
