const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <div className="bg-white p-6 rounded w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4"
        />

        <button className="w-full bg-red-500 text-white py-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
