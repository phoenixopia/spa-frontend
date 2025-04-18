// "use client";

// import { useState } from 'react';
// import { Rating } from '@material-tailwind/react';

// const ContactUs = () => {
//   const [value, setValue] = useState<number | undefined>(undefined);

//   return (
//       <div className="w-80 bg-[#98439D] rounded-2xl shadow-lg mt-5 p-6 md:mt-8">
//                 <h2 className="text-xl font-bold text-center text-white mb-3">Share your experience</h2>
//                 <p className="text-xl font-bold text-center text-white mb-3">How would you rate us?</p>


// {/* rating */}
//                  <div className="flex flex-col items-center gap-4">
//                  <div className="flex mb-5 items-center">
//       {[...Array(4)].map((_, index) => (
//         <svg
//           key={index}
//           className="w-4 h-4 text-[#FF7DF6] ms-1"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="currentColor"
//           viewBox="0 0 22 20"
//         >
//           <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//         </svg>
//       ))}
//       <svg
//         className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
//         aria-hidden="true"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="currentColor"
//         viewBox="0 0 22 20"
//       >
//         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//       </svg>
//     </div>

//         </div>
//         <form action="#" className="space-y-3">
//           <div>
//             <input 
//               type="email" 
//               className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" 
//               placeholder="Email" 
//               required 
//             />
//           </div>
//           <div>
//             <input 
//               type="text" 
//               className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" 
//               placeholder="Subject" 
//               required 
//             />
//           </div>
//           <div>
//             <textarea 
//               rows={3} 
//               className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" 
//               placeholder="Message" 
//               required 
//             />
//           </div>
//           <button 
//             type="submit" 
//             className="w-full py-2 text-white font-medium bg-[#FF7DF6] rounded-md hover:bg-purple-700 focus:ring-4 focus:ring-purple-300"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//   );
// };

// export default ContactUs;