import Link from "next/link";

export default function BlogSection() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="space-y-20 divide-y-2 divide-gray-100">
          {[
            {
              title: "Relaxing Aromatherapy Massage",
              date: "12 Jun 2019",
              category: "Wellness",
              description:
                "60-minute aromatherapy massage designed to relieve stress and promote relaxation.",
              availableSeats: 10,
              price: "$70.00",
              imgSrc: "/images/mobile.jpeg", // Use actual image path
            },
            {
              title: "Healing Swedish Massage",
              date: "12 Jun 2019",
              category: "Wellness",
              description:
                "A 60-minute Swedish massage to promote relaxation and improve circulation.",
              availableSeats: 8,
              price: "$80.00",
              imgSrc: "/images/mobile.jpeg", // Use actual image path
            },
            {
              title: "Deep Tissue Massage",
              date: "12 Jun 2019",
              category: "Therapy",
              description:
                "90-minute deep tissue massage focusing on muscle knots and tension.",
              availableSeats: 5,
              price: "$90.00",
              imgSrc: "/images/mobile.jpeg", // Use actual image path
            },
          ].map((item, index) => (
            <div
              key={index}
              className="py-8 mx-40 flex flex-wrap md:flex-nowrap transition-shadow duration-300"
              style={{
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(255, 105, 180, 0.3)", // Custom pink shadow
              }}
            >
              {/* Image Section */}
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col items-center px-6">
                <img
                  alt="spa"
                  className="w-full h-48 object-cover object-center rounded-lg mb-4"
                  src={item.imgSrc}
                />
                <span className="font-semibold title-font text-gray-700">{item.category}</span>
                <span className="mt-1 text-gray-500 text-sm">{item.date}</span>
              </div>

              {/* Content Section */}
              <div className="md:flex-grow px-6">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  {item.title}
                </h2>
                <p className="leading-relaxed mb-4">{item.description}</p>

                {/* Available Seats & Price */}
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-gray-700 font-semibold">Available Seats: {item.availableSeats}</span>
                  <span className="text-gray-900 text-xl font-medium">{item.price}</span>
                </div>

                {/* Book Now Button */}
                <Link
                  href="/booking"
                  className="bg-pink-500 text-white py-2 px-6 rounded hover:bg-pink-600 transition"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
