"use client"
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

interface HeaderProps {
  total: string,
}

const ProductHeader: React.FC<HeaderProps> = ({ total }) => {

  const searchParams = useSearchParams();
  const searchUrl = searchParams.get("search");
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const router = useRouter();
  let query ="";
  let qstring = "search=" + search;
  query = new URLSearchParams(qstring).toString();

  const handleSumbit = () => {
    router.push("?" + query, { scroll: false, shallow: true });
  }

  const resetSearch = () => {
    router.push("/", { scroll: false, shallow: true });
    setSearch("");
  }

  return (
    <div>
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
              {searchUrl ? "Search Product":"Product List"}
            </h2>

            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
              {total} items
            </span>
          </div>
          {searchUrl &&
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">Showing search result of {searchUrl}.</p>
          }
        </div>

        <div className="flex items-center mt-4 gap-x-3">
          <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <span>Add product</span>
          </button>
        </div>
      </div>

      <div className="mt-6 md:flex md:items-center md:justify-between">
        <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">

        </div>

        <form action="" onSubmit={handleSumbit}>
          <div className="relative flex items-center mt-4 md:mt-0">
            <button type="submit" className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>

            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search"
              required
              name="search"
              value={search}
              className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />

            {searchUrl &&
            <button type="button" className="absolute right-0" onClick={resetSearch}>
              <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mx-3 text-gray-400 dark:text-gray-600">
                <g clipPath="url(#clip0_1222_37032)">
                  <path d="M13.5 0.5L0.5 13.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M0.5 0.5L13.5 13.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_1222_37032">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            }
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductHeader