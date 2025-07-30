// NewsLetter.jsx
import React from "react";

const NewsLetterSupport = () => {
  return (
    <div className="bg-[#0b1c31] py-8 px-4 flex flex-col md:flex-row justify-center gap-6 text-white">
      {/* Subscribe Section */}
      <div className="border border-yellow-500 rounded-md p-6 w-full md:w-1/2 flex flex-col items-center">
        <h2 className="text-lg font-semibold text-yellow-400 mb-4">Stay Updated</h2>
        <div className="flex w-full max-w-md gap-2">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-2 rounded-md bg-white text-black focus:outline-none"
          />
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-full transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Support Section */}
      <div className="border border-yellow-500 rounded-md p-6 w-full md:w-1/2 text-center">
        <h2 className="text-lg font-semibold text-yellow-400 mb-2">Need Help?</h2>
        <p>
          Contact our support team at <br />
          <a
            href="mailto:support@mailinsight.com"
            className="text-blue-400 hover:underline"
          >
            support@mailinsight.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default NewsLetterSupport;
