"use client";

import { useState } from 'react';
import { Rating } from '@material-tailwind/react';

const ContactUs = () => {
  const [value, setValue] = useState<number | undefined>(undefined);

  return (
      <div className="w-80 bg-[#98439D] rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-center text-white mb-3">Share your experience</h2>
                <p className="text-xl font-bold text-center text-white mb-3">How would you rate us?</p>

                <div className="flex flex-col items-center gap-4">
      <Rating
        value={value}
        onChange={(newValue) => setValue(newValue)}
        unratedColor="pink"
        ratedColor="purple"
        placeholder="Rate us"
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      />
        </div>
        <form action="#" className="space-y-3">
          <div>
            <input 
              type="email" 
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" 
              placeholder="Email" 
              required 
            />
          </div>
          <div>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" 
              placeholder="Subject" 
              required 
            />
          </div>
          <div>
            <textarea 
              rows={3} 
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" 
              placeholder="Message" 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-2 text-white font-medium bg-purple-600 rounded-md hover:bg-purple-700 focus:ring-4 focus:ring-purple-300"
          >
            Send Message
          </button>
        </form>
      </div>
  );
};

export default ContactUs;