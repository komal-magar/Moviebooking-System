const MyBookings = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">My Booking</h2>

      <div className="bg-white p-4 rounded shadow">
        <p>Movie: Avengers</p>
        <p>Seat: A5</p>
        <p>Price: NPR 500</p>

        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default MyBookings;
