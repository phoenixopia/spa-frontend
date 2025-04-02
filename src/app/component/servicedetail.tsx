import Image from "next/image";
import Link from "next/link";

export default function ProductTable() {
  const products = [
    { name: "Apple MacBook Pro 17\"", price: "$2999" },
    { name: "Microsoft Surface Pro", price: "$1999" },
    { name: "Magic Mouse 2", price: "$99" },
    { name: "Google Pixel Phone", price: "$799" },
    { name: "Apple Watch 5", price: "$999" },
    { name: "Apple MacBook Pro 17\"", price: "$2999" },
    { name: "Microsoft Surface Pro", price: "$1999" },
    { name: "Magic Mouse 2", price: "$99" },
    { name: "Google Pixel Phone", price: "$799" },
    { name: "Apple Watch 5", price: "$999" },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-4">
        Service List
      </h2>
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden py-4">
        {/* Image with margin */}
        <div className="flex justify-center mb-4">
          <Image
            src="/Images/mobile.jpeg"
            alt="Product Showcase"
            width={400}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-3 py-2">Product Name</th>
                <th scope="col" className="px-3 py-2">Price</th>
                <th scope="col" className="px-3 py-2 text-center">Book</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  key={index}
                  className={`border-b dark:border-gray-700 border-gray-200 ${
                    index % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800"
                  }`}
                >
                  <th scope="row" className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {product.name}
                  </th>
                  <td className="px-3 py-2">{product.price}</td>
                  <td className="px-3 py-2 text-center">
                    <Link href="/booking">
                      <button className="bg-[#633466] text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-700 transition">
                        Book Now
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
