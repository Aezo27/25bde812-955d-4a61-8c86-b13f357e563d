import Search from "./header/Search";
import ThemeSwitch from "./header/ThemeSwitch";

interface HeaderProps {
  total: string,
  search?: string;
}

const ProductHeader: React.FC<HeaderProps> = ({ total, search }) => {

  return (
    <>
      <div className="flex justify-end mb-3 h-8">
        <ThemeSwitch/>
      </div>
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
              {search ? "Search Product":"Product List"}
            </h2>

            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
              {total} items
            </span>
          </div>
          {search &&
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">Showing search result of {search}.</p>
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
        <Search search={search}/>
      </div>
    </>
  );
};

export default ProductHeader