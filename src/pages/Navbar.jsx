import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold text-red-500">MovieBooking</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-red-400 font-medium">
          Home
        </Link>
        <Link to="/movies" className="hover:text-red-400 font-medium">
          Movies
        </Link>
        <Link to="/booking" className="hover:text-red-400 font-medium">
          My Booking
        </Link>
        <Link
          to="/login"
          className="bg-red-500 px-4 py-1 rounded hover:bg-red-600 transition duration-300"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
