
import Tooltip from "@/components/Tooltip";
import { getProduct } from "@/utils/data/api";
import Image from "next/image";
export default async function ProductTable() {
  const data = await getProduct();
  const products = data.products;

  console.log(products[0]);
  
  return (
    <div className="flex flex-col mt-6">
      <div className="">
        <div className="inline-block min-w-full py-2 align-middle">
          <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th
                    scope="col"
                    className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                  >
                    Picture
                  </th>

                  <th
                    scope="col"
                    className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                  >
                    <button className="flex items-center gap-x-3 focus:outline-none">
                      <span>Name</span>
                    </button>
                  </th>

                  <th
                    scope="col"
                    className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                  >
                    Brand
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                  >
                    Stock
                  </th>

                  <th scope="col" className="relative py-3.5 px-4">
                    <span className="sr-only">Action</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                {products.map((item: any) => (
                  <tr key={item.id}>
                    <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                      <div>
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          width={100}
                          height={100}
                          className="w-auto"
                        />
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                      <div>
                        <h2 className="font-medium text-gray-800 dark:text-white ">
                          {item.title}
                        </h2>
                      </div>
                    </td>
                    <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                      <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                        {item.brand}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="group relative">
                        <div className="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full">
                          <div
                            className="bg-blue-500 h-1.5"
                            style={{ width: (item.stock / 200) * 100 + "%" }}
                          ></div>
                        </div>
                        <Tooltip text={item.stock} />
                      </div>
                    </td>

                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
