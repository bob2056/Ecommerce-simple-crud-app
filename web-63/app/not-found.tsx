import Link from "next/link";
import "./globals.css"

export default function NotFound(){
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-8xl font-extrabold text-secondary drop-shadow mb-2">
          404
        </h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-500 mb-8">
          Oops! The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-secondary text-white rounded-md font-semibold text-lg shadow hover:bg-secondary/90 transition-colors"
        >
          Go back Home
        </Link>
      </div>
    </>
  );
}