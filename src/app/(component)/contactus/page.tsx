"use client";

const ContactUs = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-brown-100 dark:bg-brown-900 px-4">
      <div className="max-w-lg w-full bg-pink-100 dark:bg-pink-200 rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-extrabold text-center text-brown-700 dark:text-brown-800 mb-4">Contact Us</h2>
        <p className="text-center text-brown-600 dark:text-brown-700 mb-6">
          Have any questions or feedback? We’d love to hear from you!
        </p>
        <form action="#" className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-brown-700 dark:text-brown-800">Your email</label>
            <input 
              type="email" 
              className="w-full p-3 border border-brown-300 rounded-lg shadow-sm focus:ring-brown-500 focus:border-brown-500 dark:bg-white dark:border-brown-400 dark:text-brown-800" 
              placeholder="name@example.com" 
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-brown-700 dark:text-brown-800">Subject</label>
            <input 
              type="text" 
              className="w-full p-3 border border-brown-300 rounded-lg shadow-sm focus:ring-brown-500 focus:border-brown-500 dark:bg-white dark:border-brown-400 dark:text-brown-800" 
              placeholder="How can we help you?" 
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-brown-700 dark:text-brown-800">Your message</label>
            <textarea 
              rows={4} 
              className="w-full p-3 border border-brown-300 rounded-lg shadow-sm focus:ring-brown-500 focus:border-brown-500 dark:bg-white dark:border-brown-400 dark:text-brown-800" 
              placeholder="Write your message here..." 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-3 text-white font-medium bg-pink-500 rounded-lg hover:bg-brown-800 focus:ring-4 focus:ring-brown-300 dark:bg-brown-600 dark:hover:bg-brown-700 dark:focus:ring-brown-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
