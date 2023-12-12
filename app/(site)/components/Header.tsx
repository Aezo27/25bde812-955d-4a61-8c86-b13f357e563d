import Filter from "./header/Filter";
import Search from "./header/Search";
import ThemeSwitch from "./header/ThemeSwitch";
import Add from "./modals/Add";

interface HeaderProps {
  total: string;
  category?: string;
  search?: string;
}

const ProductHeader: React.FC<HeaderProps> = ({ total, category, search }) => {
  return (
    <>
      <div className="flex justify-end mb-3 h-8">
        <ThemeSwitch />
      </div>
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
              {search ? "Search Product" : "Product List"}
            </h2>

            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
              {total} items
            </span>
          </div>
          {search && (
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
              Showing search result of {search}.
            </p>
          )}
        </div>

        <div className="flex items-center mt-4 gap-x-3">
          <Add/>
        </div>
      </div>

      <div className="mt-6 md:flex md:items-center md:justify-end">
        {!search && 
          <Filter category={category} />
        }
        <Search search={search} />
      </div>
    </>
  );
};

export default ProductHeader;
