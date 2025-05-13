import React from 'react'

const Footer2 = () => {
  return (
  <>
  <footer className="bg-white dark:bg-gray-900 mt-16 border-t border-gray-200 dark:border-gray-700">
  <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-md text-center">
      <strong className="block text-xl font-bold text-gray-900 sm:text-3xl dark:text-white">
        Want us to email you with the latest blockbuster news?
      </strong>

      <form className="mt-6">
        <div className="relative max-w-lg mx-auto">
          <label className="sr-only" htmlFor="email">Email</label>
          <input
            className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            id="email"
            type="email"
            placeholder="john@doe.com"
          />
          <button
            className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>

    <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
      <div>
        <p className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg dark:text-gray-400">
          Bringing you the best in tech and entertainment. Stay updated, stay ahead.
        </p>

        <div className="mt-6 flex justify-center gap-4 lg:justify-start">
          {/* Your existing social icons go here */}
          {/* Keep all <a> tags with icons as provided */}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 text-sm text-gray-500 dark:text-gray-400 sm:grid-cols-3">
        <div>
          <p className="font-medium text-gray-900 dark:text-white">Company</p>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:opacity-75">About</a></li>
            <li><a href="#" className="hover:opacity-75">Careers</a></li>
            <li><a href="#" className="hover:opacity-75">Press</a></li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-gray-900 dark:text-white">Support</p>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:opacity-75">Help Center</a></li>
            <li><a href="#" className="hover:opacity-75">Terms of Service</a></li>
            <li><a href="#" className="hover:opacity-75">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-gray-900 dark:text-white">Services</p>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:opacity-75">Consulting</a></li>
            <li><a href="#" className="hover:opacity-75">Development</a></li>
            <li><a href="#" className="hover:opacity-75">Design</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-12 border-t border-gray-100 pt-8 dark:border-gray-700">
      <p className="text-center text-xs text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} VinTech Solutions. All rights reserved.
      </p>
    </div>
  </div>
</footer>

  </>
   )
};

export default Footer2;