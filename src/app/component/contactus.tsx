"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [rating, setRating] = useState<number>(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const URL = process.env.NEXT_PUBLIC_APP_URL;

  const handleEmailBlur = async () => {
    try {
      interface ReviewResponse {
        exists: boolean;
      }
      const response = await axios.get<ReviewResponse>(`${URL}/review?email=${email}`);
      if (response.data.exists) {
        setAlreadySubmitted(true);
        setFeedbackMessage("You’ve already submitted your review.");
        setIsSuccess(false);
      } else {
        setAlreadySubmitted(false);
        setFeedbackMessage("");
      }
    } catch (error) {
      console.error("Error checking email submission", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (alreadySubmitted) return;

    try {
      await axios.post(`${URL}/review/create`, {
        email,
        subject,
        message,
        rating: rating.toString(),
      });
      setFeedbackMessage("Thanks for your feedback!");
      setIsSuccess(true);
      setEmail("");
      setSubject("");
      setMessage("");
      setRating(0);
      setAlreadySubmitted(true);
    } catch (err: any) {
      console.error("Review submission failed", err);

      if (err.response?.data?.message === "A review already exists.") {
        setFeedbackMessage("You’ve already submitted your review.");
        setAlreadySubmitted(true);
      } else {
        setFeedbackMessage("Something went wrong. Please try again.");
      }

      setIsSuccess(false);
    }
  };

  return (
    <div className="w-80 bg-[#98439D] rounded-2xl shadow-lg mt-4 p-6 md:mt-8">
      <h2 className="text-xl font-bold text-center text-white mb-3">
        Share your experience
      </h2>
      <p className="text-xl font-bold text-center text-white mb-3">
        How would you rate us?
      </p>

      {/* Rating stars */}
      <div className="flex justify-center mb-5">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(null)}
            className={`w-6 h-6 mx-1 cursor-pointer transition-colors duration-200 ${
              star <= (hovered ?? rating) ? "text-[#FF7DF6]" : "text-gray-300"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
      </div>

      {!alreadySubmitted && (
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailBlur}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
            placeholder="Email"
            required
          />
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
            placeholder="Subject"
            required
          />
          <textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
            placeholder="Message"
            required
          />
          <button
            type="submit"
            className="w-full py-2 text-white font-medium bg-[#FF7DF6] rounded-md hover:bg-purple-600 focus:ring-4 focus:ring-purple-300"
          >
            Send Message
          </button>
        </form>
      )}

      {feedbackMessage && (
        <p
          className={`text-center mt-3 ${
            isSuccess ? "text-green-400" : "text-red-500"
          }`}
        >
          {feedbackMessage}
        </p>
      )}
    </div>
  );
};

export default ContactUs;
