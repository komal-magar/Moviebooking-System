import { Link } from "react-router-dom";

const Movies = () => {
  const movies = [
    { id: 1, title: "Avengers", genre: "Action" },
    { id: 2, title: "Inception", genre: "Sci-Fi" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Now Showing</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{movie.title}</h3>
            <p className="text-gray-600">{movie.genre}</p>

            <Link
              to={`/movies/${movie.id}`}
              className="inline-block mt-3 bg-red-500 text-white px-4 py-1 rounded"
            >
              Book Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
