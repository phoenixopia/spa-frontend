"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";

const URL = process.env.NEXT_PUBLIC_APP_URL;

interface Branch {
  id: string;
  name: string;
  address: string;
  phoneNumber: string | null;
  email: string | null;
  imageURL: string | null;
  status: string;
}

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  discount: string;
  duration: number;
  status: string;
  imageURL: string;
  branches: Branch[];
}

export default function Servicedetail() {
  const params = useParams();
  const id = params?.id as string;

  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("No service ID provided");
      setLoading(false);
      return;
    }

    const fetchService = async () => {
      try {
        const response = await axios.get<{ data: Service }>(`${URL}/service/${id}`);
        
        if (response.data?.data) {
          setService(response.data.data);
        } else {
          setError("No service data received");
        }
      } catch (err) {
        console.error("Error fetching service:", err);
        setError("Failed to load service. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  if (error) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-6 text-center text-red-500">
          {error}
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-600"></div>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          Service not found
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">
        {service.name}
      </h2>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* Service Image */}
        <div className="relative h-64 w-full">
          <Image
            src={service.imageURL || "/Images/ab.jpg"}
            alt={service.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="p-6">
          {/* Service Details */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>

          {/* Pricing Information */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Pricing</h3>
            <div className="flex items-center gap-4">
              <span className="font-bold text-2xl">${service.price}</span>
              {service.discount && (
                <span className="text-green-600">
                  {service.discount}% discount
                </span>
              )}
            </div>
            <p className="text-gray-500 mt-1">
              Duration: {service.duration} minutes
            </p>
          </div>

          {/* Branches */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Available at</h3>
            <div className="grid gap-4">
              {service.branches.map((branch) => (
                <div key={branch.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <h4 className="font-medium">{branch.name}</h4>
                  <p className="text-gray-600">{branch.address}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Button */}
          <div className="mt-6 text-center">
            <a href="/booking">
              <button className="bg-[#209747] text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition w-full max-w-xs">
                Book Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}