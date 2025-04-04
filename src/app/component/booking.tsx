"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Footer from "../component/footer";
import MapPage from "../component/map";

const URL = process.env.NEXT_PUBLIC_APP_URL;

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  imageURL?: string;
}

const BookingPage = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    date: "",
    time: "",
    serviceId: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const router = useRouter();

  // Fetch services on mount
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get<{ data: Service[] }>(`${URL}/service`);
        setServices(response.data.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching services:", error);
        setErrorMessage("Failed to load services. Please try again later.");
      }
    };

    fetchServices();
  }, []);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle phone number input with validation
  const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;

    // Validate: starts with 9 and up to 9 digits
    const isValid = /^9\d{0,8}$/.test(input);

    setFormData({ ...formData, phoneNumber: input });
    setPhoneNumberError(!isValid);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    const { firstName, lastName, phoneNumber, date, time, serviceId } = formData;

    if (!firstName || !lastName || !phoneNumber || !date || !time || !serviceId) {
      setErrorMessage("Please fill out all fields.");
      setLoading(false);
      return;
    }

    if (phoneNumberError) {
      setErrorMessage("Invalid phone number.");
      setLoading(false);
      return;
    }

    try {
      const dateTime = new Date(`${date}T${time}`).toISOString();

      const payload = {
        firstName,
        lastName,
        phoneNumber,
        serviceId,
        dateTime,
      };

      console.log("\n\n payload\n", payload);

      const response = await axios.post(`${URL}/booking/create`, payload);
      console.log("Response:", response.status, response.data);

      if (response.status === 201) {
        alert("Your booking has been confirmed!");
        router.push("/thankyou");
      } else {
        throw new Error("Booking failed");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      setErrorMessage("Failed to book. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div>
      <h2 className="text-3xl font-extrabold text-center text-[#717171] mb-6">Reservation</h2>

      <section className="flex items-center justify-center min-h-screen bg-brown-100 dark:bg-brown-900 px-6 md:px-8 py-8 md:py-12">
        <div className="max-w-lg w-full bg-[#633466] rounded-2xl shadow-lg p-6 md:p-8">
          <p className="text-center text-white mb-8">Book your reservation here</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white">First Name</label>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName} 
                  onChange={handleChange} 
                  className="w-full p-3 rounded-lg shadow-sm bg-[#814589] text-white" 
                  placeholder="First Name" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Last Name</label>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName} 
                  onChange={handleChange} 
                  className="w-full p-3 rounded-lg shadow-sm bg-[#814589] text-white" 
                  placeholder="Last Name" 
                  required 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white">Phone Number</label>
              <div className="flex items-center space-x-2">
                <span className="text-white bg-[#814589] px-3 py-3 rounded-l-lg border border-gray-400">+251</span>
                <input 
                  type="tel" 
                  name="phoneNumber"
                  value={formData.phoneNumber} 
                  onChange={handlePhoneNumberChange}
                  pattern="9[0-9]{8}" 
                  maxLength={9}
                  className="w-full p-3 rounded-r-lg shadow-sm bg-[#814589] text-white border border-gray-400" 
                  placeholder="9xxxxxxxx" 
                  required 
                />
              </div>
              {phoneNumberError && (
                <p className="text-red-400 text-sm mt-1">Phone number must start with 9 and be 9 digits long.</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-white">Select Date</label>
              <input 
                type="date" 
                name="date"
                value={formData.date} 
                onChange={handleChange} 
                className="w-full p-3 rounded-lg shadow-sm bg-[#814589] text-white" 
                required 
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">Select Time</label>
              <input 
                type="time" 
                name="time"
                value={formData.time} 
                onChange={handleChange} 
                className="w-full p-3 rounded-lg shadow-sm bg-[#814589] text-white" 
                required 
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">Select Service</label>
              <select 
                name="serviceId"
                value={formData.serviceId} 
                onChange={handleChange} 
                className="w-full p-3 rounded-lg shadow-sm bg-[#814589] text-white" 
                required
              >
                <option value="">Choose a Service</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>

            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}

            <button 
              type="submit" 
              className="w-full py-3 text-white font-medium bg-[#9C26A3] rounded-lg hover:bg-purple-600"
              disabled={loading}
            >
              {loading ? "Booking..." : "Book Now"}
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
