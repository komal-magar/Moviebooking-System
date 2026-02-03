const Register = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <div className="bg-white p-6 rounded w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Register</h2>

        <input className="w-full border p-2 mb-3" placeholder="Name" />
        <input className="w-full border p-2 mb-3" placeholder="Email" />
        <input className="w-full border p-2 mb-4" placeholder="Password" />

        <button className="w-full bg-red-500 text-white py-2 rounded">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
