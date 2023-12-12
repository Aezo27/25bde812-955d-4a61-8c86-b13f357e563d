"use client"

import { getCategories } from "@/utils/data/api";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface CategoryProps {
  category?: string,
}


const Filter: React.FC<CategoryProps> = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [categoryData, setCategoryData] = useState([]);
  const [activeCategory, setActiveCategory] = useState(category || "All");
  const makeCategories = async () => {
    setCategoryData(await getCategories());
  };

  const router = useRouter();


  const newRef = useRef<HTMLDivElement>(null);
  const handleOutsideCategory = (e:any) => {
    if (newRef.current && !newRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const handleCategory = (category: string) => {
    setIsOpen(false);
    setActiveCategory(category);
    let query = "";
    let qstring = "category=" + category;
    query = new URLSearchParams(qstring).toString();
    router.push("?" + query, { scroll: false, shallow: true });
  };

  const resetCategory = () => {
    router.push("/", { scroll: false, shallow: true });
    setActiveCategory("All");
    setIsOpen(false);
  };

  useEffect(() => {
    makeCategories();
    document.addEventListener("mousedown", handleOutsideCategory);
    return () => {
      document.removeEventListener("mousedown", handleOutsideCategory);
    };
  }, []);

  return (
    <div ref={newRef} className="relative inline-block text-left mr-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center bg-white hover:bg-gray-50 border rounded-lg text-gray-500 dark:text-gray-400 dark:bg-gray-700 rtl:flex-row-reverse dark:border-gray-600 dark:divide-gray-600 py-1 px-2"
      >
        <h2 className="text-base">Category: {activeCategory}</h2>
        <svg
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={`absolute left-0 z-10 mt-2 p-4 origin-top-left rounded-md bg-white dark:bg-gray-700 shadow-lg ring-1 ring-black dark:ring-gray-500 ring-opacity-5 focus:outline-none transition ease-out duration-100 w-[700px] ${
          isOpen
            ? "transform opacity-100 scale-100 visible"
            : "transform opacity-0 scale-95 invisible"
        } `}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={0}
      >
        <div className="py-1 grid grid-cols-4" role="none">
          <span
            onClick={resetCategory}
            className="text-gray-500 dark:text-gray-400 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-800 cursor-pointer"
            role="menuitem"
          >
            All
          </span>
          {categoryData.map((item: string, i) => (
            <span
              onClick={() => {
                handleCategory(item);
              }}
              key={"category" + i}
              className="text-gray-500 dark:text-gray-400 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-800 cursor-pointer"
              role="menuitem"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
 
export default Filter;