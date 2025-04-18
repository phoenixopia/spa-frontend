import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 rounded-2xl shadow-lg bg-[#209747] text-center flex flex-col items-center">
        <CheckCircle className="text-green-500 w-12 h-12 mb-2" />
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Successfully Booked</h1>
        <Link href="/">
          <button className="mt-4 py-2 px-6 bg-[#209747] text-white rounded-lg border-2 border-white hover:bg-green-700">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
