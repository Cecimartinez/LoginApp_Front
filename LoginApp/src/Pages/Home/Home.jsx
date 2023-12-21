import { Link } from 'react-router-dom';
export const Home = () => {
  return (
    <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
      <h1 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
        Hello World! 🌎
        <span className="block text-indigo-500">
          Explore Your New Favorite Login
        </span>
        <span className="block text-indigo-500">
          and Discover a Unique Experience ✨         </span>
      </h1>
      <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
        Unlock an exciting world with our simple and secure Login App. Your digital presence has never been easier and more thrilling! 🚀        </p>
      <div className="lg:mt-0 lg:flex-shrink-0">
        <div className="mt-12 inline-flex rounded-md shadow">
          <Link to="/login" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            Get started
          </Link>
        </div>
      </div>
    </div>
  )
}