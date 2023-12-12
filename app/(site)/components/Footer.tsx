'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
interface HeaderProps {
  pages: number | undefined,
}

const Footer: React.FC<HeaderProps> = ({ pages }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchUrl = searchParams.get("search");
  const category = searchParams.get("category");
  const totalPages = [...Array(pages)].map((_, i) => i + 1);
  const [currPage, setCurrPage] = useState(1);
  const goToPage = (p: number) => {
    setCurrPage(p);
    var query;
    var qstring = "";
    if (searchUrl) {
      if (p != 1) {
        qstring = "search="+searchUrl+"&page=" + p;
      } else {
        qstring = "search=" + searchUrl;
      }
    } else if(category){
      if (p != 1) {
        qstring = "category=" + category + "&page=" + p;
      } else {
        qstring = "category=" + category;
      }
    } else {
      if (p != 1) {
        qstring = "page=" + p;
      } else {
        qstring = "";
      }
    }
    query = new URLSearchParams(qstring).toString();
    router.push('?' + query, { scroll: false });
  };

  useEffect(() => {
    setCurrPage(Number(searchParams.get("page")) || 1)
    return () => {
    }
  }, [searchParams])
  

  return (
    <div data-testid="footer" className="mt-6 sm:flex sm:items-center sm:justify-between ">
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Page <span className="font-medium text-gray-700 dark:text-gray-100">{currPage} of {pages}</span>
      </div>

      <div className="flex items-center mt-4 sm:mt-0">
        <button
          disabled={currPage === 1 ? true : false}
          onClick={() => goToPage(currPage - 1)}
          className={`flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-l-md sm:w-auto ${currPage === 1 ? 'opacity-50' : 'hover:bg-gray-100 dark:hover:bg-gray-800'} gap-x-2  dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 `}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>
          <span>
            previous
          </span>
        </button>
        <div className="md:flex hidden">
          {totalPages.map((page) => (
            <button
              disabled={currPage === page ? true : false}
              onClick={() => goToPage(page)}
              className={`flex items-center justify-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 border ${currPage === page ? "bg-grey-200" : "bg-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-800"} dark:text-gray-200 sm:w-auto gap-x-2`}
              key={page}
            >{page}
            </button>
          ))}
        </div>
        <button
          disabled={currPage === pages ? true : false}
          onClick={() => goToPage(currPage + 1)}
          className={`flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-r-md sm:w-auto ${currPage === pages ? 'opacity-50' : 'hover:bg-gray-100 dark:hover:bg-gray-800'} gap-x-2 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 `}>
          <span>
            Next
          </span>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Footer