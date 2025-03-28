"use client";

const BookingPage = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-brown-100 dark:bg-brown-900 px-6 md:px-8 py-8 md:py-12">
      <div className="max-w-lg w-full bg-pink-100 dark:bg-pink-200 rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-3xl font-extrabold text-center text-brown-700 dark:text-brown-100 mb-6">Book Your Spa Appointment</h2>
        <p className="text-center text-brown-600 dark:text-brown-300 mb-8">
          Schedule your spa treatment with us. We look forward to serving you!
        </p>
        <form action="#" className="space-y-6">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-brown-700 dark:text-brown-100">Your Name</label>
            <input 
              type="text" 
              className="w-full p-3 border border-brown-300 rounded-lg shadow-sm focus:ring-brown-500 focus:border-brown-500 dark:bg-brown-800 dark:border-brown-600 dark:text-brown-100" 
              placeholder="Enter your full name" 
              required 
            />
          </div>

          {/* Phone Number Input */}
          <div>
            <label className="block text-sm font-medium text-brown-700 dark:text-brown-100">Phone Number</label>
            <input 
              type="tel" 
              className="w-full p-3 border border-brown-300 rounded-lg shadow-sm focus:ring-brown-500 focus:border-brown-500 dark:bg-brown-800 dark:border-brown-600 dark:text-brown-100" 
              placeholder="Enter your phone number" 
              required 
            />
          </div>

          {/* Calendar Input */}
          <div>
            <label className="block text-sm font-medium text-brown-700 dark:text-brown-100">Select Date</label>
            <input 
              type="date" 
              className="w-full p-3 border border-brown-300 rounded-lg shadow-sm focus:ring-brown-500 focus:border-brown-500 dark:bg-brown-800 dark:border-brown-600 dark:text-brown-100" 
              required 
            />
          </div>

          {/* Time Selection Input */}
          <div>
            <label className="block text-sm font-medium text-brown-700 dark:text-brown-100">Select Time</label>
            <input 
              type="time" 
              className="w-full p-3 border border-brown-300 rounded-lg shadow-sm focus:ring-brown-500 focus:border-brown-500 dark:bg-brown-800 dark:border-brown-600 dark:text-brown-100" 
              required 
            />
          </div>

          {/* Dropdown for Spa Services */}
          <div>
            <label className="block text-sm font-medium text-brown-700 dark:text-brown-100">Select Service</label>
            <select 
              className="w-full p-3 border border-brown-300 rounded-lg shadow-sm focus:ring-brown-500 focus:border-brown-500 dark:bg-brown-800 dark:border-brown-600 dark:text-brown-100" 
              required
            >
              <option value="">Choose a service...</option>
              <option value="facial">Facial</option>
              <option value="massage">Massage</option>
              <option value="mani_pedi">Manicure & Pedicure</option>
              <option value="hair_treatment">Hair Treatment</option>
              <option value="sauna">Sauna</option>
            </select>
          </div>

          {/* Book Now Button */}
          <button 
            type="submit" 
            className="w-full py-3 text-white font-medium bg-pink-500 rounded-lg hover:bg-brown-800 focus:ring-4 focus:ring-brown-300 dark:bg-brown-600 dark:hover:bg-brown-700 dark:focus:ring-brown-800"
          >
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingPage;
