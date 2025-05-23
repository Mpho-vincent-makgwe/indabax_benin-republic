import React from 'react';

const Footer2 = () => {
  return (
    <footer className="bg-gray-100  mt-16 border-t border-gray-300 ">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <strong className="block text-xl font-bold text-gray-900 sm:text-3xl ">
            Stay in the loop with IndabaX BJ updates
          </strong>

          <form className="mt-6">
            <div className="relative max-w-lg mx-auto">
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-full border-gray-300 bg-gray-200 p-4 pe-32 text-sm font-medium "
                id="email"
                type="email"
                placeholder="indaba@deepmind.com"
              />
              <button
                className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-green-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-700"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div>
            <p className="mt-4 text-center text-gray-600 lg:text-left lg:text-lg ">
              IndabaX BJ is committed to empowering local talent through AI education, community building, and innovation. Join us and be part of the next AI revolution in Botswana!
            </p>

            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              {/* Insert social icons here */}
              {/* Example:
              <a href="https://twitter.com/indabaXBotswana" className="text-gray-500 hover:text-green-600">
                <TwitterIcon />
              </a>
              */}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm text-gray-600 dark:text-gray-400 sm:grid-cols-3">
            <div>
              <p className="font-medium text-gray-900 ">About</p>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:opacity-75">Who We Are</a></li>
                <li><a href="#" className="hover:opacity-75">Our Mission</a></li>
                <li><a href="#" className="hover:opacity-75">Team</a></li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900 dark:text-white">Events</p>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:opacity-75">Upcoming</a></li>
                <li><a href="#" className="hover:opacity-75">Past Highlights</a></li>
                <li><a href="#" className="hover:opacity-75">Partner with Us</a></li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900 dark:text-white">Contact</p>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:opacity-75">Get in Touch</a></li>
                <li><a href="#" className="hover:opacity-75">FAQs</a></li>
                <li><a href="#" className="hover:opacity-75">Support</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 ">
          <p className="text-center text-xs text-gray-500 ">
            &copy; {new Date().getFullYear()} IndabaX Botswana Junior. Empowering the next generation of AI leaders.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
