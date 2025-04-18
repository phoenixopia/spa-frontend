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
  imageURL?: string;
  slug: string;
}

export default function Blogs() {
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
      <h2 className="text-3xl text-gray-800 font-bold text-center mb-12">Blogs</h2>

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
          blogs.slice(0, 2).map((blog) => (
            <div
              key={blog.slug}
              className="flex flex-col md:flex-row border flex-grow rounded-lg shadow-lg overflow-hidden hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <div className="bg-[#209747] px-4 md:rounded-none flex items-center justify-center md:w-1/3 flex-1 h-auto md:h-full">
                <Image
                  className="object-cover w-full h-full"
                  src={blog.imageURL || "/Images/default.png"}
                  alt="Blog Image"
                  width={192}
                  height={0}
                  style={{ height: "100%" }}
                />
              </div>
              <div className="flex flex-col justify-between py-2 px-4 leading-normal bg-[#209747] w-full md:w-2/3 flex-1">
                <p className="mb-1 text-xl font-bold tracking-tight text-white">{blog.title}</p>
                <p className="mb-3 text-sm font-normal text-white">{blog.content}</p>
                <p className="text-xs text-light text-white text-right mt-3">{new Date(blog.publishedAt).toISOString().split("T")[0]}</p>
              </div>
            </div>
          ))
        )}
      </div>

      
    </div>
  );
}
