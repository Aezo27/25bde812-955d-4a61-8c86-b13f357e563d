"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SearchProps {
  search?: string,
}

const Search: React.FC<SearchProps> = ({search}) => {
  const [isSearch, setIsSearch] = useState(search || "");

  const router = useRouter();
  let query = "";
  let qstring = "search=" + isSearch;
  query = new URLSearchParams(qstring).toString();

  const handleSumbit = (e:any) => {
    e.preventDefault()
    router.push("?" + query, { scroll: false, shallow: true });
  }

  const resetSearch = () => {
    router.push("/", { scroll: false, shallow: true });
    setIsSearch("");
  }

  return (
    <form onSubmit={handleSumbit}>
      <div className="relative flex items-center mt-4 md:mt-0">
        <button aria-label="Search Product" type="submit" className="absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>

        <input
          onChange={(e) => setIsSearch(e.target.value)}
          type="text"
          placeholder="Search"
          required
          name="search"
          value={isSearch}
          className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-gray-700 focus:ring-blue-300 dark:focus:ring-gray-700 focus:outline-none focus:ring focus:ring-opacity-40"
        />

        {search && (
          <button
            type="button"
            className="absolute right-0"
            onClick={resetSearch}
          >
            <svg
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 mx-3 text-gray-400 dark:text-gray-500"
            >
              <g clipPath="url(#clip0_1222_37032)">
                <path
                  d="M13.5 0.5L0.5 13.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.5 0.5L13.5 13.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1222_37032">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        )}
      </div>
    </form>
  );
}
 
export default Search;