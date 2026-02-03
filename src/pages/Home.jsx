import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col justify-center items-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
        Welcome to Movie Booking 🎬
      </h1>
      <p className="text-gray-300 text-lg md:text-xl mb-8 text-center max-w-xl">
        Book your favorite movies easily and enjoy the show from the comfort of your home.
      </p>
      <Link
        to="/movies"
        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded shadow-lg transition duration-300"
      >
        Browse Movies
      </Link>
    </div>
  );
};

export default Home;
