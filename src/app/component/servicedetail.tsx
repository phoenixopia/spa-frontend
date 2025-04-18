"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

const URL = process.env.NEXT_PUBLIC_APP_URL;

interface Service {
  id: string;
  name: string;
  price: string;
}

export default function Servicedetail() {
  const params = useParams();
  const id = params?.id as string; // Ensure `id` is treated as a string

  console.log("\n\nExtracted id:", id);

  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      console.log("\n\nNo id found.");
      return;
    }

    const fetchServicesByCategory = async () => {
      try {
        console.log(`Fetching from: ${URL}/service/search/category/${id}`);
        const response = await axios.get<{ data: Service[] }>(`${URL}/service/search/category/${id}`);
        
        if (Array.isArray(response.data.data)) {
          setServices(response.data.data);
        } else {
          console.error("Unexpected API response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching category services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServicesByCategory();
  }, [id]);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-lg font-semibold text-gray-900 text-center mb-4">
        Services in this Category
      </h2>

      <div className="bg-white shadow-md rounded-lg overflow-hidden py-4">
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-600"></div>
          </div>
        ) : services.length === 0 ? (
          <p className="text-center">No services found in this category.</p>
        ) : (
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-3 py-2">Service Name</th>
                  <th scope="col" className="px-3 py-2">Price</th>
                  <th scope="col" className="px-3 py-2 text-center">Book</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.id} className="border-b border-gray-200">
                    <td className="px-3 py-2 font-medium text-gray-900">
                      {service.name}
                    </td>
                    <td className="px-3 py-2">{service.price}</td>
                    <td className="px-3 py-2 text-center">
                      <a href ="/booking"> <button className="bg-[#209747] text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition">
                        Book Now
                      </button> </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
