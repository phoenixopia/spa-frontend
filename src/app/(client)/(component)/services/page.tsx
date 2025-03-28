import Link from "next/link";

export default function Services() {
  return (
    <section className="text-pink-600 body-font py-24">
      <div className="container px-15 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-pink-700">Our Spa Services</h1>
          <p className="mt-2 text-pink-500">
            Experience relaxation and rejuvenation with our premium spa services.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {services.map((service, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-pink-200 text-pink-700 mb-4 text-3xl">
                    {service.icon}
                  </div>
                  <h2 className="text-lg font-medium text-gray-900 mb-2">{service.title}</h2>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{service.category}</h3>
                  <p className="text-pink-500">{service.description}</p>
                  <p className="mt-4 text-gray-900 font-semibold">{service.price}</p>
                </div>
                
                {/* Check Availability Button */}
                <Link href="/booking">
                  <button className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300">
                    Check Availability
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: "🛁",
    title: "Aromatherapy Massage",
    description: "Relax your muscles and calm your mind with a soothing aromatherapy massage using essential oils.",
    category: "Massage",
    price: "Birr 80.00"
  },
  {
    icon: "💆‍♀️",
    title: "Facial Treatment",
    description: "Revitalize your skin with a deep-cleansing facial, tailored to your skin type for a glowing complexion.",
    category: "Skincare",
    price: "Birr 100.00"
  },
  {
    icon: "🌿",
    title: "Herbal Steam Bath",
    description: "Detoxify your body and promote relaxation with an herbal steam bath, packed with natural healing benefits.",
    category: "Detox",
    price: "Birr 60.00"
  },
  {
    icon: "💅",
    title: "Manicure & Pedicure",
    description: "Pamper your hands and feet with a relaxing manicure and pedicure, leaving your nails smooth and polished.",
    category: "Nail Care",
    price: "Birr 50.00"
  },
  {
    icon: "🛁",
    title: "Aromatherapy Massage",
    description: "Relax your muscles and calm your mind with a soothing aromatherapy massage using essential oils.",
    category: "Massage",
    price: "Birr 80.00"
  },
  {
    icon: "💆‍♀️",
    title: "Facial Treatment",
    description: "Revitalize your skin with a deep-cleansing facial, tailored to your skin type for a glowing complexion.",
    category: "Skincare",
    price: "Birr 100.00"
  },
  {
    icon: "🌿",
    title: "Herbal Steam Bath",
    description: "Detoxify your body and promote relaxation with an herbal steam bath, packed with natural healing benefits.",
    category: "Detox",
    price: "Birr 60.00"
  },
  {
    icon: "💅",
    title: "Manicure & Pedicure",
    description: "Pamper your hands and feet with a relaxing manicure and pedicure, leaving your nails smooth and polished.",
    category: "Nail Care",
    price: "Birr 50.00"
  }
];
