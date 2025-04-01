'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { header } from "framer-motion/client";
const URL = process.env.NEXT_PUBLIC_APP_URL;

interface Blog {
  title: string;
  description: string;
  category?: string;
  date: string;
  slug: string;
}

export default function BlogSection() {

  return (
    <header>
      <div className="max-w-4xl mx-auto p-6">
        {/* Blog Title */}
        <h2 className="text-3xl font-bold text-center mt-15">Blog</h2>
      </div>
    </header>
  );
}
