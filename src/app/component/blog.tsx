'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
const URL = process.env.NEXT_PUBLIC_APP_URL;

interface Blog {
  title: string;
  content: string;
  category?: string;
  publishedAt: string;
  imageURL: string;
  slug: string | null; // make this nullable for safety
}

export default function BlogSection() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get<{ data: Blog[] }>(`${URL}/blog`);
        console.log("API URL:", `${URL}/blog\n\n`);
        console.log(response.data, "\n\n");

        if (Array.isArray(response.data.data)) {
          setBlogs(response.data.data);
        } else {
          console.error("Unexpected API response:", response.data);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Blog Title */}
      <h2 className="text-3xl text-gray-800 font-bold text-center mb-15">Blog</h2>

      <div className="flex flex-col h-full border-gray-300 gap-20">
        {loading ? (
          Array.from({ length: 2 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row border flex-grow rounded-lg shadow-lg overflow-hidden bg-gray-200 animate-pulse"
            >
              <div className="bg-gray-300 px-4 md:rounded-none flex items-center justify-center md:w-1/3 flex-1 h-56 md:h-full"></div>
              <div className="flex flex-col justify-between py-3 px-4 leading-normal bg-gray-300 w-full md:w-2/3 flex-1">
                <p className="mb-2 text-xl font-bold tracking-tight text-gray-400">Loading...</p>
                <p className="mb-4 text-sm font-normal text-gray-400">Please wait while we fetch the latest blogs.</p>
                <p className="text-xs text-light text-gray-400 text-right mt-3">--/--/----</p>
              </div>
            </div>
          ))
        ) : (
          blogs.slice(0, 2).map((blog, index) => (
            <div
              key={blog.slug || `fallback-${index}`}
              className="flex flex-col md:flex-row border flex-grow rounded-lg shadow-lg overflow-hidden hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <div className="bg-[#209747] px-4 md:rounded-none flex items-center justify-center md:w-1/3 flex-1 h-auto md:h-full">
                <Image
                  className="object-cover w-full h-full"
                  src={blog.imageURL}
                  alt="Blog Image"
                  width={192}
                  height={0}
                  style={{ height: "100%" }}
                />
              </div>
              <div className="flex flex-col justify-between py-3 px-4 leading-normal bg-[#209747] w-full md:w-2/3 flex-1">
                <p className="mb-2 text-xl font-bold tracking-tight text-white">{blog.title}</p>
                <p className="mb-4 text-sm font-normal text-white">{blog.content}</p>
                <p className="text-xs text-light text-white text-right mt-3">
                  {new Date(blog.publishedAt).toISOString().split("T")[0]}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* See More Button */}
      <div className="flex justify-end mt-12">
        <Link
          href="/blogs"
          className="bg-[#209747] text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all flex items-center"
        >
          See More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="ml-2 h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
