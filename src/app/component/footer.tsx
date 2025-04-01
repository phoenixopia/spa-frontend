// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import ContactUs from './contactus';

const Footer = () => {
  return (
    
    <footer className="bg-[#633466] text-white py-2">
      
      <div className="max-w-7xl mx-auto mb-4 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Footer Logo or Brand Name */}
          <div className="mb-4 md:mb-0">
            <p className="py-2">Copyright &copy;  2025</p>
                      <p className='mb-10'>All Rights Reserved.</p>

     {/* Footer Social Icons */}
<div className="flex space-x-6 mt-8 md:my-4">
  {/* Facebook Icon */}
  <span className="h-6 w-6 flex items-center justify-center">
    <svg
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 320 512"
    >
      <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
    </svg>
  </span>

  {/* Instagram Icon */}
  <span className="h-6 w-6 flex items-center justify-center">
    <svg
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 448 512"
    >
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
  </span>

  {/* Google Icon */}
  <span className="h-6 w-6 flex items-center justify-center">
    <svg
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 488 512"
    >
      <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
    </svg>
  </span>
</div>

          </div>

          {/* Footer Links */}
<div className="flex flex-col space-y-2 mt-4 md:my-8">
  <Link href="/about" className="text-white hover:text-gray-300">About</Link>
  <Link href="/services" className="text-white hover:text-gray-300">Services</Link>
  <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
  <Link href="/privacy" className="text-white hover:text-gray-300">Privacy Policy</Link>
</div>


<div className='flex flex-col space-y-4 md:my-10'>
<div className="flex items-center space-x-2">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth ="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
  <span>example@email.com</span>
</div>

<div className="flex items-center space-x-2">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth ="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
  </svg>
  <span>+1 234 567 890</span>
</div>

</div>
<ContactUs />

        </div>



        
      </div>

    </footer>
  );
};

export default Footer;
