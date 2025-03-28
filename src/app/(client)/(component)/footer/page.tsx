import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-white shadow-sm dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 py-6 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <a href="/" className="hover:underline hover:text-pink-500">
            Spa Haven™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 md:mt-0 text-sm font-medium text-gray-500 dark:text-gray-400">
          {[
            { name: "About", link: "/aboutus" },
            { name: "Privacy Policy", link: "/" },
            { name: "Licensing", link: "/" },
            { name: "Contact", link: "/contactus" }, 
          ].map((item, index) => (
            <li key={index}>
              <Link 
                href={item.link} 
                className="mx-4 px-3 py-1 rounded-lg transition-colors duration-300 
                           hover:bg-pink-200 hover:text-pink-700"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
