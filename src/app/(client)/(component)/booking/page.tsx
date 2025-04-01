"use client";

import Footer from "../footer/page";
import MapPage from "../map/page";

const BookingPage = () => {
  return (
    <div><h2 className="text-3xl font-extrabold text-center text-black mb-6">
    Reservation
  </h2>
  <section className="flex items-center justify-center min-h-screen bg-brown-100 dark:bg-brown-900 px-6 md:px-8 py-8 md:py-12">
      <div className="max-w-lg w-full bg-[#633466] rounded-2xl shadow-lg p-6 md:p-8">
        
        <p className="text-center text-white mb-8">
          Book your reservation here
        </p>
        <form action="#" className="space-y-6">
          {/* First Name & Last Name in One Row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white">First Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-white focus:border-white bg-[#814589] text-white"
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Last Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-white focus:border-white bg-[#814589] text-white"
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          {/* Phone Number Input */}
          <div>
            <label className="block text-sm font-medium text-white">Phone Number</label>
            <input
              type="tel"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-white focus:border-white bg-[#814589] text-white"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Calendar Input */}
          <div>
            <label className="block text-sm font-medium text-white">Select Date</label>
            <input
              type="date"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-white focus:border-white bg-[#814589] text-white"
              required
            />
          </div>

          {/* Time Selection Input */}
          <div>
            <label className="block text-sm font-medium text-white">Select Time</label>
            <input
              type="time"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-white focus:border-white bg-[#814589] text-white"
              required
            />
          </div>

          {/* Dropdown for Spa Services */}
          <div>
            <label className="block text-sm font-medium text-white">Select Service</label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-white focus:border-white bg-[#814589] text-white"
              required
            >
              <option value="">Choose Services</option>
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
            className="w-full py-3 text-white font-medium bg-[#9C26A3] rounded-lg hover:bg-[#7A1E7E] focus:ring-4 focus:ring-pink-300"
          >
            Book Now
          </button>
        </form>
      </div>
    </section>
    <MapPage />
    <Footer />
  </div>
   
  );
};

export default BookingPage;
